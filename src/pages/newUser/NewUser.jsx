import React from 'react'
import "./newUser.css"

export default function NewUser() {
  return (
    <div className='newUser'>
        <h1 className='newUserTitle'>Create User</h1>
        <form className='newUserForm'>
            <div className='newUserItem'>
                <label>Username</label>
                <input type="text" placeholder='ranjeet' />
            </div>
            <div className='newUserItem'>
                <label>Full Name</label>
                <input type="text" placeholder='Ranjeet Verma' />
            </div>
            <div className='newUserItem'>
                <label>Email</label>
                <input type="email" placeholder='ranjeet@gmail.com' />
            </div>
            <div className='newUserItem'>
                <label>Password</label>
                <input type="text" placeholder='password' />
            </div>
            <div className='newUserItem'>
                <label>Phone</label>
                <input type="text" placeholder='+9938393000' />
            </div>
            <div className='newUserItem'>
                <label>Address</label>
                <input type="text" placeholder='Ajmer | Rajasthan' />
            </div>
            <div className='newUserItem'>
                <label>Gender</label>
                <div className='newUserGender'>
                    <input type="radio" name="gender" id='male' value="male" />
                    <label for="male">Male</label>
                    <input type="radio" name="gender" id='female' value="female" />
                    <label for="male">Female</label>
                    <input type="radio" name="gender" id='others' value="others" />
                    <label for="male">Others</label>
                </div>
            </div>
            <div className='newUserItem'>
                <label>Active</label>
                <select className='newUserSelect' name="active" id="active">
                    <option value="yes">Yes</option>
                    <option vlaue="no">No</option>
                </select>
            </div>
            <button className='newUserButton'>Create</button>
        </form>
    </div>
  )
}
