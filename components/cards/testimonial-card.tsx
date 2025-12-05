import React from "react";

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
}

export default function TestimonialCard({ quote, name, role }: TestimonialCardProps) {
  return (
    <div className="shrink-0 w-[500px] bg-white p-6 rounded-lg shadow-md border">
      <div className="text-primary-500 text-4xl mb-4">"</div>
      <p className="font-sans text-base text-gray-700 mb-4">{quote}</p>
      <p className="font-sans text-sm font-bold text-gray-800">{name}</p>
      <p className="font-sans text-sm text-gray-600">{role}</p>
    </div>
  );
}