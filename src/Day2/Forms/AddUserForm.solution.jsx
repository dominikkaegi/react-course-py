import React, { useState } from "react";
import { createUser } from "../../utils/faker_api";

let intitalErrors = {
  email: null,
  firstName: null,
  lastName: null,
  errorMessage: null
};

export default function Form() {
  let [email, setEmail] = useState("");
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [avatar, setAvatar] = useState("");
  let [errors, setErrors] = useState(intitalErrors);
  let [loading, setLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;

    let err = intitalErrors;
    if (!email) {
      err.email = "Email required";
      isValid = false;
    }
    if (!firstName) {
      err.firstName = "Firstname required";
      isValid = false;
    }
    if (!lastName) {
      err.lastName = "Lastname required";
      isValid = false;
    }
    if (isValid) {
      setErrors(intitalErrors);
    } else {
      setErrors(err);
    }

    return isValid;
  };

  const handleSubmit = event => {
    event.preventDefault();
    let isFormValid = validateForm();

    if (isFormValid) {
      setLoading(true);
      createUser({
        email,
        firstName,
        lastName,
        avatar
      })
        .then(user => {
          setLoading(false);
          console.log(user);
        })
        .catch(err => {
          setErrors({ ...errors, errorMessage: err.message });
        });
    }
  };

  return (
    <div className="form" style={{ display: "flex", justifyContent: "center" }}>
      <form className="input-form" onSubmit={handleSubmit}>
        <div>
          <span className="error-text">
            {errors.errorMessage ? errors.errorMessage : ""}
          </span>
        </div>
        <div className="form-element">
          <label className="form-label" htmlFor="email">
            E-mail*
          </label>
          <input
            id="email"
            className="form-text-input"
            type="text"
            onChange={e => setEmail(e.target.value)}
          />
          <div>
            <span className="error-text">
              {errors.email ? errors.email : ""}
            </span>
          </div>
        </div>

        <div className="form-element">
          <label className="form-label" htmlFor="firstName">
            First Name*
          </label>
          <input
            id="firstName"
            className="form-text-input"
            type="text"
            onChange={e => setFirstName(e.target.value)}
          />
          <div>
            <span className="error-text">
              {errors.firstName ? errors.firstName : ""}
            </span>
          </div>
        </div>

        <div className="form-element">
          <label className="form-label" htmlFor="lastName">
            Last Name*
          </label>
          <input
            id="lastName"
            className="form-text-input"
            type="text"
            onChange={e => setLastName(e.target.value)}
          />
          <div>
            <span className="error-text">
              {errors.lastName ? errors.lastName : ""}
            </span>
          </div>
        </div>

        <div className="form-element">
          <label htmlFor="avatar">Avatar</label>
          <input
            id="avatar"
            className="form-text-input"
            type="text"
            onChange={e => setAvatar(e.target.value)}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button type="submit" className="btn" style={{ width: "200px" }}>
            {loading ? "creating..." : "Create User"}
          </button>
        </div>
      </form>
      <pre>
        {/* {JSON.stringify(
          {
            email,
            firstName,
            lastName,
            avatar,
            errors
          },
          null,
          2
        )} */}
      </pre>
    </div>
  );
}
