import { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import axios from "axios";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (arrayOfItems.password === confirmPassword) {
      axios.post("http://localhost:3003/registers", 
        
       arrayOfItems
      )
       usenavigation("/loginPage");
    } else {
      alert("passwords are wrong");
    }
  };

  return (
    <>
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
    </>
  );
};
export default SignUp;
