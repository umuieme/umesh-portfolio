import { SKILLS } from "@/lib/constant";
import SectionTitle from "../components/SectionTitle";
import { SectionWrapper } from "../components/SectionWrapper";

export default function Skills() {
    return (
        <SectionWrapper id="skills">
            <SectionTitle>Skills</SectionTitle>
            <div className="gap-8">
                {Object.entries(SKILLS).map(([category, skills]) => (
                    <section key={category} className="mb-8">
                        <h3 className="text-lg font-semibold text-primary/80 mb-3 pb-1 border-b">{category}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="inline-block bg-secondary/30 text-white/70 px-4 py-1 rounded-full text-sm select-none
                           hover:bg-secondary/80 transition-colors duration-200"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </section>
                ))}
            </div>
        </SectionWrapper>
    );

}