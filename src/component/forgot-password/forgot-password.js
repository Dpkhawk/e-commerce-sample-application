import { useState } from "react";
import axios from "axios";
import { putData } from "../services/fetching";
const ForgotPassword = () => {
  const [Name, setName] = useState("");
  const apiUrl1 = process.env.REACT_APP_REGISTERS_URL;
  const handleSubmit = () => {
    axios
      .get(`${apiUrl1}/${Name}`)
      .then((res) => {
        if (res.data.id === Name) {
          const Mail = prompt("Enter the mail");

          if (res.data.email === Mail) {
            const newPassword = prompt("Enter the new password");
              putData(`${apiUrl1}/${Name}`, {
                ...res.data,
                password: newPassword,
              })
              .then(() => alert("password changed successfully"))
              .catch(() => alert("something went wrong"));
          } else {
            throw new Error();
          }
        }
      })
      .catch(() => alert("invalid credentials"));
  };

  return (
    <>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter The Correct UserName"
      />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </>
  );
};
export default ForgotPassword;
