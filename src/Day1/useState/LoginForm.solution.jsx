import React, { useState } from "react";

// Exercise:
// 1. Add a boolean state to the form
// 2. Make sure that when you set the boolean state by hand to true or false
//    that the password is either shown with asterics e.g. (*******) or in plain
//    text.
// 3. Add an event handler which handles the state changes when changing the switches.

export default function Form() {
  const [showPassword, setShowPassword] = useState(false);

  function handleChange() {
    setShowPassword(!showPassword);
  }

  return (
    <div className="form" style={{ display: "flex", justifyContent: "center" }}>
      <form className="input-form">
        <div className="form-element">
          <label class="form-label" htmlFor="email">
            E-mail
          </label>
          <input id="email" class="form-text-input" type="text" />
        </div>

        <div className="form-element">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            class="form-text-input"
            type={showPassword ? "text" : "password"}
          />
        </div>
        <div className="form-element">
          <label htmlFor="showPassword">
            <input
              type="checkbox"
              checked={showPassword}
              onChange={handleChange}
            />
            Show Password
          </label>
        </div>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn">Login</button>
        </div>
      </form>
    </div>
  );
}
