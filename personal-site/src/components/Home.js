import { data, contactItems, skills } from "../services/data";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CardActions from "@material-ui/core/CardActions";
import Icon from "@material-ui/core/Icon";

const useStyles = makeStyles({
	root: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	paper: {
		minHeight: "65px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-evenly",
	},
	media: {
		width: "100%",
		minHeight: 250,
		minWidth: 250,
	},
	skills: {
		fontVariant: "all-small-caps",
		fontSize: "large",
		border: "thin",
		borderStyle: "dotted",
		borderRadius: "5px",
		margin: "5px 5px 5px 8px",
		padding: "5px",
		background: "#dbe9f1",
		fontWeight: "bold",
		textDecoration: "none",
		color: "#0a3f5e",
	},
	contact: {
		margin: "20px 10px 0px 0px",
	},
	items: {
		margin: "5px",
	},
	links: {
		color: "black",
		borderBottomStyle: "dotted",
		border: "thin",
	},
	header: {
		textAlign: "left",
		padding: "5%",
		margin: "1%",
	},
  skillscard: {
		minHeight: "65px",
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "center",
    margin: 'auto',
    alignItems: "center",
    direction: 'column',
    spacing: '0',    

	},
});

export default function Home() {
	const { firstName, headline, profilePic } = data;
	const profilepic = "images/" + profilePic;
	const classes = useStyles();

	return (
		<Grid container spacing={5} className={classes.root}>
			<Grid item xs={12}>
				<Card>
					<Grid container className={classes.root}>
						<Grid item sm={3} className={classes.media}>
							<CardMedia className={classes.media} image={profilepic} />
						</Grid>
						<Grid item sm={5}>
							<CardContent className={classes.header}>
								<Typography gutterBottom variant="h2" component="h2">
									Hi, I'm {firstName}
								</Typography>
								<Typography variant="body1" gutterBottom>
									{headline}
								</Typography>
								{contactItems.map((item) => (
									<Button
										variant="contained"
										color="default"
										className={classes.contact}
										href={item.href}
										key={contactItems.indexOf(item)}
										aria-label={item.text}
									>
										<Icon className={item.icon} />
									</Button>
								))}
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</Grid>
			<Grid item xs={12}>
				<Card className={classes.root}>
					<CardContent>
						<Typography variant="body2" gutterBottom>

              Hi my name is Quinn Rouse and I’m a junior in computer science at Purdue University.
              I have some experience developing software - both professional and personal.
              This past summer I was able to intern with Total Quality Logistics where I worked with another intern to build a piece of software to automatically assess elements on a website that need to be tested, and then automatically write test cases to cover those untested elements.
              It’s still in the process of rolling out to teams to start actually getting used, but it's been a fantastic learning experience for me, and has definitely confirmed that software development is what I want to do in the future.

						</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item>
				<Card className={classes.skillscard} justifyContent="center" alignItems="center">
					<CardContent>
						<Typography variant="h5" component="h2">
							Technical Skills
						</Typography>
						<CardActions className={classes.paper}>
							{skills.map((skill) => (
								<a href={skill.href} className={classes.skills}>
									<span key={skill.name}>
										<code>{skill.name}</code>
									</span>
								</a>
							))}
						</CardActions>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	);
}