'use client';
import React, { useState } from "react";
import Breadcrumb from "@/components/breadcrumb";

export default function TestPage() {
  const breadcrumbItems = [
    { label: "Accueil", href: "/" },
    { label: "Blog", href: "/blog-et-activite" },
  ];

  return (
    <div className="p-4">
      <Breadcrumb
        items={breadcrumbItems}
      />
    </div>
  );
}
