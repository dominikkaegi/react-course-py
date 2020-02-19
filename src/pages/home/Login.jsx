import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { login } from "utils";

const useStyles = makeStyles(theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const INITAL_ERRORS = {
  email: null,
  password: null,
  login: null
};

export default function Login() {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState(INITAL_ERRORS);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const validate = ({ email, password }) => {
    let isValid = true;

    let validationErrors = { ...INITAL_ERRORS }; // copy errors so that we don't overwrite the default erros
    // Feel free to add more complex validation with Regular Expressions
    if (email.length === 0 || !email.includes("@")) {
      validationErrors.email = "Not a valid E-mail";
      isValid = false;
    }
    if (password.length < 2) {
      validationErrors.password = "Password is too short";
      isValid = false;
    }
    setErrors({ ...validationErrors });

    return isValid;
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = input;

    const isValid = validate({ email, password });
    if (!isValid) return;

    login({ email, password })
      .then(() => {
        console.log("redirect to dashboards");
      })
      .catch(err => {
        setErrors({ ...errors, login: err.message });
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={input.email}
            onChange={e => setInput({ ...input, email: e.target.value })}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={input.password}
            onChange={e => setInput({ ...input, password: e.target.value })}
            error={!!errors.password}
            helperText={errors.password}
          />
          <FormControlLabel
            control={
              <Checkbox
                value={showPassword}
                onChange={() => handleShowPassword()}
                color="primary"
              />
            }
            label="Show password"
          />
          <div style={{ color: "red" }}>{errors.login}</div>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}
