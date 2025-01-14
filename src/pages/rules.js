import React from "react";
import { Box, Link, Typography } from "@mui/material";
import BackButton from "../comps/ui/BackButton";

const classes = {
	main: {
		maxWidth: "1200px",
		margin: "auto",
		padding: "2rem"
	}
};

export default function Rules() {
	return (
		<Box sx={classes.main}>
			<BackButton to={"/"} label={"Back To Home"} />
			<Typography variant={"h4"} color="primary" style={{ textAlign: "center" }}>
				Rules
			</Typography>
			<Typography variant={"h5"} color="primary">
				Basics
			</Typography>
			<Typography paragraph>
				If you are experiencing technical issues or difficulties regarding the StuyActivities website, please
				contact us at{" "}
				<Link color="secondary" href="mailto:help@stuyactivities.org">
					help@stuyactivities.org
				</Link>
				,{" "}
				<Link color="secondary" href="mailto:clubpub@stuysu.org">
					clubpub@stuysu.org
				</Link>
				, or an SU representative.
			</Typography>
			<Typography>
				<ol>
					<li>
						For an Activity to exist and operate, a charter must be submitted and&nbsp;approved by&nbsp;the
						administrators of the Clubs &amp; Pubs department. Please allow up to 2 weeks for charter
						approval. When an Activity is fully approved and allowed to operate, its charter will be visible
						on the online catalog of the StuyActivities website (
						<Link color="secondary" href="https://stuyactivities.org/catalog">
							www.StuyActivities.org
						</Link>
						). All Activity leaders will receive an email when their charter has been fully approved and is
						in the catalog.
					</li>
					<li>
						All Activities must have at least two leaders (i.e. two co-presidents or a president and a
						vice-president).
					</li>
					<li>
						All Activities must meet in person or online at least once a month by registering an Activity
						meeting on the StuyActivities website. Any Activity found inactive for more than one month may
						face suspension and revocation of their charter.
					</li>
					<li>
						The Student Union reserves the right to facilitate mergers of highly similar Activities that
						share the same mission or are found to have excessive similarities with the approval of the
						Coordinator of Student Affairs (COSA).
					</li>
					<li>
						The Student Union reserves the right to suspend any Activity found to have violated the rules of
						their charter. All Activities MUST abide by what is submitted in their charter. If any changes
						need to be made, the Activity leader(s) must edit their charter accordingly and have the changes
						approved.
					</li>
					<li>
						All Activities must adhere to the New York City Department of Education{" "}
						<Link
							color="secondary"
							href="https://www.schools.nyc.gov/docs/default-source/default-document-library/a-601-english"
						>
							Chancellor’s Regulation A-601
						</Link>
						. Any Activity that violates this regulation or other{" "}
						<Link
							color="secondary"
							href="https://www.schools.nyc.gov/about-us/policies/chancellors-regulations"
						>
							Chancellor’s Regulations
						</Link>
						&nbsp;will face suspension and revocation of their charter.
					</li>
					<li>
						All Activities must adhere to the{" "}
						<Link
							color="secondary"
							href="https://stuy.enschool.org/apps/pages/index.jsp?uREC_ID=126635&type=d"
						>
							Stuyvesant Code of Conduct
						</Link>
						&nbsp;and other school policies. Any Activity that violates these regulations will face
						suspension and revocation of their charter.
					</li>
					<li>
						All Activities must host at least 1 club meeting in order to have their charter maintained. If a
						club fails to meet their quota, they will risk their club charter being revoked.
					</li>
				</ol>
			</Typography>
			<Typography variant={"h5"} color="primary">
				Official Regulations for Online Club Meetings
			</Typography>
			<Typography paragraph>
				<ol>
					<li>Official meetings may be hosted online.</li>
					<li>Links to all official online Activity meetings must be accessible on StuyActivities.</li>
					<li>
						All official Activity meetings must be scheduled on StuyActivities.
						<ul>
							<li>Official Activity meetings must take place between 2:30 PM and 8:00 PM.</li>
						</ul>
					</li>
					<li>
						In the event that an online Activity meeting is bombarded with uninvited guests and/or
						inappropriate behavior is exhibited (including racist, sexist, homophobic, or otherwise
						disrespectful comments or statements; bullying (online or in-person); and any violation of the
						rules of the Student Code of Conduct or the Chancellor’s Regulations), the Activity must end the
						meeting immediately and email MPolazz@schools.nyc.gov and clubpub@stuysu.org to report the
						issue.
					</li>
					<li>
						Please email help@stuyactivities.org for support using StuyActivities and IT@stuysu.org for
						general technical support.
					</li>
				</ol>
			</Typography>
			<Typography variant={"h5"} color="primary">
				Meetings
			</Typography>
			<Typography paragraph>
				If an Activity is found in violation of any of the rules below, it will receive a strike (or suspension
				if otherwise stated). Any combination of 3 strikes will result in the revocation of the Activity’s
				charter (the Activity must then reapply for a charter if it wishes to exist). Strikes cannot be
				appealed.&nbsp;Please note that all Activity meetings will be audited by an SU Auditor, who will report
				to the directors of the SU Clubs &amp; Pubs department, and will distribute strikes accordingly.
			</Typography>
			<Typography>
				<ol>
					<li>
						All Activities must hold meetings in an appropriate manner. Any complaints made by a member of
						the school staff or an SU Auditor in regards to an Activity’s meetings can result in the
						suspension of that Activity. This includes any inappropriate behavior, fights, roughhousing,
						racist, sexist, homophobic, or otherwise disrespectful comments or statements, bullying (online
						or in-person), and in general, any violation of the rules of the Student Code of Conduct&nbsp;or
						the Chancellor’s Regulations.
					</li>
					<li>
						If an Activity wishes to go on trips or engage in any official Activity-related meeting outside
						of the school’s premises, they must:
						<ul>
							<li>
								Have the registered Activity faculty advisor (not the student leaders) email{" "}
								<Link color="secondary" href="mailto:clubpub@stuysu.org">
									clubpub@stuysu.org
								</Link>
								, the COSA (Mr. Polazzo) and the Assistant Principal (Mr. Moran) at least one week in
								advance with the Subject: “Activity Meeting Outside of School Premises: [ACTIVITY NAME]”
							</li>
							<li>
								The email should detail the date, location, paperwork, number of people attending,
								Activity leader(s) and faculty leader names for the event.
							</li>
							<li>
								Have a faculty advisor present for the entirety of the event. Any Activity found in
								violation of this rule may face suspension and revocation of their charter.
							</li>
						</ul>
					</li>
					<li>
						All Activities must leave the school building no later than 5:00 PM or at the specified time
						during that day unless the registered Faculty Advisor for the Activity is present.
					</li>
					<li>Activities may not use SMARTBoards in the classrooms for their meetings.</li>
					<li>
						If an Activity wishes to use the media carts from the programming office, they may do so only
						with the presence of a registered Activity faculty advisor to sign them&nbsp;in and out.
					</li>
					<li>
						Activities may not put up flyers or advertise their Activity until their charter has been
						submitted and approved. All Activities are required to take down flyers from walls and/or
						bulletin boards within a week of the event having taken place.
						<ul>
							<li>
								Fliers deemed inappropriate by SU members and school staff will be taken down without
								warning (i.e. Ad Hominems, Hate Speech)
							</li>
							<li>Fliers placed in and/or near escalators will be relocated or torn down.</li>
						</ul>
					</li>
				</ol>
			</Typography>
			<Typography variant={"h5"} color="primary">
				Room Reservations and Usage
			</Typography>
			<Typography paragraph>
				If an Activity is found in violation of any of the rules below, it will receive a strike (or suspension
				if otherwise stated). Any combination of 3 strikes will result in the revocation of the Activity’s
				charter (the Activity must then reapply for a charter if it wishes to exist). Strikes cannot be
				appealed.&nbsp;Please note that all Activity meetings will be audited by an SU Auditor, who will report
				to the directors of the SU Clubs &amp; Pubs department, and will distribute strikes accordingly.
			</Typography>
			<Typography>
				<ol>
					<li>All Activities must reserve a room on StuyActivities to be able to hold a meeting.</li>
					<li>
						No Activity is entitled to a specific room. The room reservation process runs on a first-come,
						first-serve basis.
					</li>
					<li>
						If an Activity needs a long-term booking of a specific room, its leaders must email{" "}
						<Link color="secondary" href="mailto:clubpub@stuysu.org">
							clubpub@stuysu.org
						</Link>
						with the Subject: “Long Term Room Reservation: [ACTIVITY NAME]”, detailing the reason(s) for why
						this reservation is necessary. Long term reservations will be handled by the SU Clubs &amp; Pubs
						Department and approved on a case-by-case basis.
					</li>
					<li>
						All rooms used for Activity meetings must be kept clean and sanitary. This means returning all
						desks to their original positions, erasing all boards, cleaning up any remaining trash, etc. Any
						complaints made and registered by a member of the school staff or an SU Auditor to the SU Clubs
						&amp; Pubs department in regards to the condition of a room may result in a strike or
						suspension.
					</li>
					<li>
						All Activities must use the room reserved for their activity on the StuyActivities website.
						Please email clubpub@stuysu.org or contact an SU representative if you are unable to find a
						room.
					</li>
					<li>
						All room reservations must be canceled at least 24 hours in advance if the Activity can no
						longer hold its meeting.
					</li>
					<li>
						Any Activity that wishes to reserve and use spaces other than school classrooms (i.e. cafeteria,
						auditorium, lecture halls) for meetings must go through the process below.
						<ul>
							<li>
								The registered Activity faculty advisor (not the Activity leaders) must email{" "}
								<Link color="secondary" href="mailto:clubpub@stuysu.org">
									clubpub@stuysu.org
								</Link>
								, the Student Union COSA, Mr. Polazzo, and the Assistant Principal, Mr. Moran, at least
								one week in advance with the Subject: “[NAME OF FACILITY] Reservation: [ACTIVITY NAME].
								Mr. Polazzo can be reached at{" "}
								<Link color="secondary" href="mailto:MPolazz@schools.nyc.gov">
									MPolazz@schools.nyc.gov
								</Link>{" "}
								and can be found in Room, 260. Mr. Moran can be reached at{" "}
								<Link color="secondary" href="mailto:BMoran@schools.nyc.gov">
									BMoran@schools.nyc.gov
								</Link>{" "}
								and can be found in Room 103.
							</li>
							<li>
								The email should detail the reason for reserving the facility, as well as the date,
								location, number of people attending, and Activity leader names for the event.
							</li>
							<li>
								No Activity can invite guest speakers without approval from all entities listed above,
								as School Safety Agents must be notified in advance to let guest speakers into the
								building.
							</li>
						</ul>
					</li>
				</ol>
			</Typography>
			<Typography variant={"h5"} color="primary">
				Funding
			</Typography>
			<Typography>
				<ol>
					<li>
						The Stuyvesant Student Union reserves the right to provide funding to Activities. Activities may
						not request money from the Student Union if the money’s intended use is for:
						<ul>
							<li>Unapproved trips (all trips must be approved by the administration)</li>
							<li>Unapproved supplies or services (Guest speakers must be approved)</li>
							<li>
								Equipment that members of the Activity intend to keep (i.e. personal items such as
								shirts)
							</li>
							<li>Paying faculty advisors</li>
							<li>Computer systems and software (see Addendum below!)</li>
							<li>Food or beverages</li>
							<li>Apparel</li>
						</ul>
					</li>
					<li>
						The Student Union will host two rounds of funding: one in the Fall term, and one in the Spring
						Term. Activities may apply for funding in either or both rounds. Before each round of funding,
						registered Activities will receive an email containing the Budget Application and the Budget
						Rules. Only Activities in need of funding should fill out the application. Activities that
						submit applications that abide by the Budget Rules will be granted a meeting with the SU Budget
						Committee, and will receive a follow-up email with a designated date and time. To receive
						funding, each Activity must have at least one leader and the Faculty Advisor present at its
						meeting with the Student Union Budget Committee. Failure to attend the meeting will result in an
						automatic refusal of the Activity’s funding request. If there are extenuating circumstances
						preventing an Activity’s leader(s) or Faculty Advisor from attending the meeting, an email must
						be sent to{" "}
						<Link color="secondary" href="mailto:clubpub@stuysu.org">
							clubpub@stuysu.org
						</Link>{" "}
						and{" "}
						<Link color="secondary" href="mailto:budget@stuysu.org">
							budget@stuysu.org
						</Link>{" "}
						prior to the scheduled meeting time detailing the excuse. The Student Union will decide upon
						further action on a case-by-case basis and reserves the right to refuse an additional meeting if
						the excuse is not valid.
					</li>
					<li>
						When an Activity requests funding from the Student Union, the Activity can request to be given
						money in the form of a grant&nbsp;or a loan.
						<ul>
							<li>
								Grant:&nbsp;Upon receiving a grant, the Activity must spend its own money before
								receiving reimbursements from the Student Union up to the amount allocated (not
								including tax). Activities must save all of their receipts and submit original copies to
								the SU Budget Department (
								<Link color="secondary" href="mailto:budget@stuysu.org">
									budget@stuysu.org
								</Link>
								). Two weeks after submission, the Activity should go to Room 103 to pick up the
								reimbursement check from Ms. Caruzo (the school treasurer). The Budget Department cannot
								reimburse taxes, so it is suggested that the Activity use the school’s tax-exempt form.
								If granted money by the SU, the Budget Department will email the Activity the tax-exempt
								form.
							</li>
							<li>
								Loan:&nbsp;Upon receiving a loan, the Activity has until the end of the current school
								year to repay the Student Union, unless otherwise specified.
							</li>
						</ul>
					</li>
					<li>
						The Student Union reserves the right to ensure that the funds given to Activities have been
						spent appropriately, and in order to do so, the Student Union will audit each Activity that
						receives funding. By accepting funding from the SU, all Activities are subject to the following
						rules:
						<ul>
							<li>Activity leaders&nbsp;are expected to cooperate with the SU Budget Department.</li>
							<li>
								If an Activity has received a grant, it must provide proof of purchase of each item (in
								the form of a receipt) as well as information on the purchase (i.e. expected delivery
								date) to the Budget Department (
								<Link color="secondary" href="mailto:budget@stuysu.org">
									budget@stuysu.org
								</Link>
								) within seven days of purchase.
							</li>
							<li>Any items purchased must be shown at the advanced request of the Budget Department.</li>
							<li>
								All items purchased by Activities will be returned to the Student Union at the end of
								the school year. These will be kept in storage until the following school year, at which
								point, if the Activity still exists, they will return to the Activity’s possession. If
								not, the Student Union will assume possession of the items.
							</li>
						</ul>
					</li>
					<li>
						Activities found in violation of the aforementioned rules will receive a warning from the Budget
						Department via email. If the offense is severe enough, a warning is not required for action to
						be taken against the Activity. If the Activity is found to have committed a second violation,
						the Budget Department reserves the right to rescind the Activity’s funding for the remainder of
						the school year and suspend the Activity.
					</li>
					<li>
						Any Activity that uses money received from the SU in any way other than what it was originally
						approved for will be immediately suspended and will have its charter revoked.
					</li>
					<li>
						The Funding Rules are subject to change and the Student Union reserves the right to amend them
						through a majority vote of the Budget Committee.
					</li>
					<li>
						ADDENDUM (2020-2021)
						<ul>
							<li>
								Rule 5 under Budget Rules for Club Pub Allocations is deemed void for the remainder of
								the 2020-2021 school year.
							</li>
							<li>
								Computer systems and softwares that are strictly related to club activities will be
								considered in the allocation process, and may include, but are not limited to: (a)
								Editing softwares for videography and photography, (b) Communication/video platforms
								(ex. Zoom Pro Plan) , and (c) Online subscription services (excluding streaming services
								such as Netflix, Spotify, Hulu, etc.){" "}
							</li>
							<li>This addendum will go into effect immediately after passage.</li>
						</ul>
					</li>
				</ol>
			</Typography>
			<Typography variant={"h5"} color="primary">
				Funding
			</Typography>
			<Typography>
				<ul>
					<li>
						A Faculty Advisor must be present if:
						<ul>
							{" "}
							<li>
								An Activity plans to host speakers and lectures in the cafeteria, library, lecture
								halls, or auditoriums.
							</li>
							<li>
								An Activity plans to host events, meetings, field trips, etc outside of Stuyvesant with
								Activity members present. This does not include virtual meetings.
							</li>
							<li>An Activity plans to host meetings in Stuyvesant past 5:00 PM.</li>
							<li>An Activity plans to request funding from the Student Union.</li>
						</ul>
					</li>
					<li>
						If an Activity wishes to spend the money they have received during the Club Pub Allocations
						Process, the faculty advisor must sign under the “Advisor/COSA” field on the Reimbursement Form.
						This will indicate that the purchase has been approved by the faculty advisor.
					</li>
					<li>
						If an Activity has received any combination of 3 strikes, they may resubmit a charter after
						their suspension. If approved, a faculty advisor must be present at all meetings until otherwise
						specified by the Student Union.
					</li>
				</ul>
			</Typography>
			<Typography paragraph>
				ANY ACTIVITY THAT FAILS TO AGREE WITH THE ABOVE SET OF RULES WILL NOT BE CHARTERED. THE STUYVESANT
				STUDENT UNION RESERVES THE RIGHT TO SUSPEND ANY ACTIVITY THAT DOES NOT FOLLOW THESE RULES WITHOUT ANY
				PRIOR NOTICE.
			</Typography>
		</Box>
	);
}
