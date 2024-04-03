import { useState } from "react";
import fetchData, { putData } from "../services/fetching";
import { useNavigate } from "react-router";
const ForgotPassword = () => {
  const [Name, setName] = useState("");
  const [disable, setDisable] = useState(true);
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [data, setData] = useState();
  const navigation = useNavigate();
  const apiUrl1 = process.env.REACT_APP_REGISTERS_ENDPOINT;

  const handleChange = async (e) => {
    setConfirmPassword(e.target.value);
    await fetchData(`${apiUrl1}/${Name}`).then((result) => {
      setDisable(false);
      setData(result);
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.match("(?=.*[A-Z])(?=.*).{8,}")) {
      if (password === confirmPassword) {
        await putData(`${apiUrl1}/${Name}`, {
          ...data,
          password: password,
        }).then(() => navigation("/loginPage"));
      } else {
        alert("Passwords and ConfirmPasswords Must be Same");
      }
    } else {
      alert(
        "Password must contain at least one capital letter, one number, and be at least 8 characters long"
      );
    }
  };
  return (
    <div className="loginForm">
      <div className="loginContent">
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
                onChange={(e) => setName(e.target.value)}
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
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <label
              for="password"
              className="newLoginLabel"
              id="confirm-password"
            >
              <b>Confirm Password</b>
            </label>
            <br />
            <div className="input">
              <input
                type="password"
                placeholder="Enter The Password"
                id="confirm-password"
                className="newLoginInput"
                required
                onChange={(e) => handleChange(e)}
              />
            </div>
            <button className="loginButton" disabled={disable}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ForgotPassword;
