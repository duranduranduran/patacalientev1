import { useState } from 'react'
import {navLinks} from "../constants/index.js";

const NavItems = () => {

    return (
        <ul className="nav-ul">
            {navLinks.map(({ id, href, name }) => (
                <li key={id} className="nav-li">
                    <a href={href} className= "nav-li_a" onClick={() => {}}>
                        {name}
                    </a>
                </li>
            ))}
        </ul>
    );
}
const Navbar = () => {
    const [isOpen , setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prevIsOpen) => !prevIsOpen)
    }

    return (
        <header className="fixed top-0 left-1 right-1 z-50 bg-white">
            <div className= "max-w-7xl mx-auto">
                <div className="flex justify-between py-5 mx-auto">
                    <a href="/" className="text-black font-bold text-3xl hover:text-red-900 transition-colors" >
                         PATA CALIENTE &reg;
                    </a>
                    <button onClick={toggleMenu} className="text-white hover:text-black focus:outline-none
                     sm:hidden flex" >
                        <img src={ isOpen ? "assets/close.svg" : "assets/menu.svg"} alt="toggle" className= "w-8 h-8" />
                    </button>
                    <nav className="sm:flex hidden">
                        <NavItems />
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5">
                    <NavItems />
                </nav>
            </div>
        </header>
    )
}
export default Navbar

