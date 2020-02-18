import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { useHistory, Link } from "react-router-dom";

import { logout } from "utils";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: "inherit",
    textDecoration: "none"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  const handleLogout = () => {
    logout().then(() => history.push("/"));
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link to="/dashboard" className={classes.link}>
              Twitter
            </Link>
          </Typography>
          <Link to="/profile" className={classes.link}>
            <Button color="inherit">Profile</Button>
          </Link>
          <Button onClick={handleLogout} color="inherit">
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
