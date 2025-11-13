"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CATEGORIES } from "@/lib/data";

export default function FoodSlider() {
  const [index, setIndex] = useState(0);
  const autoplayRef = useRef<number | null>(null);

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  function startAutoplay() {
    stopAutoplay();
    autoplayRef.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % CATEGORIES.length);
    }, 4000);
  }

  function stopAutoplay() {
    if (autoplayRef.current) {
      clearTimeout(autoplayRef.current);
      autoplayRef.current = null;
    }
  }

  function go(delta: number) {
    stopAutoplay();
    setIndex((i) => {
      const n = (i + delta + CATEGORIES.length) % CATEGORIES.length;
      return n;
    });
  }

  // Get the three visible cards: left (prev), center (current), right (next)
  const leftIdx = (index - 1 + CATEGORIES.length) % CATEGORIES.length;
  const centerIdx = index;
  const rightIdx = (index + 1) % CATEGORIES.length;

  const renderCard = (catIdx: number, position: "left" | "center" | "right") => {
    const cat = CATEGORIES[catIdx];
    const isCenter = position === "center";

    const cardContent = (
      <>
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white blur-3xl" />
          <div className="absolute -left-10 -bottom-10 w-32 h-32 rounded-full bg-black/20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-3">
          <div className="text-6xl animate-float">{cat.emoji}</div>
          <h3 className="text-xl font-bold leading-tight">{cat.name}</h3>
          {isCenter && (
            <p className="text-sm font-medium opacity-90 max-w-xs">{cat.description}</p>
          )}
        </div>
      </>
    );

    const cardClass = `
      absolute transition-all duration-500 ease-out
      rounded-3xl overflow-hidden cursor-pointer
      flex flex-col items-center justify-center text-center text-white
      bg-gradient-to-br ${cat.gradient}
      ${
        isCenter
          ? "w-64 h-80 z-20 scale-100 opacity-100 shadow-2xl"
          : "w-48 h-64 z-10 scale-75 opacity-60 shadow-lg hover:scale-80 hover:opacity-75"
      }
      ${
        position === "left"
          ? "-left-48 sm:-left-32"
          : position === "right"
          ? "-right-48 sm:-right-32"
          : "left-1/2 -translate-x-1/2"
      }
    `;

    if (isCenter) {
      return (
        <Link
          key={`${cat.id}-${position}`}
          href={`/phan-loai/${cat.id}`}
          className={cardClass}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {cardContent}
        </Link>
      );
    } else {
      return (
        <div
          key={`${cat.id}-${position}`}
          className={cardClass}
          onClick={() => {
            if (position === "left") go(-1);
            else if (position === "right") go(1);
          }}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          {cardContent}
        </div>
      );
    }
  };

  return (
    <section className="w-full max-w-5xl py-12">
      <div className="flex flex-col items-center gap-8">
        {/* Header */}
        <div className="w-full flex items-center justify-between px-4 sm:px-0">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Danh sách phân loại
          </h2>
          <span className="text-lg font-semibold text-zinc-500 dark:text-zinc-400">
            {String(index + 1).padStart(2, "0")}/
            {String(CATEGORIES.length).padStart(2, "0")}
          </span>
        </div>

        {/* Carousel */}
        <div className="w-full px-4 sm:px-0 flex items-center justify-center">
          {/* Left arrow */}
          <button
            aria-label="Previous"
            onClick={() => go(-1)}
            className="hidden sm:flex h-12 w-12 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm items-center justify-center shadow-lg hover:bg-white dark:hover:bg-white/20 transition-colors mr-4"
          >
            <span className="text-2xl text-zinc-900 dark:text-white">‹</span>
          </button>

          {/* Carousel cards container */}
          <div className="relative w-full h-96 flex items-center justify-center">
            {renderCard(leftIdx, "left")}
            {renderCard(centerIdx, "center")}
            {renderCard(rightIdx, "right")}
          </div>

          {/* Right arrow */}
          <button
            aria-label="Next"
            onClick={() => go(1)}
            className="hidden sm:flex h-12 w-12 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm items-center justify-center shadow-lg hover:bg-white dark:hover:bg-white/20 transition-colors ml-4"
          >
            <span className="text-2xl text-zinc-900 dark:text-white">›</span>
          </button>
        </div>

        {/* Dots / Page indicator */}
        <div className="flex items-center justify-center gap-2">
          {CATEGORIES.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`transition-all duration-300 rounded-full ${
                i === index
                  ? "w-8 h-2 bg-zinc-800 dark:bg-zinc-200"
                  : "w-2 h-2 bg-zinc-400 dark:bg-zinc-600 hover:bg-zinc-600 dark:hover:bg-zinc-400"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Mobile navigation */}
        <div className="sm:hidden flex gap-2 w-full px-4">
          <button
            onClick={() => go(-1)}
            className="flex-1 h-10 rounded-lg bg-zinc-800 dark:bg-white/10 text-white font-medium hover:bg-zinc-700 transition-colors"
          >
            Previous
          </button>
          <button
            onClick={() => go(1)}
            className="flex-1 h-10 rounded-lg bg-zinc-800 dark:bg-white/10 text-white font-medium hover:bg-zinc-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
