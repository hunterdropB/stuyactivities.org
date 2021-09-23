import React from "react";
import FlexCenter from "../../ui/FlexCenter";
import {
	Avatar,
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Typography,
	useMediaQuery,
} from "@material-ui/core";
import Linkify from "linkifyjs/react";
import List from "@material-ui/core/List";
import { generatePath, useParams, useRouteMatch } from "react-router-dom";
import UnstyledLink from "../../ui/UnstyledLink";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import { Dashboard, Description, Group, GroupWork, Person, Settings } from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { OrgContext } from "../../../pages/org";
import { gql, useMutation } from "@apollo/client";
import { triggerLoginDialog } from "../../auth/AuthDialog";
import UserContext from "../../context/UserContext";
import Join from "./join";

const useStyles = makeStyles(theme => ({
	avatar: {
		height: "200px",
		width: "200px",
		marginBottom: "1rem"
	},
	orgName: {
		textAlign: "center",
		marginTop: 0
	},
	stickyContainer: {
		position: "sticky",
		top: "40px"
	},
	break: {
		overflowWrap: "break-word"
	}
}));

const TabItem = ({ to, label, icon, exact = true }) => {
	const params = useParams();
	const renderedUrl = generatePath(to, params);
	const routeMatchesUrl = useRouteMatch(to);

	const isSelected = exact ? routeMatchesUrl?.isExact : Boolean(routeMatchesUrl);


	return (
		<UnstyledLink to={renderedUrl}>
			<ListItem button selected={isSelected}>
				<ListItemIcon>{icon}</ListItemIcon>
				<ListItemText primary={label} />
			</ListItem>
		</UnstyledLink>
	);
};

const LEAVE_MUTATION = gql`
	mutation DeleteMembership($membershipId: Int!) {
		deleteMembership(membershipId: $membershipId)
	}
`;

const OrgNavPanel = ({ match }) => {
	const classes = useStyles();

	const org = React.useContext(OrgContext);
	const user = React.useContext(UserContext);
	const isMobile = useMediaQuery("(max-width: 800px)");

	let memberStatus = org.membership ? "member" : "none";

	if (memberStatus === "none" && org.membershipRequest) {
		memberStatus = org.membershipRequest.adminApproval ? "invited" : "requested";
	}

	const [leaveOpen, setLeaveOpen] = React.useState(false);
	const [joinOpen, setJoinOpen] = React.useState(false);
	const [leaveMutation] = useMutation(LEAVE_MUTATION, {
		update(cache) {
			cache.reset().then(() => org.refetch());
		},
		onCompleted() {
			setLeaveOpen(false);
		},
		onError(error) {
			setLeaveOpen(false);
			setDialogError(error.message);
		}
	});
	const [dialogError, setDialogError] = React.useState("");

	return (
		<div className={classes.stickyContainer}>
			<FlexCenter>
				<Avatar className={classes.avatar} src={org?.charter?.picture?.icon} />
			</FlexCenter>
			<Typography className={classes.orgName} variant={"h5"}>
				{org?.name}
			</Typography>

			{org.charter.socials && (
				<Typography align={"center"} className={classes.break}>
					<Linkify>{org.charter.socials}</Linkify>
				</Typography>
			)}
			{org.active ? (
				memberStatus !== "member" ? (
					<Button color={"secondary"} fullWidth onClick={user.signedIn ? () => setJoinOpen(true) : triggerLoginDialog}>
						{memberStatus === "none" && "Request To Join"}
						{memberStatus === "invited" && "Accept Invitation"}
						{memberStatus === "requested" && "Requested"}
					</Button>
				) : (
					<Button color="secondary" onClick={() => setLeaveOpen(true)} fullWidth>
						Member (Click to Leave)
					</Button>
				)
			) : (
				<Typography variant={"subtitle2"} style={{ color: "grey", textAlign: "center" }}>
					Activity Pending Approval
					<br />
					Content On This Page Is Incomplete
				</Typography>
			)}

			<hr />
			<List component="nav" aria-label="main mailbox folders">
				<TabItem label={"Overview"} to={match.path} icon={<Dashboard />} />
				<TabItem label={"Charter"} to={match.path + "/charter"} icon={<Description />} />
				<TabItem label={"Meetings"} to={match.path + "/meetings"} icon={<GroupWork />} />
				<TabItem label={"Members"} to={match.path + "/members"} icon={<Person />} />
				<TabItem label={"Groups"} to={match.path + "/groups"} icon={<Group />} />

				{org.membership?.adminPrivileges && (
					<TabItem label={"Admin Panel"} exact={false} to={match.path + "/admin"} icon={<Settings />} />
				)}
			</List>
			<Dialog open={leaveOpen} onClose={() => setLeaveOpen(false)}>
				<DialogTitle>Are you sure you want to leave {org.name}?</DialogTitle>
				<DialogContent>
					<DialogContentText>If you leave, you will have to request to join again</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setLeaveOpen(false)}>Cancel</Button>
					<Button
						onClick={() => leaveMutation({ variables: { membershipId: org.membership.id } })}
						variant={"contained"}
						color={"primary"}
					>
						Leave
					</Button>
				</DialogActions>
			</Dialog>
			<Dialog open={joinOpen} maxWidth onClose={() => setJoinOpen(false)}>
				<Box p={1}>
					<Join />
				</Box>
			</Dialog>
			<Dialog open={dialogError !== ""} onClose={() => setDialogError("")}>
				<DialogTitle>Error: {dialogError}</DialogTitle>
				<DialogActions>
					<Button onClick={() => setDialogError("")}>Ok</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

export default OrgNavPanel;
