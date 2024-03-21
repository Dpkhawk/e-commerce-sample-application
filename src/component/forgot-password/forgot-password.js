import { useState } from "react";
import axios from "axios";
const ForgotPassword = () => {
  const [Name, setName] = useState("");

  const handleSubmit = async(e) => {
    fetch(`http://localhost:3003/registers/${Name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id === Name) {
          const Mail = prompt("Enter the mail");
          if (data.email === Mail) {
            const newPassword = prompt("Enter the new password");
            fetch(`http://localhost:3003/registers/${Name}`, {
              method: "PUT",
              body: JSON.stringify({ ...data, password: newPassword }),
            });
          }
        }
      });
     const result=await axios.get()
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
