import React from "react";

interface SectionHeaderProps {
  title: string;
  className?: string;
}

export default function SectionHeader({ title, className = "" }: SectionHeaderProps) {
  return (
    <div className={`flex flex-row items-center ${className}`}>
      <h1 className="font-display font-bold text-3xl text-gray-500">{title}</h1>
      <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
    </div>
  );
}