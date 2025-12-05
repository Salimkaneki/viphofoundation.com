"use client";

import { BlogCard } from "../components/cards";
import { TestimonialCard } from "../components/cards";
import { ScrollableSection } from "../components/sections";
import { useRef, useState, useEffect } from "react";

const titleClass = "font-display font-bold text-3xl text-gray-500";

export default function Home() {
  const visionItems = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Nisi ut aliquip ex ea commodo consequat.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.",
  ];

  const TickIcon = () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6666 4.08337L8.52202 7.85685C7.27595 9.35214 6.65291 10.0998 5.83325 10.0998C5.0136 10.0998 4.39056 9.35214 3.14448 7.85684L2.33325 6.88337"
        stroke="#00359E"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );

  return (
    <div className="min-h-screen bg-white">
      {/* -------- SECTION 1 -------- */}
      <section className="px-15">
        <div className="w-full flex flex-col items-center justify-between gap-8">
          <h1 className="w-[960px] font-display text-5xl font-bold text-center text-gray-800 mt-10 px-4">
            Quand la solidarite devient un geste, l’espoir renait dans chaque vie.
          </h1>

          <div className="flex flex-row w-full gap-8">
            <div className="flex-1 h-[346px] bg-primary-300"></div>
            <div className="w-[346px] h-[346px] bg-primary-900"></div>
          </div>
        </div>
      </section>

      {/* -------- SECTION 2 -------- */}
      <section className="w-full h-[200px] bg-yellow-50 justify-center flex items-center px-4 mt-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold text-center text-gray-800 mt-10 mb-8">
            Nos domaines d&apos;intervention
          </h2>
        </div>
      </section>

      {/* -------- A PROPOS -------- */}
      <section className="flex flex-row px-15 py-10 gap-4">
        <div className="flex-[0.95]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <h1 className={titleClass}>A propos</h1>
              <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
            </div>

            <h1 className="font-sans text-3xl font-bold">
              Lorem Ipsum dolor sit amet
            </h1>

            <p className="font-sans text-base text-gray-700 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>

            <p className="font-sans text-base text-gray-700 mt-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur.
            </p>
          </div>
        </div>

        <div className="flex-[0.95] h-[350px] bg-primary-300"></div>
      </section>

      {/* -------- VISION -------- */}
      <section className="flex flex-row px-15 py-10 gap-4">
        <div className="flex-[0.95] h-[350px] bg-primary-300"></div>

        <div className="flex-[0.95]">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center">
              <h1 className={titleClass}>Notre vision</h1>
              <div className="w-[100px] h-px bg-gray-400 ml-4"></div>
            </div>

            <h1 className="font-sans text-3xl font-bold">
              Lorem Ipsum dolor sit amet
            </h1>

            <ul className="font-sans text-base text-gray-700 mt-4 space-y-2">
              {visionItems.map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-primary-100 rounded-full p-2 mr-3">
                    <TickIcon />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ScrollableSection
        title="Blog"
        subtitle="Récentes actualités et articles"
      >
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </ScrollableSection>

      {/**/}
      <section className="flex flex-col px-15 py-10 gap-4">
        <div className="flex flex-row items-center">
          <h1 className={titleClass}>Objectifs</h1>
          <div className="w-[100px] h-[1.5px] bg-gray-400 ml-4"></div>
        </div>

        <div className="w-full bg-yellow-50 p-8">
          <div className="flex flex-row gap-8 justify-center">
            <div className="flex flex-col items-center text-center">
              <h1 className="font-display text-4xl font-bold mb-4">Humanite</h1>
              <p className="w-[350px] text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="font-display text-4xl font-bold mb-4">Solidarite</h1>
              <p className="w-[350px] text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <h1 className="font-display text-4xl font-bold mb-4">Espoir</h1>
              <p className="w-[350px] text-gray-700">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ScrollableSection
        title="Témoignages"
        subtitle="Ce que disent nos bénéficiaires"
      >
        <TestimonialCard
          quote="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          name="Marie Dupont"
          role="Bénéficiaire"
        />
        <TestimonialCard
          quote="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          name="Jean Martin"
          role="Bénéficiaire"
        />
        <TestimonialCard
          quote="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          name="Sophie Leroy"
          role="Bénéficiaire"
        />
        <TestimonialCard
          quote="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          name="Paul Durand"
          role="Bénéficiaire"
        />
      </ScrollableSection>
    </div>
  );
}