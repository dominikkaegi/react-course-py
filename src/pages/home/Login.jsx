import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useHistory } from "react-router-dom";

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

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ loginError: null });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = input;
    try {
      await login({ email, password });
      history.push("/dashboard");
    } catch (err) {
      setErrors({ ...errors, loginError: err.message });
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={input.email}
            onChange={e => setInput({ ...input, email: e.target.value })}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            value={input.password}
            onChange={e => setInput({ ...input, password: e.target.value })}
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
      <pre>
        {JSON.stringify(
          {
            input,
            errors,
            showPassword
          },
          null,
          2
        )}
      </pre>
    </Container>
  );
}
