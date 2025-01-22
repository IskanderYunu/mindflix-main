import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    grade: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users",
        formData
      );
      setMessage("User registered successfully!");
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error registering user.");
    }
  };

  return (
    <div className="signup-container">
      <form
        className="signup-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}
      >
        <h2>Sign Up</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="grade">Grade Level</label>
          <select
            id="grade"
            name="grade"
            value={formData.grade}
            onChange={handleChange}
            required
          >
            <option value="">Select Grade Level</option>
            <option value="K">K</option>
            <option value="1">1st Grade</option>
            <option value="2">2nd Grade</option>
            <option value="3">3rd Grade</option>
            <option value="4">4th Grade</option>
            <option value="5">5th Grade</option>
          </select>
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default SignUp;
