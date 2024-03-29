import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { postData } from "../services/fetching";
const SignUp = () => {
  const [district, setDistrict] = useState([
    "Chennai",
    "Karur",
    "Trichy",
    "Erode",
    "Namakkal",
  ]);
  const [arrayOfItems, setArrayOfItems] = useState({
    id: "",
    email: "",
    dob: "",
    mobileNumber: "",
    gender: "",
    address: "",
    password: "",
    zipcode: "",
    district,
  });
  const [confirmPassword, setConfirmPassword] = useState();
  const usenavigation = useNavigate();
  const apiURL=process.env.REACT_APP_REGISTERS_ENDPOINT
  const handleSubmit =  async(e) => {

    e.preventDefault();
    if((arrayOfItems.id.match("^[a-zA-Z]+$"))&&(arrayOfItems.email.includes("@")&&arrayOfItems.email.endsWith(".com"))&&(arrayOfItems.password.match("(?=.*[A-Z])(?=.*).{8,}"))&&(arrayOfItems.mobileNumber.match("[0-9]{10}"))&&(arrayOfItems.zipcode.match("[0-9]{6}"))){

    
    if (arrayOfItems.password === confirmPassword) {
      await postData(
        apiURL,

        arrayOfItems
      )
      .then(()=>alert('signUp successful'))
      .catch(()=>alert("something is wrong"))
      usenavigation("/loginPage");
    } else {
      alert("passwords are wrong");
    }}
    else{
      alert('invalid credentials')
    }
  };

  return (
      <div className="outerSignUp">
        <div className="signUp">
          <fieldset>
            <legend>SignUp</legend>
            <form onSubmit={(e) => handleSubmit(e)}>
              <label className="signUpLabel" for="username">
                Enter the UserName:
              </label>
              <br />
              <input
                className="signUpInput"
                required
                onChange={(e) =>
                  setArrayOfItems({ ...arrayOfItems, id: e.target.value })
                }
                placeholder="Full Name"
                id="username"
                type="text"
                pattern="^[a-zA-Z]+$"
                title="Name only contains alphabets"
              />
              <br />
              <label className="signUpLabel" for="e-mail">
                Enter the e-mail:
              </label>
              <br />
              <input
                placeholder="E-Mail Account"
                required
                onChange={(e) =>
                  setArrayOfItems({ ...arrayOfItems, email: e.target.value })
                }
                id="e-mail"
                className="signUpInput"
                type="email"
              />
              <br />
              <div className="password">
                <label for="confirmPassword" className="signUpLabel ">
                  Confirm Password
                </label>
                <br />
                <input
                  className="signUpInput rightMove"
                  required
                  placeholder="Re-Enter Password"
                  type="password"
                  id="confirmPassword"
                  onChange={(e) =>
                    setArrayOfItems({
                      ...arrayOfItems,
                      password: e.target.value,
                    })
                  }
                pattern="(?=.*[A-Z])(?=.*\d).{8,}"
                title="Password must contain at least one capital letter, one number, and be at least 8 characters long"
                />
                <br />
              </div>
              <label for="password" className="signUpLabel">
                Password
              </label>
              <br />
              <input
                className="signUpInput"
                required
                placeholder="Enter Password"
                type="password"
                id="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                pattern="(?=.*[A-Z])(?=.*\d).{8,}"
                title="Password must contain at least one capital letter, one number, and be at least 8 characters long"
              />
              <br />
              <div className="dob">
                <label for="DOB" className="signUpLabel ">
                  Date Of Birth
                </label>
                <br />
                <input
                  type="date"
                  required
                  onChange={(e) =>
                    setArrayOfItems({ ...arrayOfItems, dob: e.target.value })
                  }
                  className="signUpInput rightMove"
                  id="DOB"
                />
                <br />
              </div>
              <label for="Mobile Number" className="signUpLabel">
                Mobile Number
              </label>
              <br />
              <input
                type="tel"
                required
                onChange={(e) =>
                  setArrayOfItems({
                    ...arrayOfItems,
                    mobileNumber: e.target.value,
                  })
                }
                className="signUpInput"
                placeholder="Mobile Number"
                id="Mobile Number"
                title="phonenumber must contain 10 digit"
                pattern="[0-9]{10}"
              />
              <br />
              <label className="signUpLabel" for="Gender">
                Gender
              </label>
              <br />
              <div className="genderDiv">
                <input
                  type="radio"
                  id="male"
                  required
                  className="genderSelection"
                  name="gender"
                  value="Male"
                  onChange={(e) =>
                    setArrayOfItems({ ...arrayOfItems, gender: e.target.value })
                  }
                />
                <label for="male">Male</label>
                <input
                  type="radio"
                  name="gender"
                  className="genderSelection"
                  required
                  id="female"
                  value="Female"
                  onChange={(e) =>
                    setArrayOfItems({ ...arrayOfItems, gender: e.target.value })
                  }
                />
                <label for="female">Female</label>
                <br />
              </div>
              <label className="signUpLabel" for="address">
                Address
              </label>
              <br />
              <input
                className="addressInput"
                required
                placeholder="Address"
                type="address"
                onChange={(e) =>
                  setArrayOfItems({ ...arrayOfItems, address: e.target.value })
                }
              />
              <br />
              <select
                className="districtSelection"
                required
                onChange={(e) =>
                  setArrayOfItems({ ...arrayOfItems, district: e.target.value })
                }
              >
                {district.map((district) => {
                  return (
                    <>
                      <option value={district}>{district}</option>
                    </>
                  );
                })}
              </select>
              <input
                className="zipcode rightMove"
                required
                type="text"
                placeholder="Zip Code"
                onChange={(e) =>
                  setArrayOfItems({ ...arrayOfItems, zipcode: e.target.value })
                }
              />
              <br />
              <button className="signUpButton">Sign Up</button>
              <br />
              <Link to={"/loginPage"} className="linkToLogin">
                Already User?LogIn
              </Link>
              <br />
            </form>
          </fieldset>
        </div>
      </div>
    
  );
};
export default SignUp;
