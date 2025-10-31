import React from "react";
import Header from "../Header/Header";
import Image from "next/image";
import Badge from "../../assets/img/Badge-footer.png";

export default function HeroFooter() {
  return (
    <div className="relative bg-[#1e0044] mt-10 h-[90vh] sm:h-screen rounded-4xl box-border text-white overflow-hidden">
      {/* Header */}
      <Header />

      {/* Conteúdo central */}
      <div className="flex flex-col items-center justify-center h-full gap-8 px-5 text-center">
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-semibold leading-tight">
          Interested in <br className="hidden sm:block" />
          working together?
        </h1>
        <Image
          src={Badge}
          alt="badge"
          className="w-28 sm:w-40 md:w-48 h-auto"
        />
      </div>

      {/* Rodapé */}
      <div className="absolute bottom-5 sm:bottom-10 flex flex-col sm:flex-row w-full items-center sm:justify-between text-xs sm:text-sm gap-2 sm:gap-0 px-5 sm:px-10 opacity-80">
        <span>©2024 – All Rights Reserved</span>
        <span>Available for freelance work</span>
      </div>
    </div>
  );
}
