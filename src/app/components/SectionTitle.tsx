
type SectionTitleProps = {
    children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
    return (
        <h2 className="text-3xl font-bold text-primary mb-4">
            {children}
        </h2>
    );
}