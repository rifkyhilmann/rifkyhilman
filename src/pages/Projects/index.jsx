import Navbar from "../../components/Navbar"
import { useUser } from "../../Providers/userContext"
import { Link } from "react-router-dom"

function Project() {
    const {mode} = useUser()
    return (
        <>
            <Navbar name="Project" to='/home' />
            <div className={`menu-container w-full h-max min-h-screen flex   ${mode ? 'bg-ContentDark-500 text-white' : 'bg-gray-100 text-black'}`}>
                <div className={`menu-container flex flex-col w-full h-max items-center mt-28 gap-5`}>
                    <p className="text-md  w-10/12 flex justify-center text-center mb-5">This is My Project</p>
                    <Link to={'/project/1'} className="w-full flex items-center justify-center">
                        <div className="card-apotek w-10/12 h-40 sm:h-52 bg-gray-600 rounded flex flex-col justify-center gap-5 cursor-pointer">
                            <p className="ml-10 font-semibold text-3xl text-white ">App Apotek</p>
                            <p className="text-xs sm:text-sm  ml-10 mr-10 text-gray-200 ">App Apotek is a website that has been built to assist companies is managing ther data</p>
                        </div>  
    
                    </Link>
                    <Link to={'/project/2'} className="w-full flex items-center justify-center">
                        <div className="card-apotek w-10/12 h-40 sm:h-52 bg-gray-600 rounded flex flex-col justify-center gap-5 cursor-pointer">
                            <p className="ml-10 font-semibold text-3xl text-white ">Expert System Identifiying Verbal Abuse</p>
                            <p className="text-xs sm:text-sm  ml-10 mr-10 text-gray-200 ">This expert system aims to detect and analyze verbal abuse in everyday communication. By leveraging modern technology</p>
                        </div>  
    
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Project