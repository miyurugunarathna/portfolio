import { useRef, useEffect } from "react";
import gsap from "gsap";
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-scroll";

const Navbar = (props) => {

    const header = useRef(null);
    let timeline = gsap.timeline({ duration: 1, ease: "Power3.easeOut" });

    useEffect(() => {
        timeline.from(header.current, {y: -60}, 1);
        timeline.play();
    }, []);

    return (
        <div className="relative flex justify-center dark:text-white z-10">
            <div ref={header} className="fixed top-0 w-full flex justify-between gap-8 px-8 sm:px-16 items-center backdrop-blur-lg h-16 font-semibold text-md bg-slate-200/70 border-b border-slate-900/10 dark:bg-neutral-900/80">
                <div className="flex gap-10">
                    <Link className="hover:text-orange-500 cursor-pointer" activeClass="text-orange-500" spy={true} to="home" smooth={true} duration={1000} >Home</Link>
                    <Link className="hover:text-orange-500 cursor-pointer" activeClass="text-orange-500" spy={true} to="work" smooth={true} duration={1000} >Work</Link>
                    <Link className="hover:text-orange-500 cursor-pointer" activeClass="text-orange-500" spy={true} to="contact" smooth={true} duration={1000} >Contact</Link>
                </div>
                <div>
                    <button onClick={props.toggle} className="fade font-semibold flex items-center gap-1 hover:text-orange-500">
                        <FontAwesomeIcon icon={props.mode === "dark" ? faMoon : faSun} />
                        <span className="hidden sm:block">{props.mode === "dark" ? "Dark" : "Light"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;