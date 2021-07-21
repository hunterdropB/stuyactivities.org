import React, { useState } from "react";
import {
	Button,
	FormControlLabel,
	Grid,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	makeStyles,
	Switch,
	TextField,
	Typography
} from "@material-ui/core";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Checkbox from "@material-ui/core/Checkbox";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import * as moment from "moment";
import MomentUtils from "@date-io/moment";
import { gql, useQuery } from "@apollo/client";
import { MuiPickersUtilsProvider, DatePicker, TimePicker } from "@material-ui/pickers";
import TinyEditor from "../../updates/TinyEditor";

const availableRooms = gql`
	query ($start: DateTime!, $end: DateTime!){
		availableRooms(start: $start, end: $end) {
			id
			name
			floor
			approvalRequired
		}
	}
`;

const useStyles = makeStyles(theme => ({
	marginBottom: {
		marginBottom: theme.spacing(1)
	},
	marginBottomBig: {
		marginBottom: theme.spacing(2)
	}
}));

const MeetingForm = ({ submit, buttonText, checkboxText, meeting = {}, isSubmitting, errorMessage }) => {
	const classes = useStyles();
	const [title, setTitle] = React.useState(meeting.title || "");
	const [isPublic, setIsPublic] = useState(meeting.privacy === "public");
	const [description, setDescription] = React.useState(meeting.description || "");

	let defaultStart = new Date();
	let defaultEnd = new Date();
	defaultStart.setHours(15, 0);
	defaultEnd.setHours(17, 0);

	const [time, setTime] = React.useState({
		start: moment(meeting.start ? new Date(meeting.start) : defaultStart),
		end: moment(meeting.end ? new Date(meeting.end) : defaultEnd)
	});

	const [checked, setChecked] = React.useState(false);

	const isMobile = useMediaQuery("(max-width: 800px)");

	const [lastErr, setLastErr] = React.useState("");
	const closeDialog = () => {
		setLastErr(errorMessage);
	};

	//only show error dialog box if mutation submission is completed & error message is a new one
	const err_dialog_open = !isSubmitting && errorMessage !== "" && errorMessage !== lastErr;

	const Virtual = { name: "Virtual", id: 0 };
	const [room, setRoom] = React.useState(Virtual);

	const { data, loading, error } = useQuery(availableRooms, {
		variables: {
			...time
		}
	});

	const updateEnd = (new_end) => {
		let end = moment(
			`${time.start.format("MM-DD-YYYY")} ${new_end.format("HH:mm")}`,
			"MM-DD-YYYY HH:mm"
		)
		setTime({ ...time, end });
	}

	const updateDate = (start) => {
		let end = moment(
			`${start.format("MM-DD-YYYY")} ${time.end.format("HH:mm")}`,
			"MM-DD-YYYY HH:mm"
		)
		setTime({ start, end });
	};


	let rooms = (loading || error) ? [Virtual] : [Virtual].concat(data.availableRooms);
	const roomAvailable = !loading && !error && rooms.find(roomNumber => roomNumber.name === room.name) !== undefined;
	const valid = !err_dialog_open && roomAvailable;

	return (
		<div>
			<Dialog fullScreen={isMobile} open={err_dialog_open} onClose={closeDialog}>
				<DialogTitle>Something went wrong...</DialogTitle>
				<DialogContent>
					<DialogContentText>{errorMessage}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={closeDialog} color="primary">
						Close
					</Button>
				</DialogActions>
			</Dialog>
			<TextField
				className={classes.marginBottomBig}
				fullWidth
				variant="outlined"
				label="Title"
				value={title}
				placeholder={"e.g. Weekly Check In #2"}
				onChange={e => setTitle(e.target.value)}
			/>
			<Grid container spacing={1}>
				<MuiPickersUtilsProvider utils={MomentUtils}>
					<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
						<DatePicker
							fullWidth
							autoOk
							label="Date"
							value={time.start}
							format="MMM DD"
							onChange={updateDate}
							animateYearScrolling
							inputVariant="outlined"
						/>
					</Grid>
					<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
						<TimePicker
							fullWidth
							autoOk
							placeholder="03:00 PM"
							mask="__:__ _M"
							label="Start Time"
							inputVariant="outlined"
							value={time.start}
							onChange={updateDate}
						/>
					</Grid>
					<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
						<TimePicker
							fullWidth
							autoOk
							placeholder="05:00 PM"
							mask="__:__ _M"
							label="End Time"
							inputVariant="outlined"
							value={time.end}
							onChange={updateEnd}
						/>
					</Grid>
					<Grid item xs={12} sm={3} md={3} lg={3} xl={3}>
						<Autocomplete
							options={rooms}
							getOptionLabel={(option) => option.name}
							disabled={loading}
							error={!roomAvailable}
							value={room}
							onChange={(_, r) => setRoom(r)}
							renderInput={
								(params) =>
									<TextField
										{...params}
										label="Room"
										variant="outlined"
									/>}
						/>
					</Grid>
				</MuiPickersUtilsProvider>
			</Grid>

			<br />
			<TinyEditor
				value={description}
				setValue={setDescription}
				placeholder={`e.g. We're going to be discussing the movie Ender's game this week. \n\nHere's a link to the zoom call: https://zoom.us/j/94318855567?pwd=bFpPbVV4ZStaNlVMRjY1UnZJV2tTdz09`}
			/>

			<Grid component="label" container alignItems="center" spacing={1}>
				<Grid item>Members Only</Grid>
				<Grid item>
					<Switch checked={isPublic} onChange={() => setIsPublic(!isPublic)} />
				</Grid>
				<Grid item>Public</Grid>
			</Grid>
			<Typography paragraph variant={"body2"} color={"primary"}>
				If a meeting is not public then only members of the club will be able to see the description.
			</Typography>

			<FormControlLabel
				control={<Checkbox checked={checked} onChange={e => setChecked(e.target.checked)} />}
				label={checkboxText}
			/>
			<br />

			<Button
				onClick={() => {
					setLastErr("");
					submit({
						title,
						description,
						endTime: time.end,
						checked,
						date: time.start,
						privacy: isPublic ? "public" : "private",
						...room.id !== 0 && { roomId: room.id },
					});
				}}
				color={"primary"}
				variant="contained"
				disabled={!valid}
			>
				{buttonText}
			</Button>
		</div>
	);
};

export default MeetingForm;
