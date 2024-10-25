import ParticlesBg from 'particles-bg'
import { useEffect, useState } from 'react';
import MouseParticles from 'react-mouse-particles'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../../Providers/userContext';

function FirstPages() {
    const [btnVisible, setBtnVisible] = useState(false);
    const [inputValue, setInputValue] = useState('')
    const navigate = useNavigate()
    const {setUsername} = useUser()

    let config = {
        num: [4, 7],
        rps: 0.1,
        radius: [5, 40],
        life: [1.5, 3],
        v: [2, 3],
        tha: [-40, 40],
        // body: "./img/icon.png", // Whether to render pictures
        // rotate: [0, 20],
        alpha: [0.6, 0],
        scale: [1, 0.1],
        position: "center", // all or center or {x:1,y:1,width:100,height:100}
        color: ["random", "#ff0000"],
        cross: "dead", // cross or bround
        random: 15,  // or null,
        g: 5,    // gravity
        // f: [2, -1], // force
        onParticleUpdate: (ctx, particle) => {
            ctx.beginPath();
            ctx.rect(particle.p.x, particle.p.y, particle.radius * 2, particle.radius * 2);
            ctx.fillStyle = particle.color;
            ctx.fill();
            ctx.closePath();
        }
      };

    const inputChange = (e) => {
        setInputValue(e.target.value)
        let inputValue = e.target.value
    
        if (inputValue.trim().length > 0) {
            setBtnVisible(true); // Jika nilai input tidak kosong, tampilkan tombol
        } else {
            setBtnVisible(false); // Jika nilai input kosong, sembunyikan tombol
        }
    }

    const btnClick = () => {
        setUsername(inputValue)
        setInputValue('')
        navigate('/home')
        window.location.reload()
    }

    return (
        <div className='h-screen w-full relative bg-black flex flex-col items-center'>
            <ParticlesBg type="cobweb" config={config} color='#800080' />
            <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
            <div className='absolute text-white font-bold text-2xl sm:text-4xl top-44 flex items-center flex-col'>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Hi, My Name is Rifky Hilman',
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                    ]}
                    wrapper="span"
                    speed={200}
                    repeat={Infinity}
                />
                <div className='home-container flex flex-col items-center text-xs sm:text-sm font-normal mt-3 gap-5'>
                    <p>hello there 😊, before we get started. what is your name?</p>
                    <input 
                        type="text" 
                        onChange={inputChange}
                        value={inputValue}
                        className='h-8 w-80 rounded bg-transparent text-gray-400 text-center focus:outline-none' 
                        placeholder='insert your name here...'/>
                    <motion.div
                        onClick={btnClick}
                        initial={{ y: 100, opacity: 0 }} // Keadaan awal (mulai dari bawah dengan opacity 0)
                        animate={btnVisible ? { y: 0, opacity: 1 } : {}}
                        transition={{ type: 'spring', damping: 15, stiffness: 100 }} // Animasi menggunakan spring effect
                        whileHover={{ scale: 1.2, zIndex: 50 }}
                        className={`${btnVisible ? 'flex' : 'hidden'} h-20 w-20 mt-5 rounded-full border border-purple-500 flex items-center justify-center cursor-pointer text-white font-semibold hover:text-purple-500`}
                    >
                        <p>Lets Go!</p>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default FirstPages