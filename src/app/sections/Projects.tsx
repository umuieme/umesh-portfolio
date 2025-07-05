import { PROJECTS } from "@/lib/constant";
import SectionTitle from "../components/SectionTitle";
import { SectionWrapper } from "../components/SectionWrapper";
import { ProjectType } from "@/lib/types";

export default function Projects() {
    return (
        <SectionWrapper id="projects">
            <SectionTitle>Projects</SectionTitle>
            <div className="space-y-8">
                {PROJECTS.map((project) => (
                    <ProjectCard
                        key={project.title} {...project}
                    />
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


// In a file like components/ProjectCard.tsx


function ProjectCard({ title, type, details, tech, links }: ProjectType) {
    return (
        <article className="bg-secondary/20 p-6 rounded-lg">
            <header className="mb-3">
                <h3 className="text-xl font-semibold text-primary">{title}</h3>
                <p className="text-sm italic text-primary/70">{type}</p>
            </header>

            {/* The new details list */}
            <ul className="list-disc list-outside pl-5 text-white/80 space-y-1 mb-4">
                {details.map((point, i) => (
                    <li key={i}>{point}</li>
                ))}
            </ul>

            <footer className="flex flex-col gap-4">
                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2">
                    {tech.map((item) => (
                        <span key={item} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-1 rounded-full">
                            {item}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 text-sm text-primary/80 underline hover:text-primary/100 transition-colors duration-200">
                    {links.github && <a href={links.github} target="_blank" rel="noopener noreferrer">View on GitHub</a>}
                    {links.playStore && <a href={links.playStore} target="_blank" rel="noopener noreferrer">View on Play Store</a>}
                    {links.website && <a href={links.website} target="_blank" rel="noopener noreferrer">View Live Site</a>}
                </div>
            </footer>
        </article>
    );
}