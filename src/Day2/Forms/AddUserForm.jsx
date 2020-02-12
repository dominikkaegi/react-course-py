import React, { useState } from "react";

export default function Form() {
  let [loading, setLoading] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    console.log("handle submit for me");
  };

  return (
    <div className="form" style={{ display: "flex", justifyContent: "center" }}>
      <form className="input-form" onSubmit={handleSubmit}>
        <div className="form-element">
          <label className="form-label" htmlFor="email">
            E-mail
          </label>
          <input id="email" className="form-text-input" type="text" />
        </div>

        <div className="form-element">
          <label className="form-label" htmlFor="firstName">
            First Name
          </label>
          <input id="firstName" className="form-text-input" type="text" />
        </div>

        <div className="form-element">
          <label className="form-label" htmlFor="lastName">
            Last Name
          </label>
          <input id="lastName" className="form-text-input" type="text" />
        </div>

        <div className="form-element">
          <label htmlFor="avatar">Avatar</label>
          <input id="avatar" className="form-text-input" type="text" />
        </div>

        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <button className="btn" style={{ width: "200px" }}>
            {loading ? "creating..." : "Create User"}
          </button>
        </div>
      </form>
    </div>
  );
}
