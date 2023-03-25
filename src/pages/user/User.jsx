import { CalendarToday, EmailOutlined, LocationSearching, PermIdentity, PhoneAndroid, Upload } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom';
import "./user.css"

export default function User() {
  return (
    <div className='user'>
        <div className='userTitleContainer'>
            <h1 className='userTitle'>Edit User</h1>
            <Link to="/newUser">
            <button className='userAddButton'>Create</button>
            </Link>
            
        </div>
        <div className='userContainer'>
            <div className='userShow'>
                <div className='userShowTop'>
                    <img className='userShowImg' src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
                    <div className='userShowTopTitle'>
                        <span className='userShowUsername'>Amira Daniya</span>
                        <span className='userShowUserTitle'>Software Engineer</span>
                    </div>
                </div>
                <div className='userShowBottom'>
                <span className='userShowTitle'>Account Details</span>
                    
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon' />
                            <span className='userShowInfoTitle'>amiradaniya88</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon' />
                            <span className='userShowInfoTitle'>01.12.2000</span>
                        </div>
                        <span className='userShowTitle'>Contact Details</span>
                        <div className='userShowInfo'>
                            <EmailOutlined className='userShowIcon' />
                            <span className='userShowInfoTitle'>amiradaniya@gmail.com</span>
                        </div>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon' />
                            <span className='userShowInfoTitle'>+9984949843</span>
                        </div>
                        <div className='userShowInfo'>
                            <LocationSearching className='userShowIcon' />
                            <span className='userShowInfoTitle'>Pune | Maharastra</span>
                        </div>
                    
                </div>
            </div>
            <div className='userUpdate'>
                <span className='userUpdateTitle'>Edit</span>
                <form className='userUpdateForm'>
                    <div className='userUpdateLeft'>
                        <div className='userUpdateItem'>
                            <label>Username</label>
                            <input type="text" className='userUpdateInput' placeholder='amiradaniya88'></input>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Full Name</label>
                            <input type="text" className='userUpdateInput' placeholder='Amira Daniya'></input>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Email</label>
                            <input type="email" className='userUpdateInput' placeholder='amiradaniya@gmail.com'></input>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Phone</label>
                            <input type="text" className='userUpdateInput' placeholder='+9984949843'></input>
                        </div>
                        <div className='userUpdateItem'>
                            <label>Address</label>
                            <input type="text" className='userUpdateInput' placeholder='Pune | Maharastra'></input>
                        </div>
                    </div>
                    <div className='userUpdateRight'>
                        <div className='userUpdateUpload'>
                            <img className='userUpdateImg' src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' alt="" />
                            <label for="file">
                                <Upload className='userUpdateIcon'/>
                            </label>
                            <input type="file" id="file" style={{ display: "none" }} />
                        </div>
                        <button className='userUpdateButton'>Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
}
