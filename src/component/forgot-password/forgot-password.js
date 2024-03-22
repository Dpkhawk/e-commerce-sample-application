import { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
  const [Name, setName] = useState("");

  const handleSubmit = () => {
    axios
      .get(`http://localhost:3003/registers/${Name}`)
      .then((res) => {
        if (res.data.id === Name) {
          const Mail = prompt("Enter the mail");

          if (res.data.email === Mail) {
            const newPassword = prompt("Enter the new password");
            axios
              .put(`http://localhost:3003/registers/${Name}`, {
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
