import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact = () => {

    const message = useRef(null);
    const contact = useRef(null);
    const social = useRef(null);

    let timeline = gsap.timeline({delay: 0.5});

    useEffect(() => {
        timeline.from(message.current.children, {duration: 1, ease: "power3.easeIn", x: -100, opacity: 0, stagger: {amount: 0.5}}, 1);
        timeline.from(contact.current.children, {duration: 1, ease: "power3.easeIn", x: 100, opacity: 0, stagger: {amount: 0.5}}, 1);
        timeline.from(social.current.children, {duration: 1, ease: "power3.easeIn", x: 100, opacity: 0, stagger: {amount: 0.5}}, 1);
        timeline.play();
    }, []);

    return (
        <div id="contact">
            <div className="p-8 sm:p-16 pt-24 sm:pt-24 min-h-screen items-stretch flex flex-col sm:flex-row gap-8 sm:gap-4 dark:text-white">
                <div className="w-7/12">
                    <h1 ref={message} className="text-7xl flex flex-col tracking-tight font-light leading-[4.5rem] uppercase">
                        <span>I</span>
                        <span>would</span>
                        <span>love</span>
                        <span>to</span>
                        <span>hear</span>
                        <span>from</span>
                        <span>you</span>
                    </h1>
                </div>
                <div className="flex flex-col self-start sm:self-center pb-24 sm:pb-0 gap-10">
                    <div ref={contact} className="flex flex-col gap-3">
                        <h4 className="text-2xl font-semibold">Say Hello!</h4>
                        <p className="text-xl leading-6">
                            Wadugama Road<br />
                            Nehinna<br />
                            Dodangoda<br />
                            Kalutara<br />
                            Sri Lanka
                        </p>
                        <div className="flex flex-col gap-1">
                            <a className="text-xl font-semibold" href="mailto:miyurupriyawadan@gmail.com">
                                miyurupriyawadan@gmail.com
                            </a>
                            <a className="text-xl font-semibold" href="tel:+94776424889">
                                +94 77 642 4889
                            </a>
                        </div>
                    </div>
                    <div ref={social} className="flex flex-col gap-3">
                        <h4 className="text-xl">See me on</h4>
                        <div className="flex flex-row gap-8">
                            <a href="https://www.linkedin.com/in/miyurugunarathna/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="xl" className="transition-all hover:rotate-6 hover:text-orange-500" /></a>
                            <a href="https://github.com/miyurugunarathna" target="_blank"><FontAwesomeIcon icon={faGithub} size="xl" className="transition-all hover:rotate-6 hover:text-orange-500" /></a>
                            <a href="https://twitter.com/miyurugunarathn" target="_blank"><FontAwesomeIcon icon={faTwitter} size="xl" className="transition-all hover:rotate-6 hover:text-orange-500" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;