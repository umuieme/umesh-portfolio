import { EXPERIENCE } from "@/lib/constant";
import SectionTitle from "../components/SectionTitle";
import { SectionWrapper } from "../components/SectionWrapper";

export default function Experience() {
    return (
        <SectionWrapper id="experience">
            <SectionTitle>Experience</SectionTitle>
            <div className="flex flex-col gap-8">
                {EXPERIENCE.map(({ role, company, location, period, details, website }) => (
                    <article key={`${role}-${company}`} className="bg-secondary/20 p-6 rounded-lg">
                        <header className="mb-3">
                            <h3 className="text-xl font-semibold text-primary">{role}</h3>
                            <p className="text-sm text-primary/80 underline hover:text-primary/100 transition-colors duration-200">
                                <a href={website} target="_blank" >
                                    {company} — {location}
                                </a>

                            </p>
                            <p className="text-sm italic text-primary/70">{period}</p>
                        </header>
                        <ul className="list-disc list-outside pl-5 text-white/80 space-y-1">
                            {details.map((point, i) => (
                                <li key={i}>{point}</li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </SectionWrapper >
    );
}
