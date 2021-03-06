import React from "react";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import TweetForm from "./TweetForm";
import Feed from "./Feed";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    minHeight: "100vh"
  }
}));

export default function Dashboard() {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Container component="main" maxWidth="sm">
        <TweetForm />
        <Feed />
      </Container>
    </Paper>
  );
}
