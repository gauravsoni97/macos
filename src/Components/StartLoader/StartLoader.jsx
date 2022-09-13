import React from 'react'
import "./StartLoader.css"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

import loader from "../../Imgs/appleLogo/appleloader.png"



const StartLoader = () => {


    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {

                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 1000);


        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>
            <div className="AppleLoader">
                <div className="mainBox">
                    <div className="Applelogo">
                        <img className='ApplelogoImg' src={loader} alt="" />
                    </div>
                    <br />
                    <div className="loading_animation">
                        <Box sx={{ width: '100%' }} >
                            <LinearProgress className='progressbar' variant="determinate" value={progress} />
                        </Box>
                    </div>
                </div>
            </div>
        </>

    );
}

export default StartLoader