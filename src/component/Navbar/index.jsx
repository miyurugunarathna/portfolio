import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = (props) => {
    return (
        <div className="relative flex justify-center dark:text-white z-10">
            <div className="fixed top-0 w-full flex justify-between gap-8 px-8 sm:px-16 items-center backdrop-blur-[5px] saturate-150 h-16 font-semibold text-md bg-white/50 border-b border-black/10 dark:border-white/10 dark:bg-black/50">
                <div className="flex gap-10">
                    <Link className="hover:text-purple-900 cursor-pointer transition-all duration-300" activeClass="text-purple-900" spy={true} to="home" smooth={true} duration={1000} >Home</Link>
                    <Link className="hover:text-purple-900 cursor-pointer transition-all duration-300" activeClass="text-purple-900" spy={true} to="work" smooth={true} duration={1000} >Work</Link>
                    <Link className="hover:text-purple-900 cursor-pointer transition-all duration-300" activeClass="text-purple-900" spy={true} to="contact" smooth={true} duration={1000} >Contact</Link>
                </div>
                <div>
                    <button onClick={props.toggle} className="fade font-semibold flex items-center gap-1 hover:text-purple-900 transition-all duration-300">
                        <FontAwesomeIcon className="hover:animate-spin" icon={props.mode === "dark" ? faMoon : faSun} />
                        <span className="hidden sm:block">{props.mode === "dark" ? "Dark" : "Light"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;