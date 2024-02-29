import { useState } from "react";

export default function ForgotPassword() {
  const [Name, setName] = useState("");
  const [mail, setMail] = useState();
  function handleSubmit(e) {
    fetch(`http://localhost:3000/registers/${Name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id === Name) {
          const Mail = prompt("Enter the mail");
          if (data.email === Mail) {
            const password = prompt("Enter the new password");
            // data.password=password;
            // const newObj={...Name,password:password}
            fetch(`http://localhost:3000/registers`, {
              method: "POST",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(password),
            });
          }
        }
      });
  }
  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button onClick={(e) => handleSubmit(e)}>Submit</button>
    </>
  );
}
