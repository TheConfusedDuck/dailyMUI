import React from "react";
import { useState } from "react";
import "./signup.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="sign-up-page">
      <div className="form-box">
        <div className="image-side" />
        <div className="form-side">
          <form onSubmit={handleSubmit} className="form">
            <h3>Sign up</h3>
            <input
              name="name"
              value={name}
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
