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

const INITIAL_ERRORS = {
  firstName: null,
  lastName: null,
  email: null,
  password: null
};

export default function SignUp() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
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

  const validate = ({ firstName, lastName, email, password }) => {
    let isValid = true;

    const validationErrors = { ...INITIAL_ERRORS }; // copy to not overwrite original object
    if (firstName.length < 1) {
      validationErrors.firstName = "First name required";
      isValid = false;
    }
    if (lastName.length < 1) {
      validationErrors.lastName = "Las name required";
      isValid = false;
    }
    if (email.length < 1) {
      validationErrors.email = "Email required";
      isValid = false;
    }
    if (password.length < 4) {
      validationErrors.password = "Password must have a length of 4";
      isValid = false;
    }
    setErrors(validationErrors);
    return isValid;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { firstName, lastName, email, password } = input;

    const isValid = validate({ firstName, lastName, email, password });
    if (!isValid) return;

    signup({ firstName, lastName, email, password })
      .then(() => {
        history.push("/dashboard");
      })
      .catch(err => {
        setErrors({ errors, email: err.message });
      });
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
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                onChange={e =>
                  setInput({ ...input, firstName: e.target.value })
                }
                error={!!errors.firstName}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
                onChange={e => setInput({ ...input, lastName: e.target.value })}
                error={!!errors.lastName}
                helperText={errors.lastName}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={e => setInput({ ...input, email: e.target.value })}
                error={!!errors.email}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                onChange={e => setInput({ ...input, password: e.target.value })}
                error={!!errors.password}
                helperText={errors.password}
              />
            </Grid>
            <div style={{ color: "red" }}>{errors.signup}</div>
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
      </div>
    </Container>
  );
}
