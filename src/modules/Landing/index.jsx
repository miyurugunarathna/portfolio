import { useRef, useEffect } from "react";
import { gsap } from "gsap";

const Landing = () => {

    const hello = useRef(null);
    const title = useRef(null);
    const resume = useRef(null);
    let timeline = gsap.timeline({ duration: 0.5, delay: 0.1, ease: "power4.inOut" });

    useEffect(() => {
        timeline.from(hello.current, {y: 100, opacity: 0}, 1);
        timeline.from(title.current.children, {y: 100, opacity: 0, duration: 1, stagger: {amount: 0.5}}, "+=1");
        timeline.from(resume.current, {y: 60, opacity: 0}, "+=1");
        timeline.play();
    }, []);

    return (
        <div id="home">
            <div className="p-8 min-h-screen pt-24 sm:p-16 sm:pt-24 flex flex-col gap-8 justify-between">
                <div>
                    <h2 ref={hello} className="text-3xl font-light uppercase sm:text-6xl dark:text-white">
                        Hello there! I'm a
                    </h2>
                </div>
                <div className="flex flex-col gap-4 sm:gap-1">
                    <div ref={title} className="flex flex-col text-5xl sm:text-7xl md:text-8xl lg:text-9xl leading-[3rem] sm:leading-[4rem] md:leading-[5rem] lg:leading-[6rem] uppercase font-[1000] tracking-wide font-['Cabinet_Grotesk'] dark:text-white">
                        <span>Design</span>
                        <span>Minded</span>
                        <span>Frontend</span>
                        <span>Developer</span>
                    </div>
                    <span ref={resume} className="text-lg sm:text-2xl leading-5 sm:ml-1 dark:text-white">
                        Wanna see more? Just check my <a href="https://drive.google.com/file/d/1XE9ZLo8Im6HR9xQCrtWJhHnXV1Vt3nHF/view?usp=sharing" target="_blank" className="text-orange-600">resume.</a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Landing;