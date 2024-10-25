import Navbar from "../../components/Navbar"
import { useUser } from "../../Providers/userContext"
import iconsHtml from '../../assets/icons/html.png'
import iconsCss from '../../assets/icons/css.png'
import iconsTailwind from '../../assets/icons/tailwind.png'
import iconsBootstrap from '../../assets/icons/Bootstrap.png'
import iconsJs from '../../assets/icons/js.png'
import iconsReact from '../../assets/icons/react.png'
import iconsNextJs from '../../assets/icons/NextJs.png'
import iconsExpress from '../../assets/icons/Express.png'
import iconsNPM from '../../assets/icons/NPM.png'
import iconsYarn from '../../assets/icons/Yarn.png'
import iconsLaravel from '../../assets/icons/Laravel.png'
import iconsPHP from '../../assets/icons/PHP.png'
import CardSkilss from "../../components/Layout/CardSkills"

function Skills() {
    const {mode} = useUser()
    return (
        <>
            <Navbar name="Skills" to='/home' />
            <div className={`menu-container w-full h-screen flex   ${mode ? 'bg-ContentDark-500 text-white' : 'bg-gray-100 text-black'}`}>
                <div className={`menu-container flex flex-col w-full h-max items-center mt-28`}>
                    <p className="text-xs sm:text-sm w-10/12 flex justify-center text-center">My Skills is experience</p>
                    <div className="mt-10 grid grid-cols-4 gap-5 ">
                        <CardSkilss images={iconsHtml} />
                        <CardSkilss images={iconsCss} />
                        <CardSkilss images={iconsTailwind} />
                        <CardSkilss images={iconsBootstrap} />
                        <CardSkilss images={iconsJs} />
                        <CardSkilss images={iconsPHP} />
                        <CardSkilss images={iconsReact} />
                        <CardSkilss images={iconsLaravel} />
                        <CardSkilss images={iconsNextJs} />
                        <CardSkilss images={iconsExpress} />
                        <CardSkilss images={iconsNPM} />
                        <CardSkilss images={iconsYarn} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills