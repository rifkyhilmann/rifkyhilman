import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

function MenuItem({name, icons, to}) {
    return (
        <Link to={to} className="w-full h-12 flex flex-col items-center ">
            <div className={`menu-item h-12  border-b border-gray-400 flex items-center gap-2 relative`}>
                <div className="w-8 h-8  flex items-center justify-center">
                    <img src={icons} alt="" className="h-6 w-6"/>
                </div>
                <p className="text-sm">{name}</p>
                <FontAwesomeIcon icon={faChevronRight} className="text-xs absolute right-3" />
            </div>
        </Link>
    )
}

export default MenuItem