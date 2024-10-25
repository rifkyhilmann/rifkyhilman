import Navbar from "../../components/Navbar"
import { useUser } from "../../Providers/userContext"

function Journey() {
    const {mode} = useUser()
    return (
        <>
            <Navbar name="Journey" to='/home' />
            <div className={`menu-container w-full h-screen flex   ${mode ? 'bg-ContentDark-500 text-white' : 'bg-gray-100 text-black'}`}>
                <div className={`menu-container flex flex-col w-full h-max items-center mt-28`}>
                    <p className="text-xs sm:text-sm w-10/12 flex justify-center text-center">I am an experienced Full Stack Web Developer specializing in both frontend and backend development. With over 1 years of experience, I have built and managed a variety of web and mobile applications using modern technologies such as React.js, Express.js, Next.js, Vue.js, React Native, and Laravel for server-side development.

My expertise is not only focused on creating responsive and user-friendly interfaces, but also on building robust backend architectures, supported by efficient database management. I have a strong understanding of various database systems, including MySQL, PostgreSQL, and MongoDB, which enables me to design scalable and secure data-driven solutions.
</p>
                </div>
            </div>
        </>
    )
}

export default Journey