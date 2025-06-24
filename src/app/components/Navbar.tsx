"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constant";
import { Cancel01FreeIcons, Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
    const [activeId, setActiveId] = useState<string>("");
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const visibleSections = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                if (visibleSections.length > 0) {
                    setActiveId(`#${visibleSections[0].target.id}`);
                }
            },
            {
                root: null,
                rootMargin: "0px 0px -60% 0px",
                threshold: 0.1,
            }
        );

        const sections = NAV_LINKS
            .map(({ href }) => document.getElementById(href.replace("#", "")))
            .filter(Boolean) as HTMLElement[];

        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <header>
            <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 py-3 flex justify-end">
                    <ul className="hidden md:flex gap-6">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <Link
                                    href={href}
                                    className={`text-sm transition-colors ${activeId === href
                                        ? "text-primary font-semibold"
                                        : "text-white/70"
                                        }  hover:text-primary/80`}
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setMenuOpen(!menuOpen)} className="ml-4 md:hidden text-white">
                        {<HugeiconsIcon icon={menuOpen ? Cancel01FreeIcons : Menu01Icon} />}

                    </button>

                </div>
            </nav>
            {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} activeId={activeId} />}

        </header>
    );
}
