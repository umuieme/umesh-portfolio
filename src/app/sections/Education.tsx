// components/sections/Education.tsx

import { EDUCATION } from "@/lib/constant";
import SectionTitle from "../components/SectionTitle";
import { SectionWrapper } from "../components/SectionWrapper";

export default function Education() {
    return (
        <SectionWrapper id="education">
            <SectionTitle>Education</SectionTitle>
            <ul className="space-y-6">
                {EDUCATION.map((edu, index) => (
                    <li key={index} className="border-l-4 border-primary pl-4">
                        <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                        <p className="text-sm text-white/70">{edu.institution}</p>
                        <p className="text-sm text-white/50">
                            {edu.duration} &middot; {edu.location}
                        </p>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
}
