"use client";

import { useEffect, useRef } from "react";

const themePresets = [
  { name: "Elegant Luxury", colors: ["#F8E8E8", "#D4A59A", "#9B8A89"] },
  { name: "Neo Brutalism", colors: ["#FF0000", "#0000FF", "#FFFF00"] },
  { name: "Cyberpunk", colors: ["#FF00FF", "#00FFFF", "#FF1493"] },
  { name: "Caffeine", colors: ["#6B4423", "#D2691E", "#8B4513"] },
  { name: "Minimal", colors: ["#E8E8E8", "#D0D0D0", "#B8B8B8"] },
  { name: "Solar Dusk", colors: ["#FF6B35", "#F7931E", "#FDC830"] },
  { name: "Pastel Dreams", colors: ["#B8B8FF", "#E0BBE4", "#FFDFD3"] },
  { name: "Ocean Breeze", colors: ["#00CED1", "#5F9EA0", "#48D1CC"] },
  { name: "Candyland", colors: ["#FFB6C1", "#FFE4E1", "#FFC0CB"] },
  { name: "Clean Slate", colors: ["#B0C4DE", "#D3D3D3", "#E6E6FA"] },
  { name: "Retro Arcade", colors: ["#FF1493", "#FF4500", "#FFD700"] },
  { name: "Northern Lights", colors: ["#00FF7F", "#00CED1", "#9370DB"] },
  { name: "Starry Night", colors: ["#191970", "#4169E1", "#6495ED"] },
  { name: "Darkmatter", colors: ["#2F4F4F", "#696969", "#808080"] },
  { name: "Midnight Bloom", colors: ["#8B008B", "#9370DB", "#BA55D3"] },
];

export default function ThemePresetsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    // Duplicate items for seamless loop
    const scrollerContent = Array.from(scroller.children);
    scrollerContent.forEach((item) => {
      const duplicate = item.cloneNode(true);
      scroller.appendChild(duplicate);
    });
  }, []);

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm border border-border shadow-xs mb-6">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Theme Presets
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Elevate Your Design Instantly
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Apply theme presets with a single click. See how each option enhances the look.
          </p>
        </div>
      </div>

      {/* Scrolling Theme Tags - Masonry Style */}
      <div className="relative">
        {/* Row 1 - Right to Left */}
        <div className="mb-4 overflow-hidden">
          <div
            ref={scrollerRef}
            className="flex gap-3 animate-scroll-rtl"
            style={{
              width: "max-content",
            }}
          >
            {themePresets.slice(0, 5).map((preset, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border hover:shadow-lg hover:scale-105 transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                <div className="flex gap-1.5">
                  {preset.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-card shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Left to Right */}
        <div className="mb-4 overflow-hidden">
          <div
            className="flex gap-3 animate-scroll-ltr"
            style={{
              width: "max-content",
            }}
          >
            {themePresets.slice(5, 10).map((preset, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border hover:shadow-lg hover:scale-105 transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                <div className="flex gap-1.5">
                  {preset.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-card shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Right to Left */}
        <div className="overflow-hidden">
          <div
            className="flex gap-3 animate-scroll-rtl"
            style={{
              width: "max-content",
            }}
          >
            {themePresets.slice(10, 15).map((preset, index) => (
              <div
                key={index}
                className="flex items-center gap-3 px-5 py-3 bg-card/50 backdrop-blur-sm rounded-full border border-border hover:shadow-lg hover:scale-105 transition-all cursor-pointer whitespace-nowrap shadow-xs"
              >
                <div className="flex gap-1.5">
                  {preset.colors.map((color, i) => (
                    <div
                      key={i}
                      className="w-5 h-5 rounded-full border-2 border-card shadow-sm"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{preset.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
