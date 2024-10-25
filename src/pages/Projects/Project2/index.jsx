import Navbar from "../../../components/Navbar";
import { useUser } from "../../../Providers/userContext";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Memastikan gaya CSS dimuat
import image1 from '../../../assets/images/Sistem Pakar/login.png';
import image2 from '../../../assets/images/Sistem Pakar/dashboard.png';
import image3 from '../../../assets/images/Sistem Pakar/riwayat.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLaptop, faCircleInfo } from "@fortawesome/free-solid-svg-icons";

export default function Project2() {
    const { mode } = useUser();

    const customArrowStyles = {
        position: 'absolute',
        top: 'calc(50% - 20px)', // Mengatur posisi vertikal di tengah
        width: '40px',
        height: '40px',
        zIndex: '10',
        cursor: 'pointer',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: '50%',
        border: 'none',
        outline: 'none',
        transition: 'background 0.3s ease',
    };

    const renderCustomPrevArrow = (onClickHandler, hasPrev, label) => (
        <button
            type="button"
            onClick={onClickHandler}
            style={{ ...customArrowStyles, left: '10px' }} // Mengatur posisi tombol panah kiri
            aria-label="Previous Slide"
            title="Previous Slide"
        >
            &lt;
        </button>
    );

    const renderCustomNextArrow = (onClickHandler, hasNext, label) => (
        <button
            type="button"
            onClick={onClickHandler}
            style={{ ...customArrowStyles, right: '10px' }} // Mengatur posisi tombol panah kanan
            aria-label="Next Slide"
            title="Next Slide"
        >
            &gt;
        </button>
    );

    return (
        <>
            <Navbar name="Project I" to='/Project' />
            <div className={`menu-container w-full h-screen flex ${mode ? 'bg-ContentDark-500 text-white' : 'bg-gray-100 text-black'}`}>
                <div className="menu-container flex flex-col w-full h-max items-center mt-28">
                    <p className="text-sm sm:text-lg w-10/12 flex justify-center text-center mb-10">
                    This expert system aims to detect and analyze verbal abuse in everyday communication. By leveraging modern technology
                    </p>
                    <div className={`card-project h-52  ${mode ? 'bg-NavbarDark-900' : 'white shadow-lg'} flex rounded gap-7`}>
                        <div className="card-project-images w-full ">
                            <Carousel
                                showArrows={true}
                                infiniteLoop={true}
                                showThumbs={false}
                                showStatus={false}
                                dynamicHeight={false} // Menonaktifkan dynamicHeight
                                renderArrowPrev={renderCustomPrevArrow}
                                renderArrowNext={renderCustomNextArrow}
                            >
                                <div>
                                    <img src={image1} alt="Image 1" className="images-card rounded object-contain"  />
                                </div>
                                <div>
                                    <img src={image2} alt="Image 2" className="images-card rounded object-contain"  />
                                </div>
                                <div className="h-full">
                                    <img src={image3} alt="Image 3" className="images-card rounded object-contain" />
                                </div>
                            </Carousel>
                        </div>
                        <div className={`card-project-info flex flex-col justify-center gap-1  `}>
                            <div className="flex items-center gap-2 mb-4">
                                <p className="text-lg font-semibold">Project Info</p>
                                <FontAwesomeIcon icon={faCircleInfo} />
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg">
                                <p className=" font-semibold">Project Name:</p>
                                <p>Expert System</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg">
                                <p className=" font-semibold">Build With:</p>
                                <p>React Js, React Native, Express Js</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg">
                                <p className=" font-semibold">Year:</p>
                                <p>2024</p>
                            </div>
                            <div className="flex flex-wrap items-center gap-2 text-sm sm:text-lg">
                                <p className=" font-semibold">Development Time:</p>
                                <p>7 Days</p>
                            </div>
                            <div className="  flex items-center gap-4 mt-5">
                                <a 
                                    target="blank"
                                    className={`h-10 w-28 rounded  ${mode ? 'bg-NavbarDark-800' : 'bg-gray-200 shadow-lg'} flex items-center justify-center gap-2`}> 
                                    <FontAwesomeIcon icon={faGithub} className="text-lg" />
                                    <p>Github</p>
                                </a>
                                <a 
                                    href="" 
                                    onClick={() => {
                                        alert('soon yaa...😊')
                                    }}
                                    className={`h-10 w-28 rounded  ${mode ? 'bg-NavbarDark-800' : 'bg-gray-200 shadow-lg'} flex items-center justify-center gap-2`}> 
                                    <FontAwesomeIcon icon={faLaptop} aclassName="text-lg" />
                                    <p>Demo</p>
                                </a>
                            </div>
                        </div>
                        {/* <CardProject 
                            projectName = "haha"
                            projectLanguange = "haha"
                            projectYear = "haha"
                            projectTime = "haha"
                            urlGit = "haha"
                            img1 = {image1}
                            img2 = {image1}
                            img3 = {image1}
                            img4 = {image1}
                            img5 = {image1}
                        /> */}
                    </div>
                    
                </div>
            </div>
        </>
    );
}
