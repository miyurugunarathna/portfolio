import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay, faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';
import { projects } from "../../data";

const WorkReel = () => {

    const work = useRef(null);
    const reel = useRef(null);

    let timeline = gsap.timeline({delay: 0.5});

    useEffect(() => {
        timeline.from(work.current, {duration: 0.5, ease: "power4.inOut", opacity: 1, y: 100}, 1);
        timeline.from(reel.current.children, {duration: 1, ease: "power4.in", opacity: 0, y: 100, stagger: {amount: 0.4}}, "+=1");
        timeline.play();
    })

    return (
        <div id="work">
            <div className="p-8 sm:p-16 pt-24 sm:pt-24 min-h-screen flex flex-col justify-between dark:text-white">
                <div>
                    <h1 ref={work} className="text-6xl sm:text-8xl tracking-tight font-light">
                        Work Reel
                    </h1>
                </div>
                <div ref={reel} className="mt-5 flex flex-col divide-y divide-slate-300 dark:divide-neutral-900" id="workreel">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-6">
                                <div className="w-full sm:w-7/12">
                                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
                                        {project.name}
                                    </h3>
                                </div>
                                <div className="w-3/12 flex flex-row gap-2">
                                    {project.lang.map((lang) => (
                                        <span key={lang}>{lang}</span>
                                    ))}
                                </div>
                                <div className="w-2/12 flex flex-row gap-4 justify-start md:justify-end">
                                    {project.links?.video &&
                                        <a href={project.links.video} target="_blank">
                                            <FontAwesomeIcon icon={faCirclePlay} size="xl" className="transition-all hover:rotate-6 hover:text-orange-500" />
                                        </a>
                                    }
                                    {project.links?.web &&
                                        <a href={project.links.web} target="_blank">
                                            <FontAwesomeIcon icon={faExternalLinkSquare} size="xl" className="transition-all hover:rotate-6 hover:text-orange-500" />
                                        </a>
                                    }
                                    {project.links?.github?.map((github) => (
                                        <a key={github} href={github} target="_blank">
                                            <FontAwesomeIcon icon={faGithub} size="xl" className="transition-all hover:rotate-6 hover:text-orange-500" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default WorkReel;