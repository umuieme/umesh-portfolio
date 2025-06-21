import { HERO } from "@/lib/constant";
import Avatar from "./Avatar";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-16 bg-black text-white">
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
                    <a href="https://github.com/yourusername" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/yourprofile" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:youremail@example.com" aria-label="Email">
                        <Mail size={24} />
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
