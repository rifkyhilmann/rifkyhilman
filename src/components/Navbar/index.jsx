import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
import { useUser } from '../../Providers/userContext';

function Navbar(props) {
    const {mode, setMode} = useUser()
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // Setiap detik update waktu

        return () => clearInterval(interval);
    }, []);

    // Fungsi untuk mendapatkan waktu WIB dalam format HH:mm:ss
    const getWIBTime = () => {
        const utcOffset = 7; // UTC offset untuk WIB
        const utc = time.getTime() + (time.getTimezoneOffset() * 60000);
        const jakartaTime = new Date(utc + (3600000 * utcOffset));
        return jakartaTime.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta', hour12: false });
    };

    return (
        <div className={`Navbar w-full h-14 grid grid-cols-3 shadow-xl absolute top-0 ${mode ? 'bg-NavbarDark-900 text-white' : 'bg-white'}  `}>
            <div className='flex items-end justify-start  text-md'>
                <Link to={props.to}>
                    <div className='flex items-center ml-2 mb-2 gap-2 cursor-pointer text-blue-500 hover:text-blue-400'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <p className=''>Back</p>
                    </div>
                </Link>
            </div>
            <div className='flex flex-col items-center gap-1'>
                <p className='text-xs mt-1'>{getWIBTime()}</p>
                <p>{props.name}</p>
            </div>
            <div className='flex flex-col items-end justify-center gap-1 mr-2'>
                <p className='text-xs'>@rifkyhilmann</p>
                <div className='flex items-center gap-3'>
                    <FontAwesomeIcon icon={mode ? faSun : faMoon} onClick={() => setMode(!mode)} className='cursor-pointer'/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
