import React, { useState } from "react";
import "./styles/register.css"; // cleaner than require()

function Register() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    // Here you’d usually send email to your backend or API
  };

  return (
    <div className="register-container">
      <div className="registerHeading">
        <h1 className="heading-text">
          Get the latest on O R B I — sign up now for daily insights!
        </h1>
      </div>

      <form className="input_wrap" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Register;
