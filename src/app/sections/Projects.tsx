import { PROJECTS } from "@/lib/constant";
import SectionTitle from "../components/SectionTitle";
import { SectionWrapper } from "../components/SectionWrapper";
import { AppStoreFreeIcons, Github01FreeIcons, Globe02FreeIcons, HugeiconsFreeIcons, PlayStoreFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-8">
                {PROJECTS.map((project) => (
                    <div
                        key={project.title}
                        className="border border-white/10 rounded-xl p-4 hover:border-primary transition"
                    >
                        <div className="flex justify-between items-center mb-1">
                            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                                {project.type}
                            </span>
                        </div>
                        <p className="text-white/70 mt-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2 mt-3">
                            {project.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="bg-secondary/30 text-white/70 px-3 py-1 rounded-full text-xs"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        {/* <div className="flex flex-wrap gap-2 mt-3">
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="bg-white/5 text-white/40 px-2 py-0.5 rounded-full text-xs"
                                >
                                    #{tag}
                                </span>
                            ))}
                        </div> */}

                        <div className="flex flex-wrap gap-4 mt-4 text-sm text-primary">
                            {project.links?.appStore && (
                                <a
                                    href={project.links.appStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:underline"
                                >
                                    App Store <HugeiconsIcon icon={AppStoreFreeIcons} size={14} />
                                </a>
                            )}
                            {project.links?.playStore && (
                                <a
                                    href={project.links.playStore}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:underline"
                                >
                                    Play Store <HugeiconsIcon icon={PlayStoreFreeIcons} size={14} />
                                </a>
                            )}
                            {project.links?.github && (
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:underline"
                                >
                                    GitHub <HugeiconsIcon icon={Github01FreeIcons} size={14} />
                                </a>
                            )}
                            {project.links?.website && (
                                <a
                                    href={project.links.website}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-1 hover:underline"
                                >
                                    Website <HugeiconsIcon icon={Globe02FreeIcons} size={14} />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 text-center">
                <a
                    href="https://github.com/umuieme?tab=repositories"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary border border-primary/80 px-4 py-4 rounded-lg transition-colors hover:text-white hover:bg-primary"
                >
                    View more projects on GitHub
                </a>
            </div>
        </SectionWrapper>
    );
}
