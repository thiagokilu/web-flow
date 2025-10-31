"use client";
import { MoveUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import BrandLogo from "../../assets/img/NavbarBrand.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="text-white flex justify-between items-center px-6 md:px-10 py-5 relative">
      {/* Logo */}
      <div className="flex items-center">
        <Image src={BrandLogo} alt="Logo" className="w-28 md:w-32" />
      </div>

      {/* Botão Menu (mobile) */}
      <button
        className="md:hidden z-50"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navegação */}
      <nav
        className={`
          fixed top-0 left-0 w-full h-full bg-[#1e0044]/95 flex flex-col items-center justify-center gap-8 text-lg font-light transition-all duration-300 z-40
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
          md:static md:opacity-100 md:visible md:flex md:flex-row md:justify-center md:gap-10 md:bg-transparent md:h-auto md:w-auto
        `}
      >
        <ul className="flex flex-col items-center gap-8 md:flex-row md:gap-10">
          {["LINKEDIN", "TWITTER", "DRIBBLE"].map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-1 cursor-pointer hover:text-purple-300"
            >
              {item}
              <MoveUpRight size={18} />
            </li>
          ))}
        </ul>

        {/* Botão "LET’S TALK" */}
        <button className="mt-6 md:mt-0 flex items-center gap-2 px-8 py-3 text-base md:text-xl font-semibold text-purple-200 rounded-full border-2 bg-transparent hover:text-white shadow-[0_0_20px_rgba(126,34,206,0.4)] border-purple-500">
          LET’S TALK
          <MoveUpRight size={20} absoluteStrokeWidth />
        </button>
      </nav>
    </header>
  );
}
