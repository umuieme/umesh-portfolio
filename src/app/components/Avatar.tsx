import Image from "next/image";

export default function Avatar() {
    return (
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-lg
                    before:absolute before:inset-0 before:rounded-full before:blur-xl before:bg-primary/50 before:z-[-1]">
            <Image
                src="/profile.png"
                alt="Umesh Basnet"
                fill
                className="object-cover"
                priority
            />
        </div>
    );
}
