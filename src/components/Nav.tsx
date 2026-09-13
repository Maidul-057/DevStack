import { useState } from "react";
import logo from "../assets/logo-text.png";

const Nav = () => {
    const [ButtonType, setButtonType] = useState<"Sign Up" | "Sign In">("Sign Up");
    const [activeNav, setActiveNav] = useState("Home");
    const [menuOpen, setMenuOpen] = useState(false);

    const handleUpdteBtnType = (type: "Sign Up" | "Sign In") => {
        setButtonType(type);
    };

    const NavLnk: string[] = [
        "Home",
        "Technologies",
        "Projects",
        "About",
        "Contact"
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white">

            {/* Main Navbar */}
            <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="btn btn-square btn-ghost md:hidden"
                >
                    <svg
                        aria-label="Menu"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>

                {/* Logo */}
                <img
                    src={logo}
                    alt="Dev Stack"
                    className="h-8 w-auto md:h-10"
                />

                {/* Desktop Navigation */}
                <ul className="hidden items-center gap-5 md:flex">
                    {NavLnk.map((item) => (
                        <li
                            key={item}
                            onClick={() => setActiveNav(item)}
                            className={
                                activeNav === item
                                    ? "cursor-pointer font-semibold text-pink-600"
                                    : "cursor-pointer text-black"
                            }
                        >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Buttons */}
                <div className="flex gap-1.5 md:gap-2">
                    <button
                        onClick={() => handleUpdteBtnType("Sign In")}
                        className={`rounded-full px-3 py-1.5 text-xs md:px-6 md:py-2 md:text-sm ${
                            ButtonType === "Sign In"
                                ? "bg-pink-600 text-amber-50"
                                : ""
                        }`}
                    >
                        Sign In
                    </button>

                    <button
                        onClick={() => handleUpdteBtnType("Sign Up")}
                        className={`rounded-full px-3 py-1.5 text-xs md:px-6 md:py-2 md:text-sm ${
                            ButtonType === "Sign Up"
                                ? "bg-pink-600 text-amber-50"
                                : ""
                        }`}
                    >
                        Sign Up
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="border-t bg-white px-4 py-3 md:hidden">
                    <ul className="flex flex-col gap-3">
                        {NavLnk.map((item) => (
                            <li
                                key={item}
                                onClick={() => {
                                    setActiveNav(item);
                                    setMenuOpen(false);
                                }}
                                className={
                                    activeNav === item
                                        ? "cursor-pointer font-semibold text-pink-600"
                                        : "cursor-pointer text-black"
                                }
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            )}

            <div className="divider my-0"></div>
        </nav>
    );
};

export default Nav;