import { ABOUT_ME } from "@/lib/constant";
import SectionTitle from "../components/SectionTitle";
import { SectionWrapper } from "../components/SectionWrapper";

export default function AboutMe() {

    return (
        <SectionWrapper id="anout-me">
            <SectionTitle>{ABOUT_ME.heading}</SectionTitle>
            {ABOUT_ME.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-muted-foreground mt-4 first:mt-0">
                    {paragraph}
                </p>
            ))}
        </SectionWrapper>

    );
}