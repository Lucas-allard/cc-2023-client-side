import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import Link from "next/link";

const Header = () => {
    return (
        <header className="p-4 bg-amber-400 text-white">
            <ul className="flex flex-nowrap justify-between items-center gap-4 ">
                <li className="flex flex-col items-center gap-2 cursor-pointer hover:text-amber-200">
                    <FontAwesomeIcon icon={faHouse}/>
                    <Link href="/" className="text-xl font-bold">Accueil</Link>
                </li>
                <li className="flex flex-col items-center gap-2 cursor-pointer hover:text-amber-200">
                    <FontAwesomeIcon icon={faPlane}/>
                    <p className="text-xl font-bold">Voyages</p>
                </li>
                <li className="flex flex-col items-center gap-2 group cursor-pointer hover:text-amber-200">
                    <FontAwesomeIcon icon={faUser}/>
                    <p className="text-xl font-bold">Profil</p>
                </li>
            </ul>
        </header>
    )
}

export default Header