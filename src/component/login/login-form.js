import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const showCredentials = async () => {
      const result = await axios.get(
        `http://localhost:3003/registers/${userName}`
      );
      const value = result.data;
      if (value.id === userName && value.password === password) {
        sessionStorage.setItem("userId", userName);
        navigation("/");
      } else {
        alert("invalid credentials");
      }
    };
    showCredentials();
  };
  return (
    <>
      <div className="loginForm">
        <div className="loginContent">
          <h1 className="h1">Login</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              {" "}
              <label for="username" className="newLoginLabel">
                <b>Username</b>
              </label>
              <br />
              <div className="input">
                <input
                  required
                  type="text"
                  placeholder="Enter The User Name"
                  id="username"
                  className="newLoginInput"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <br />
              <label for="password" className="newLoginLabel">
                <b>Password</b>
              </label>
              <br />
              <div className="input">
                <input
                  type="password"
                  placeholder="Enter The Password"
                  id="password"
                  className="newLoginInput"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button className="loginButton">Submit</button>
              <div className="newUser">
                <Link className="signUpNew" to={"/signUp"}>
                  New User
                </Link>
                <Link className="forgotpassword" to={"/forgotpassword"}>
                  Forgot Password?
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default LoginForm;
