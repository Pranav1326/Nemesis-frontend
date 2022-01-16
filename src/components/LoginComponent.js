import { React, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Auth";
const axois = require("axios");

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuthFlag } = useContext(AuthContext);

  const loc = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axois
      .post("https://internship-project-backend.herokuapp.com/login", {
        email,
        password,
      })
      .then((result) => {
        localStorage.setItem("token", result.data.token);
        setAuthFlag();
        setLoading(false);
        loc("/");
      })
      .catch((err) => {
        setLoading(false);

        if (err.message === `Request failed with status code 404`) {
          alert(`Invalid Email!`);
        } else if (err.message === `Request failed with status code 400`) {
          alert(`Invalid Password!`);
        }
      });
  };

  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <div className="login-page">
      <div className="login">
        <h1>Login</h1>
        <div className="fields">
          <form onSubmit={handleSubmit} action="/">
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
              <span>Password: </span>
              <input
                type="password"
                name="password"
                id=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
}

export default Login;
