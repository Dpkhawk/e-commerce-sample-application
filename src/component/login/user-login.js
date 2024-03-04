import {  useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    async function showCredentials() {
      const data = await fetch(`http://localhost:3003/registers/${userName}`);
      const value = await data.json();
      if (value.id === userName && value.password === password) {
        alert("login successful");
        navigation("/");
      } else {
        alert("invalid credentials");
      }
    }
    showCredentials();
  }
  
  return (
    <>
      <form className="forms" onSubmit={(e) => handleSubmit(e)}>
        <div className="image">
          <img src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" />
        </div>
        <h1 className="login">Login Form</h1>
        <div className="row1">
          <label for="name">Username</label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            required
            type="text"
            id="name"
            placeholder="Enter the username"
            className="loginInput"
          />
        </div>
        <div className="row2">
          <label for="password">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            id="password"
            placeholder="Enter the password"
            className="loginInput"
          />
        </div>
        <div className="row3">
          <Link className="forgotpassword" to={"/signUp"}>
            New User
          </Link>
          <Link className="forgotpassword" to={"/forgotpassword"}>
            Forgot Password?
          </Link>
        </div>
        <div className="buttons">
          <button className="button">LogIn</button>
        </div>
      </form>
    </>
  );
}
