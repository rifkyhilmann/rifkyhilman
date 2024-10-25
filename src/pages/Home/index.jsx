import { useUser } from "../../Providers/userContext"
import Menu from "../../components/Menu"
import Navbar from "../../components/Navbar"

function Home() {
    const {mode} = useUser()

    return (
        <>
            <Navbar name="Menu" to="/" />
            <div className={`menu-container w-full h-screen flex   ${mode ? 'bg-ContentDark-500 text-white' : 'bg-gray-100 text-black'}`}>
                <Menu />
            </div>
        </>
    )
}

export default Home