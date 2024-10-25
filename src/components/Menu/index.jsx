import { useUser } from "../../Providers/userContext"
import MenuItem from "../Layout/MenuItem"
import iconsProject from '../../assets/icons/project.png'
import iconsJourney from '../../assets/icons/destination.png'
import iconsAbout from '../../assets/icons/about.png'
import iconsContact from '../../assets/icons/contact.png'
import iconsSkills from '../../assets/icons/skills.png'

function Menu() {
    const {username, mode} = useUser()
    
    return (
        <div className={`menu-container flex flex-col w-full h-max items-center mt-16`}>
            <div className="mt-16 w-full flex flex-col items-center gap-10">
                <p className="text-xs sm:text-sm w-10/12 flex justify-center text-center">hello  {username}, thank you for visiting my portofolio, what would you like to know about me? Click on the menus down below </p>
                <div className={`w-11/12 flex flex-col items-center h-max min-h-20 ${mode ? 'bg-NavbarDark-900' : 'bg-white shadow-lg'} rounded`}>
                    <div className="w-full h-max mb-4">
                        <MenuItem name="Project" icons={iconsProject} to='/Project' />
                        <MenuItem name="Journey" icons={iconsJourney} to='/Journey' />
                        <MenuItem name="Skills" icons={iconsSkills} to='/Skills' />
                        <MenuItem name="About Me" icons={iconsAbout} to='/AboutMe' />
                        <MenuItem name="Contact" icons={iconsContact} to='/AboutMe' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu