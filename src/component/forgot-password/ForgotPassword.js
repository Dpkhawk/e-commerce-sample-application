import { useState } from "react";

export default function ForgotPassword() {
  const [Name, setName] = useState("");
  // const[password,setPassword]=useState({})
  function handleSubmit(e) {
    fetch(`http://localhost:3003/registers/${Name}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id === Name) {
          const Mail = prompt("Enter the mail");
          if (data.email === Mail) {
            const newPassword = prompt("Enter the new password");
            fetch(`http://localhost:3003/registers/${Name}`, {
               method:"PUT",
              body:JSON.stringify({...data,password:newPassword})
              
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
