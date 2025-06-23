"use client";

import { NAV_LINKS } from "@/lib/constant";
import { Cancel01FreeIcons, GithubFreeIcons, LinkedinIconFreeIcons, MediumFreeIcons } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import Link from "next/link";

export default function MobileMenu({ onClose, activeId }: { onClose: () => void, activeId: string }) {
    console.log("MobileMenu rendered with activeId:", activeId);
    return (
        <div className="fixed inset-0 bg-background z-50 flex flex-col justify-between p-6">
            <div className="flex justify-end">
                <button onClick={onClose} aria-label="Close menu">
                    {<HugeiconsIcon icon={Cancel01FreeIcons} />}
                </button>
            </div>

            <ul className="flex flex-col mt-10 text-lg">
                {NAV_LINKS.map(({ label, href }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            onClick={onClose}
                            className={`flex transition-colors p-2 ${activeId === href
                                ? "text-primary font-semibold bg-secondary/30"
                                : "text-white/70"
                                }  hover:text-primary/80 hover:bg-secondary/30 rounded-lg hover:text-2xl`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="grid grid-cols-1 gap-4">
                <a
                    href="https://github.com/umuieme"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-white text-black px-4 py-3 rounded-lg font-medium"
                >
                    {<HugeiconsIcon icon={GithubFreeIcons} />}
                    GitHub
                </a>
                <a
                    href="https://linkedin.com/in/umuieme"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-4 py-3 rounded-lg font-medium"
                >
                    {<HugeiconsIcon icon={LinkedinIconFreeIcons} />}
                    LinkedIn
                </a>
                <a
                    href="https://medium.com/@umuieme"
                    target="_blank"
                    className="flex items-center justify-center gap-2 bg-black text-white px-4 py-3 rounded-lg font-medium"
                >
                    {<HugeiconsIcon icon={MediumFreeIcons} />}
                    Medium
                </a>
            </div>
        </div>
    );
}
