import React, { useState, Fragment } from "react";

import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Container from "@material-ui/core/Container";

import Login from "./Login";
import Signup from "./Signup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(9),
    padding: theme.spacing(5),
    minHeight: "80vh"
  }
}));

export default function Home() {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper className={classes.paper}>
      <Container component="main" maxWidth="xs">
        <Tabs variant="fullWidth" value={value} onChange={handleChange}>
          <Tab label="Login" />
          <Tab label="Signup" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Login />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Signup />
        </TabPanel>
      </Container>
    </Paper>
  );
}

function TabPanel({ value, index, children }) {
  return <Fragment>{value === index && children}</Fragment>;
}
