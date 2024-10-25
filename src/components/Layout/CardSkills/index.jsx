// CardSkilss.jsx
import { useUser } from "../../../Providers/userContext"

export default function CardSkilss({ images }) {
    const { mode } = useUser();

    return (
        <div className={`card-skilss flex items-center justify-center h-16 sm:h-20 w-16 sm:w-20 ${mode ? 'bg-NavbarDark-800' : 'bg-white'} rounded-full cursor-pointer shadow-md`}>
            <img src={images} alt="" className="image h-8 sm:h-10 w-8 sm:w-10" />
        </div>
    );
}
