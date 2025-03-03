import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Logo from "./../../../img/logo512.png";
import UserContext from "../../context/UserContext";
import {
	AccountBoxOutlined,
	AddCircleOutlined,
	ArchiveOutlined,
	EmojiSymbolsOutlined,
	ExploreOutlined,
	GavelOutlined,
	GroupWorkOutlined,
	HomeOutlined,
	InfoOutlined,
	LockOpenOutlined,
	PowerSettingsNewOutlined,
	MeetingRoomOutlined,
	SettingsOutlined
} from "@mui/icons-material";
import { Avatar, Typography } from "@mui/material";
import UnstyledLink from "../UnstyledLink";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { triggerLoginDialog } from "../../auth/AuthDialog";
import Box from "@mui/material/Box";

const classes = {
	list: {
		width: 250
	},
	avatar: {
		width: "100px",
		height: "100px"
	},
	avatarContainer: {
		padding: "1rem"
	},
	ul: {
		backgroundColor: "inherit",
		paddingLeft: 0
	}
};

const gradeLabels = {
	9: "Freshman",
	10: "Sophomore",
	11: "Junior",
	12: "Senior",
	13: "Alumni"
};

const NavDrawer = ({ drawerOpen, setDrawerOpen }) => {
	const user = useContext(UserContext);
	const location = useLocation();

	React.useEffect(() => {
		// Close the drawer if the user uses it to navigate
		setDrawerOpen(false);
	}, [location, setDrawerOpen]);

	return (
		<Drawer anchor={"left"} open={drawerOpen} onClose={() => setDrawerOpen(false)}>
			<Box sx={classes.avatarContainer}>
				{user.signedIn ? (
					<div>
						<Avatar src={user.picture} sx={classes.avatar} />
						<Typography variant={"h5"}>{user?.name}</Typography>
						<Typography variant={"body2"}>{user?.email}</Typography>
						{Boolean(user?.fourDigitId) && (
							<Typography variant={"body2"}>Four Digit ID: {user?.fourDigitId}</Typography>
						)}
						<Typography variant={"body2"}>
							{user?.isFaculty ? "Faculty" : gradeLabels[user?.grade]}
						</Typography>
					</div>
				) : (
					<div>
						<Box component="img" src={Logo} sx={classes.avatar} alt={"Student Union Logo"} />
						<Typography variant={"h6"}>StuyActivities</Typography>
					</div>
				)}
			</Box>
			<List sx={classes.list}>
				{user.signedIn ? (
					<ListItem button onClick={() => user.logout()}>
						<ListItemIcon>
							<PowerSettingsNewOutlined />
						</ListItemIcon>
						<ListItemText primary={"Sign Out"} />
					</ListItem>
				) : (
					<ListItem button onClick={() => triggerLoginDialog()}>
						<ListItemIcon>
							<LockOpenOutlined />
						</ListItemIcon>
						<ListItemText primary={"Sign In"} />
					</ListItem>
				)}

				<UnstyledLink to={"/"}>
					<ListItem button>
						<ListItemIcon>
							<HomeOutlined />
						</ListItemIcon>
						<ListItemText primary={"Home"} />
					</ListItem>
				</UnstyledLink>
				{user?.memberships?.length > 0 && (
					<UnstyledLink to={"/settings"}>
						<ListItem button>
							<ListItemIcon>
								<SettingsOutlined />
							</ListItemIcon>
							<ListItemText primary={"Email Settings"} />
						</ListItem>
					</UnstyledLink>
				)}
				{user?.adminRoles?.length > 0 && (
					<UnstyledLink to={"/admin"}>
						<ListItem button>
							<ListItemIcon>
								<AccountBoxOutlined />
							</ListItemIcon>
							<ListItemText primary={"Admin Panel"} />
						</ListItem>
					</UnstyledLink>
				)}

				<ListSubheader disableSticky>Discover</ListSubheader>
				{user.signedIn && (
					<UnstyledLink to={"/explore"}>
						<ListItem button>
							<ListItemIcon>
								<ExploreOutlined />
							</ListItemIcon>
							<ListItemText primary={"Explore"} />
						</ListItem>
					</UnstyledLink>
				)}

				{user.signedIn && (
					<UnstyledLink to={"/my-meetings"}>
						<ListItem button>
							<ListItemIcon>
								<MeetingRoomOutlined />
							</ListItemIcon>
							<ListItemText primary={"My Meetings"} />
						</ListItem>
					</UnstyledLink>
				)}

				<UnstyledLink to={"/meetings"}>
					<ListItem button>
						<ListItemIcon>
							<GroupWorkOutlined />
						</ListItemIcon>
						<ListItemText primary={"All Meetings"} />
					</ListItem>
				</UnstyledLink>

				<UnstyledLink to={"/catalog"}>
					<ListItem button>
						<ListItemIcon>
							<EmojiSymbolsOutlined />
						</ListItemIcon>
						<ListItemText primary={"Catalog"} />
					</ListItem>
				</UnstyledLink>

				{user.signedIn && (
					<ListItem
						button
						onClick={() =>
							window.open(
								"https://docs.google.com/spreadsheets/d/17q8qR0x-JYLaiuI2K3Fn435Q2qLWrsUfBS0ZR4QqTfk/edit?usp=sharing"
							)
						}
					>
						<ListItemIcon>
							<ArchiveOutlined />
						</ListItemIcon>
						<ListItemText primary={"Archive"} />
					</ListItem>
				)}
				{user.signedIn && (
					<>
						<ListSubheader disableSticky>My Activities</ListSubheader>
						{user.memberships?.map(membership => (
							<UnstyledLink key={membership.id} to={`/${membership?.organization?.url}`}>
								<ListItem button>
									<ListItemAvatar>
										<Avatar
											alt={membership?.organization?.name}
											src={membership?.organization?.charter?.picture?.tinyThumbnail}
										/>
									</ListItemAvatar>
									<ListItemText
										primary={membership?.organization?.name}
										secondary={membership?.role}
									/>
								</ListItem>
							</UnstyledLink>
						))}
						<UnstyledLink to={"/charter"}>
							<ListItem button>
								<ListItemIcon>
									<AddCircleOutlined />
								</ListItemIcon>
								<ListItemText primary={"Create New Activity"} />
							</ListItem>
						</UnstyledLink>
					</>
				)}

				<ListSubheader disableSticky>Info</ListSubheader>
				<UnstyledLink to={"/about"}>
					<ListItem button>
						<ListItemIcon>
							<InfoOutlined />
						</ListItemIcon>
						<ListItemText primary={"About"} />
					</ListItem>
				</UnstyledLink>

				<UnstyledLink to={"/rules"}>
					<ListItem button>
						<ListItemIcon>
							<GavelOutlined />
						</ListItemIcon>
						<ListItemText primary={"Rules"} />
					</ListItem>
				</UnstyledLink>
			</List>
		</Drawer>
	);
};
export default NavDrawer;
