import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css";


const Login = () => {
    const navigate = useNavigate();

    const [password, setpassword] = useState("");

    const [error, setError] = useState(false)


    const handleChange = (e) => {
        setpassword(e.target.value);
    }
    const loginbtn = () => {
        if (password === "1234") {
            navigate("/home")
        } else {
            setError(true);
        }

    }



    return (
        <>
            <div className="login_page">
                <div className="loginform">
                    <div className="formbox">
                        <div className="loginimg">
                            <div className="userdp"></div>
                            <p className='ownername'>Gaurav's Mac</p>
                        </div>
                        <div className={error ? 'password_field shakeEffect' : 'password_field'}>
                            <input className='styleoninput' type="password" placeholder='Enter Password' value={password} onChange={handleChange} />

                            <span className='submitbtn' onClick={() => loginbtn()}><i className="uil uil-arrow-circle-right"></i></span>
                        </div>

                    </div>
                    <div className="cancelbtn">
                        <div className="cancel_circle">
                            <i className="uil uil-multiply"></i>
                        </div>

                        <p>Cancel</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login