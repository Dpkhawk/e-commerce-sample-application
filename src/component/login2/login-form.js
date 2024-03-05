import { Link } from "react-router-dom"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
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
    return(<>
      <div className="loginForm">
       <div className="loginContent">
            <h1 className="h1">Login</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <div > <label for='username' className="newLoginLabel">
               <b>Username</b>
            </label><br/>
            <div className="input"><input required type="text" placeholder="enter the username" id="username" className="newLoginInput" onChange={(e)=>setUserName(e.target.value)}/></div><br/>
            <label for='password' className="newLoginLabel">
               <b>Password</b>
            </label><br/>
            <div className="input"><input type="password" placeholder="enter the password" id="password"className="newLoginInput" onChange={(e)=>setPassword(e.target.value)}/></div>
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
    </>)
}