import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import NavBar from "./NavBar";
import NavDrawer from "./NavDrawer";

const Navigation = () => {
	const [drawerOpen, setDrawerOpen] = React.useState(false);

	return (
		<React.Fragment>
			<NavBar setDrawerOpen={setDrawerOpen} />
			<NavDrawer drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen} />
			<CssBaseline />
		</React.Fragment>
	);
};

export default Navigation;
