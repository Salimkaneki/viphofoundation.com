'use client';
import React, { useState } from "react";
import Breadcrumb from "@/components/breadcrumb";
import Button from "@/components/ui/button";
import { Heart, Star, Save } from "lucide-react";

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
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Test du Bouton</h2>
        <Button label="Cliquez-moi" onClick={() => alert('Bouton cliqué !')} />
        <Button label="Avec icône" icon={<Heart />} onClick={() => console.log('Heart clicked')} />
        <Button label="Bouton vert" bgColor="bg-green-500" textColor="text-white" icon={<Star />} />
        <Button label="Bouton rouge" bgColor="bg-red-500" textColor="text-black" icon={<Save />} />
        <Button label="Désactivé" disabled />
        <Button label="Type submit" type="submit" bgColor="bg-blue-500" />
      </div>
    </div>
  );
}
