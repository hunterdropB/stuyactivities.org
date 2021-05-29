import React from "react";
import { gql, useQuery } from "@apollo/client";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import SearchBox from "../../comps/pages/catalog/filters/SearchBox";
import UnstyledLink from "../../comps/ui/UnstyledLink";
import LazyLoadComponent from "react-lazyload";

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "2rem"
	},
	logCard: {
		margin: "4px",
		padding: "1rem",
		"&:hover": {
			color: "#e66767"
		}
	}
}));

const QUERY = gql`
	query Organizations($keyword: String) {
		organizations(keyword: $keyword) {
			name
			strikes {
				reason
				createdAt
			}
			url
			updatedAt
		}
	}
`;

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-auto-tabpanel-${index}`}
			aria-labelledby={`scrollable-auto-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Container>
					<Box p={3}>{children}</Box>
				</Container>
			)}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `scrollable-auto-tab-${index}`,
		"aria-controls": `scrollable-auto-tabpanel-${index}`
	};
}

const AdminLog = () => {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);
	const [keyword, setKeyword] = React.useState("");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	// const {
	// 	error,
	// 	data
	// 	// refetch
	// } = useQuery(QUERY, {
	// 	variables: keyword
	// });

	const {
		error,
		data
		// refetch
	} = useQuery(QUERY, {
		variables: {
			keyword
		}
	});

	if (error) return <p>There was an error loading this page</p>;

	let orgArray = data?.organizations.slice().sort((a, b) => {
		return new Date(b.updatedAt) - new Date(a.updatedAt);
	});

	let orgStrike = [];
	data?.organizations.forEach(org => {
		if (org.strikes.length !== 0) {
			org.strikes.forEach(strike => {
				orgStrike.push({
					name: org.name,
					url: org.url,
					strike: strike
				});
			});
		}
	});

	orgStrike.sort((a, b) => {
		return new Date(b.strike.createdAt) - new Date(a.strike.createdAt);
	});

	return (
		<div className={classes.root}>
			<Paper position="static" color="default">
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="primary"
					textColor="primary"
					variant="scrollable"
					scrollButtons="auto"
				>
					<Tab label="Strikes" {...a11yProps(0)} />
					<Tab label="Organization Updates" {...a11yProps(1)} />
				</Tabs>
				<TabPanel value={value} index={0}>
					<div>
						<SearchBox setKeyword={setKeyword} keyword={keyword} />
						{orgStrike &&
							orgStrike.map(org => {
								const date = new Date(org.strike.createdAt);
								const minutes =
									date.getMinutes().toString().length === 1
										? "0" + date.getMinutes()
										: date.getMinutes();
								console.log(org.url);
								return (
									<LazyLoadComponent>
										<div className={classes.logCard}>
											<UnstyledLink to={`/${org.url}`}>
												<Typography>{org.name}</Typography>
												<Typography>Reason: {org.strike.reason}</Typography>
												<Typography>
													{org.strike.createdAt.split("T")[0] +
														", " +
														date.getHours() +
														":" +
														minutes}
												</Typography>
											</UnstyledLink>
										</div>
										<Divider variant="middle" />
									</LazyLoadComponent>
								);
							})}
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					<SearchBox setKeyword={setKeyword} keyword={keyword} />
					{orgArray &&
						orgArray.map(org => {
							const date = new Date(org.updatedAt);
							const minutes =
								date.getMinutes().toString().length === 1 ? "0" + date.getMinutes() : date.getMinutes();
							return (
								<LazyLoadComponent>
									<div className={classes.logCard}>
										<UnstyledLink to={`/${org.url}`}>
											<Typography>{org.name}</Typography>
											<Typography>
												Last Update:{" "}
												{org.updatedAt.split("T")[0] + ", " + date.getHours() + ":" + minutes}
											</Typography>
										</UnstyledLink>
									</div>
									<Divider variant="middle" />
								</LazyLoadComponent>
							);
						})}
				</TabPanel>
			</Paper>
		</div>
	);
};

export default AdminLog;