import React from 'react';
import "./Login.css";

const Login = () => {
    return (
        <>
            <div className="login_page">
                <div className="loginform">
                    <div className="formbox">
                        <div className="loginimg">
                            <div className="userdp"></div>
                            <p className='ownername'>Gaurav's Mac</p>
                        </div>
                        <div className="password_field">
                            <input type="password" placeholder='Enter Password'  />
                            <span className='submitbtn'><i class="uil uil-arrow-circle-right"></i></span>
                        </div>

                    </div>
                    <div className="cancelbtn">
                        <div className="cancel_circle">
                        <i class="uil uil-multiply"></i>
                        </div>
                       
                        <p>Cancel</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login