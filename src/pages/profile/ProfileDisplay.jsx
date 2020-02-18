import React from "react";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(5),
    minHeight: "100vh"
  },
  avatar: {
    height: "150px",
    width: "150px"
  },
  centerContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
}));

export default function ProfileDisplay(props) {
  const classes = useStyles();
  const { editable, user } = props;
  console.log(props);

  const action = editable ? (
    <IconButton aria-label="settings">
      <EditIcon />
    </IconButton>
  ) : null;

  return (
    <Card style={{ margin: "10px" }}>
      <CardHeader action={action} />
      <CardContent>
        <div className={classes.centerContent}>
          <Avatar className={classes.avatar} src={user.avatar}>
            R
          </Avatar>
          <Typography variant="h2">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="h5">{user.email}</Typography>
        </div>
      </CardContent>
    </Card>
  );
}
