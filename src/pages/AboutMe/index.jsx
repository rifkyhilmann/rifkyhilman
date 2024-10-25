import Navbar from "../../components/Navbar"
import { useUser } from "../../Providers/userContext"
import Profile from '../../assets/images/profile.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"

function AboutMe() {
    const {mode} = useUser()
    return (
        <>
            <Navbar name="About Me" to='/home' />
            <div className={`menu-container w-full h-screen flex flex-col items-center   ${mode ? 'bg-ContentDark-500 text-white' : 'bg-gray-100 text-black'}`}>
                <div className={`menu-container flex flex-col w-full h-max min-h-80  ${mode ? 'bg-gray-600' : 'bg-gray-200 shadow-sm'} items-center mt-14`}>
                    <img src={Profile} alt="images-profile" className="w-40 h-40 rounded-full mt-10 mb-5 bg-center" />
                    <p className="text-xl font-semibold">Rifky Hilman</p>
                    <p className="text-lg font-bold  font-mono">Full Stack Developer</p>
                    <p className="text-sm font-light mt-5 mb-5 w-10/12 sm:w-2/3  text-center">
                        I am a fresh graduate in Information Technology with a strong understanding of full-stack web development. I
                        possess technical skills in React.js for building interactive and dynamic front-end applications, as well as
                        Express.js and Laravel for efficient back-end development. Experienced in building server-side applications
                        using Next.js, I am capable of designing and implementing scalable and reliable end-to-end solutions. Eager
                        to continuously learn new technologies and contribute to the development of innovative modern applications.
                    </p>
                    <div className="flex items-center mt-2 mb-7 gap-7">
                        <a href="https://github.com/RifkyHilman1302" target="blank">
                            <FontAwesomeIcon icon={faGithub} className=" text-3xl text-gray-700 cursor-pointer hover:text-white" />
                        </a>
                        <a href="https://www.instagram.com/rfkhlmn" target="blank">
                            <FontAwesomeIcon icon={faInstagram} className=" text-3xl text-gray-700 cursor-pointer hover:text-red-400" />
                        </a>
                        <a href="">
                            <FontAwesomeIcon icon={faLinkedin} className=" text-3xl text-gray-700 cursor-pointer hover:text-blue-400" />
                        </a>
                    </div>
                    <div className="flex items-center mb-7 gap-3">
                        <FontAwesomeIcon icon={faLocationDot} className="text-2xl text-gray-700 cursor-pointer hover:text-blue-400" />
                        <p className="text-xs">West Java, Indonesian</p>
                    </div>
                </div>
                <div className={`h-10 w-40 ${mode ? 'bg-NavbarDark-900 hover:bg-NavbarDark-800' : 'bg-white hover:bg-gray-200 shadow-lg'}   text-sm mt-16 rounded flex items-center justify-center cursor-pointer`}>
                    <p>Download CV</p>
                </div>
            </div>
        </>
    )
}

export default AboutMe