"use client";

import { GithubFreeIcons, LinkedinIconFreeIcons, MediumFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Footer() {
    return (
        <footer className="bg-background px-6 py-10 text-white">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                {/* Invite / feedback text */}
                <p className="text-center text-lg font-semibold max-w-md text-white/80">
                    Let's talk tech, projects, or just say hi — open to feedback, collaborations, and cool ideas!

                </p>

                {/* Social links */}
                <div className="flex gap-6">
                    <a
                        href="https://github.com/umuieme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition"
                    >
                        <HugeiconsIcon icon={GithubFreeIcons} />
                        GitHub
                    </a>
                    <a
                        href="https://linkedin.com/in/umuieme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition"
                    >
                        <HugeiconsIcon icon={LinkedinIconFreeIcons} />
                        LinkedIn
                    </a>
                    <a
                        href="https://medium.com/@umuieme"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-primary transition"
                    >
                        <HugeiconsIcon icon={MediumFreeIcons} />
                        Medium
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-xs text-center text-white/50 mt-6">
                    &copy; {new Date().getFullYear()} Umuieme. Open source on GitHub under MIT License.
                </p>
            </div>
        </footer>
    );
}
