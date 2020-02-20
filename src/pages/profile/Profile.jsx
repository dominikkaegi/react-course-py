import React, { useState, useEffect } from "react";

import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { getActiveUser, getUserById } from "utils";

import { useParams } from "react-router-dom";

import Spinner from "components/spinner/Spinner";
import ProfileDisplay from "./ProfileDisplay";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    minHeight: "100vh"
  }
}));

export default function Profile() {
  const classes = useStyles();
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getUserById(id).then(user => {
      setUser(user);
    });
  }, [id]);

  if (!user) {
    return <Spinner />;
  }

  return (
    <Paper className={classes.paper}>
      <Container component="main" maxWidth="sm">
        <ProfileDisplay user={user} />
      </Container>
    </Paper>
  );
}
