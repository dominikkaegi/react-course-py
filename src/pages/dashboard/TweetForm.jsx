import React, { Fragment, useState, useEffect } from "react";

import TextField from "@material-ui/core/TextField";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import { createTweet, getActiveUser } from "utils";

const useStyles = makeStyles(theme => ({
  tweet: {
    height: "240px"
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7)
  }
}));

export default function TweetForm() {
  const classes = useStyles();
  const [message, setMessage] = useState("");
  const [disableAction, setDisableAction] = useState(false);

  const [user, setUser] = useState(null);

  useEffect(() => {
    getActiveUser().then(user => {
      setUser(user);
    });
  }, []);

  const handleCreateTweet = () => {
    if (message.length === 0) return;

    setDisableAction(true);
    createTweet({ message, user }).then(() => {
      setMessage("");
      setDisableAction(false);
    });
  };

  const MESSAGE_LIMIT = 280;

  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {user && (
            <Avatar className={classes.large} alt="Avatar" src={user.avatar} />
          )}
        </Grid>
        <Grid item xs={10}>
          <TextField
            // className={classes.tweet}
            rows="6"
            name="firstName"
            variant="outlined"
            fullWidth
            id="tweet"
            label="What is new?"
            autoFocus
            multiline
            value={message}
            onChange={e => setMessage(e.target.value)}
            error={message.length > MESSAGE_LIMIT}
          />
        </Grid>
      </Grid>
      <Grid container direction="row" justify="flex-end" spacing={3}>
        <Grid item>
          <div>
            {message.length}/{MESSAGE_LIMIT}
          </div>
        </Grid>
        <Grid item>
          <Button
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={message.length > MESSAGE_LIMIT || disableAction}
            onClick={handleCreateTweet}
          >
            Tweet
          </Button>
        </Grid>
      </Grid>
    </Fragment>
  );
}
