import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHouse} from '@fortawesome/free-solid-svg-icons'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="p-4 bg-amber-400 text-white">
            <div className="flex flex-nowrap justify-between items-center gap-4">
                <div className="flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faHouse}/>
                        <p className="text-xl font-bold">Accueil</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faPlane}/>
                    <p className="text-xl font-bold">Voyages</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    <FontAwesomeIcon icon={faUser}/>
                    <p className="text-xl font-bold">Profil</p>
                </div>
            </div>
        </header>
    )
}

export default Header