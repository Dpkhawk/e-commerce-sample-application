import './SignUpPage.css'
export default function SignUp(){
    return(<>
    <fieldset>
        <legend >
            Registration Form
        </legend>
        <tr>
        <td><label for='designation' >
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
        <label for='Mobile Number'>
            Mobile Number
        </label>
        <label for='DOB'>
            Date Of Birth
        </label><br/>
       <input type='tel' id='Mobile Number'/>
        <input type='date' id='DOB'/><br/>
        <label for='Gender'>
            Gender
        </label><br/>
        <input type='radio'/>
        <input type='radio'/>
    </fieldset>
    </>)
}