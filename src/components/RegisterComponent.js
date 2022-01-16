import axios from "axios";
import React, { useState } from "react";

const RegisterComponent = () => {
  const [username, setUsername] = useState("");
  const [cellnumber, setCellnumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    axios
      .post("https://internship-project-backend.herokuapp.com/user-register", {
        username,
        email,
        cellnumber,
        address,
      })
      .then((res) => {
        if (res.status === 200) {
          alert("User added Successfully!");
        }
      })
      .catch((err) => {
        alert("Error creating User!");
      });
  };

  return (
    <div className="register-page">
      <div className="login">
        <h1>Register User</h1>
        <div className="fields">
          <form onSubmit={handleSubmit} action="/">
            <div className="mail-div">
              <span>Username: </span>
              <input
                type="text"
                name="username"
                autoComplete="none"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mail-div">
              <span>Email: </span>
              <input
                type="email"
                name="email"
                autoComplete="none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="pass-div">
              <span>Number: </span>
              <input
                type="number"
                name="cellnumber"
                id=""
                value={cellnumber}
                onChange={(e) => setCellnumber(e.target.value)}
              />
            </div>
            <div className="pass-div">
              <span>Address: </span>
              <input
                type="text"
                name="address"
                id=""
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <hr />
            <button type="submit" id="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
