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
            const password = prompt("Enter the new password");
            // const newValue={password:password}
            // data.password=password;
            // const newObj={...Name,password:password}
            fetch(`http://localhost:3003/registers/${Name}`, {
              // method:PUT ,
             
              
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