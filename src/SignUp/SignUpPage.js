import './SignUpPage.css'
export default function SignUp(){
    return(<>
    <div className='signUp'>
    <fieldset>
        <legend >
            Registration Form
        </legend>
        <tr>
        <td><label for='designation' className='signUpLabel' >
            Select the Designation:
        </label></td>
        <td><select id='designation'><option value='Mr'>Mr</option><option value='Ms'>Ms</option><option value='Mrs'>Mrs</option></select></td></tr><br/>
        <label className='signUpLabel' for='username'>
            Enter the UserName:
        </label><br/>
        <input className='signUpInput' placeholder='FullName' id='username' type='text'/><br/>   
      <label className='signUpLabel' for='e-mail'> 
            Enter the e-mail:
        </label><br/>
        <input placeholder='e-mail account' id='e-mail' className='signUpInput' type='email'/><br/>
        <div className='dob'>
        <label for='DOB' className='signUpLabel'>
            Date Of Birth
        </label><br/>
        <input type='date' className='signUpInput'  id='DOB'/><br/></div>
        <label for='Mobile Number' className='signUpLabel'>
            Mobile Number
        </label><br/>
        <input type='tel' className='signUpInput' placeholder='Mobile Number' id='Mobile Number'/><br/>
        <label className='signUpLabel' for='Gender'>
            Gender
        </label><br/>
        <div className='genderDiv'>
        <input  type='radio' id='male' name='gender' value='Male'/>
        <label for='male'>Male</label>
        <input type='radio' name='gender' id='female' />
        <label for='female'>Female</label><br/>
        </div>
        <label className='signUpLabel' for='address'>Address</label><br/>
        <input className='addressInput' placeholder='Address' type='address'/><br/>
        <div className='password'>
        <label for='confirmPassword' className='signUpLabel'>
            Confirm Password
        </label><br/>
        <input className='signUpInput' placeholder='re-enter password' type='password' id='confirmPassword'/><br/></div>
        <label for='password' className='signUpLabel'>
            Password
        </label><br/>
        <input className='signUpInput' placeholder='enter password' type='password' id='password'/><br/>
        <select  className='districtSelection'>
            <option selected>District</option>
            <option value='Chennai'>Chennai</option>
            <option value='Karur'>Karur</option>
            <option value='Trichy'>Trichy</option>
            <option value='Erode'>Erode</option>
            <option value='Namakkal'>Namakkal</option>
        </select>
        <input className='zipcode' type='text' placeholder='Zip Code'/><br/>
        <button className='signUpButton'>Submit</button>
    </fieldset>
    </div>
    </>)
}