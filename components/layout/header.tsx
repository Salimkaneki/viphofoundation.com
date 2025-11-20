'use client'
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {

  return (
    <header className="bg-white border-b border-b-gray-300 px-4 md:px-[60px] py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/assets/V-F_Blue-Logo.svg"
            alt="VIPHO Foundation Logo"
            width={100}
            height={10}
            className=" "
          />
        </Link>
      </div>

      <nav className=" text-md hidden md:flex flex-row gap-8">
        <a href="#apropos" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">À propos</a>
        <a href="#blog&activités" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">Blog & Activités</a>

        <a href="#sengager" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">S'engager</a>
        <a href="#contact" className="text-gray-700 hover:text-primary-600 font-regular transition-colors">Contact</a>
      </nav>

      <div className="flex flex-row gap-2">
            <div className="size-5 rounded-full bg-yellow-300">

            </div>
            <h1 className="">Fr</h1>
      </div>

    </header>
  );
}