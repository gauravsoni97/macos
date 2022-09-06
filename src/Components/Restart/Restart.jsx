import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./restart.css"

const Restart = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(59);

    useEffect(() => {
        setInterval(() => {
            setCountdown(countdown - 1)
        }, 1000);
    }, [countdown])




    const restartnow = () => {
        return (

            navigate("/", { replace: true })


        )
    }





    return (
        <div className='Restart-Box'>
            <div className="restart_Left">
                <span className='restartlogo'>
                    <i class="uil uil-triangle restartlogo-style"></i>
                </span>
            </div>
            <div className="restart_Right">
                <h4>Are you sure you want to restart your computer now?</h4>
                <p>If you do nothing, the computer will restart automatically in {countdown} seconds.</p>

                <div className="checkbox-div d_flex">
                    <input type="checkbox" /> &nbsp;
                    <p>Reopen windows when logging back in</p>
                </div>
                <div className="btns-restart">
                    <span className="restartbtn-cancel restartbtn">Cancel</span>
                    <span className="restartbtn-restart restartbtn" onClick={restartnow}>Restart</span>
                </div>
            </div>
        </div>
    )
}

export default Restart