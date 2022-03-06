import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faCirclePlay, faExternalLinkSquare } from '@fortawesome/free-solid-svg-icons';
import { projects } from "../../data";

const WorkReel = () => {
    return (
        <div id="work">
            <div className="p-8 sm:p-16 pt-24 sm:pt-24 min-h-screen flex flex-col justify-between border-b border-b-black/10 dark:border-b-white/10 dark:text-white">
                <div>
                    <h1 className="text-6xl sm:text-8xl tracking-tight font-light">
                        Work Reel
                    </h1>
                </div>
                <div className="mt-5 flex flex-col divide-y divide-black/5 dark:divide-white/5" id="workreel">
                    {projects.map((project) => (
                        <div key={project.id}>
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-3 py-6">
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
                                <div className="w-2/12 flex flex-row gap-4 justify-start lg:justify-end">
                                    {project.links?.video &&
                                        <a href={project.links.video} target="_blank">
                                            <FontAwesomeIcon icon={faCirclePlay} size="xl" className="transition-all duration-300 hover:text-purple-900" />
                                        </a>
                                    }
                                    {project.links?.web &&
                                        <a href={project.links.web} target="_blank">
                                            <FontAwesomeIcon icon={faExternalLinkSquare} size="xl" className="transition-all duration-300 hover:text-purple-900" />
                                        </a>
                                    }
                                    {project.links?.github?.map((github) => (
                                        <a key={github} href={github} target="_blank">
                                            <FontAwesomeIcon icon={faGithub} size="xl" className="transition-all duration-300 hover:text-purple-900" />
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