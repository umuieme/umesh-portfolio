
interface SectionWrapperProps {
    id: string;
    children: React.ReactNode;
}

export function SectionWrapper({ id, children }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className="w-full py-16 px-6 md:px-12 lg:px-24 bg-background text-foreground"
        >
            <div className="mx-auto max-w-4xl">{children}</div>
        </section>
    );
}