import { HERO } from "@/lib/constant";
import { Github01FreeIcons, HugeiconsFreeIcons, Linkedin01FreeIcons, Mail01FreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Avatar from "../components/Avatar";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-black text-white">
            {/* Left content */}
            <div className="flex-1 flex flex-col gap-6 max-w-xl text-center md:text-left">
                <h1 className="text-4xl font-bold">
                    {HERO.name}
                </h1>
                <p className="text-lg text-gray-300">
                    {HERO.summary}
                </p>

                <a
                    href="#projects"
                    className="inline-block px-6 py-3 bg-primary text-black font-semibold rounded-lg shadow-md hover:bg-primary-dark transition"
                >
                    View Projects
                </a>

                <div className="flex justify-center md:justify-start gap-6 text-gray-400">
                    <a href="https://github.com/umuieme" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <HugeiconsIcon
                            icon={Github01FreeIcons}
                            size={24}
                        />
                    </a>
                    <a href="https://linkedin.com/in/umuieme" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <HugeiconsIcon
                            icon={Linkedin01FreeIcons}
                            size={24}
                        />
                    </a>
                    <a href="mailto:basnet2umesh@gmail.com" aria-label="Email">
                        <HugeiconsIcon
                            icon={Mail01FreeIcons}
                            size={24}
                        />
                    </a>
                </div>
            </div>

            {/* Right avatar */}
            <div className="mt-10 md:mt-0 flex justify-center md:justify-end flex-1">
                <Avatar />
            </div>
        </section>
    );
}
