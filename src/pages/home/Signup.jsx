import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";

import { signup } from "utils";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({ signupError: null });
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  });
  const history = useHistory();

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = input;

    try {
      await signup({ firstName, lastName, email, password });
      history.push("/dashboard");
    } catch (err) {
      console.log(err.message);
      setErrors({ errors, signupError: err.message });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e =>
                  setInput({ ...input, firstName: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => setInput({ ...input, lastName: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setInput({ ...input, email: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={e => setInput({ ...input, password: e.target.value })}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value={showPassword} color="primary" />}
                label="Show Password"
                onChange={handleShowPassword}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
        </form>
        <pre>{JSON.stringify({ input, errors }, null, 2)}</pre>
      </div>
    </Container>
  );
}
