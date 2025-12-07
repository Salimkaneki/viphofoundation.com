import React from "react";
import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" className="px-15 pt-15 pb-5 flex items-center text-gray-600 text-lg">
      {items.map((item, idx) => (
        <span key={item.href} className="flex items-center">
          {idx > 0 && <span className="mx-2 text-gray-400">/</span>}
          {idx === items.length - 1 ? (
            <span className="font-medium text-gray-700">{item.label}</span>
          ) : (
            <Link href={item.href} className="hover:text-primary-400 transition">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
