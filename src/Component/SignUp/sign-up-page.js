import { useState } from "react";
import { useNavigate } from "react-router";
export default function SignUp() {
  const [designation, setDesignation] = useState();
  const [id, setId] = useState();
  const [email, setEmail] = useState();
  const [dob, setDob] = useState();
  const [mobileNumber, setMobileNumber] = useState();
  const [gender, setGender] = useState();
  const [address, setAddress] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [zipcode, setZipCode] = useState();
  const [district, setDistrict] = useState();
  const usenavigation = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    const dataObject = {
      designation,
      id,
      email,
      dob,
      mobileNumber,
      gender,
      address,
      password,
      zipcode,
      district,
    };
    if (password === confirmPassword) {
      fetch("http://localhost:3003/registers", {
        method: "POST",
        body: JSON.stringify(dataObject),
      }).then(() => usenavigation("/loginPage"));
    } else {
      alert("passwords are wrong");
    }
  }

  return (
    <>
      <div className="signUp">
        <fieldset>
          <legend>Registration Form</legend>
          <form onSubmit={(e) => handleSubmit(e)}>
            <tr>
              <td>
                <label for="designation" className="signUpLabel">
                  Select the Designation:
                </label>
              </td>
              <td>
                <select
                  id="designation"
                  required
                  onChange={(e) => setDesignation(e.target.value)}
                >
                  <option value="Mr" selected>
                    Mr
                  </option>
                  <option value="Ms">Ms</option>
                  <option value="Mrs">Mrs</option>
                </select>
              </td>
            </tr>
            <br />
            <label className="signUpLabel" for="username">
              Enter the UserName:
            </label>
            <br />
            <input
              className="signUpInput"
              required
              onChange={(e) => setId(e.target.value)}
              placeholder="FullName"
              id="username"
              type="text"
            />
            <br />
            <label className="signUpLabel" for="e-mail">
              Enter the e-mail:
            </label>
            <br />
            <input
              placeholder="e-mail account"
              required
              onChange={(e) => setEmail(e.target.value)}
              id="e-mail"
              className="signUpInput"
              type="email"
            />
            <br />
            <div className="dob">
              <label for="DOB" className="signUpLabel">
                Date Of Birth
              </label>
              <br />
              <input
                type="date"
                required
                onChange={(e) => setDob(e.target.value)}
                className="signUpInput"
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
              onChange={(e) => setMobileNumber(e.target.value)}
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
                name="gender"
                value="Male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label for="male">Male</label>
              <input
                type="radio"
                name="gender"
                required
                id="female"
                value="Female"
                onChange={(e) => setGender(e.target.value)}
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
              onChange={(e) => setAddress(e.target.value)}
            />
            <br />
            <div className="password">
              <label for="confirmPassword" className="signUpLabel">
                Confirm Password
              </label>
              <br />
              <input
                className="signUpInput"
                required
                placeholder="re-enter password"
                type="password"
                id="confirmPassword"
                onChange={(e) => setPassword(e.target.value)}
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
              placeholder="enter password"
              type="password"
              id="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <br />
            <select
              className="districtSelection"
              required
              onChange={(e) => setDistrict(e.target.value)}
            >
              <option selected>District</option>
              <option value="Chennai">Chennai</option>
              <option value="Karur">Karur</option>
              <option value="Trichy">Trichy</option>
              <option value="Erode">Erode</option>
              <option value="Namakkal">Namakkal</option>
            </select>
            <input
              className="zipcode"
              required
              type="text"
              placeholder="Zip Code"
              onChange={(e) => setZipCode(e.target.value)}
            />
            <br />
            <button className="signUpButton">Submit</button>
          </form>
        </fieldset>
      </div>
    </>
  );
}
