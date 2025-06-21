import { ABOUT_ME } from "@/lib/constant";

export default function AboutMe() {

    return (
        <section id="anout-me" className="w-full py-16 px-6 md:px-12 lg:px-24 bg-background text-foreground">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold text-primary mb-4">{ABOUT_ME.heading}</h2>
                {ABOUT_ME.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-lg leading-relaxed text-muted-foreground mt-4 first:mt-0">
                        {paragraph}
                    </p>
                ))}
            </div>
        </section>

    );
}