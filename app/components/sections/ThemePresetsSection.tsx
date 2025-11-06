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

      {/* Preview Card */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 mt-20">
        <div className="bg-card rounded-[1.25rem] shadow-2xl border border-border overflow-hidden">
          {/* Header with Account Selector */}
          <div className="flex items-center justify-center px-4 py-3 border-b border-border">
            <button className="h-9 w-full max-w-xs justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-xs flex items-center gap-2">
              <span className="flex items-center gap-2">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" fill="currentColor"/>
                </svg>
                <span className="text-sm">Alicia Koch</span>
              </span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 opacity-50">
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>

          <div className="border-b border-border"/>

          {/* Inbox Header */}
          <div className="flex items-center px-4 py-3 justify-between">
            <h1 className="text-xl font-bold">Inbox</h1>
            <div className="inline-flex h-9 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xs font-medium bg-background text-foreground shadow-xs">
                All mail
              </button>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-xs font-medium">
                Unread
              </button>
            </div>
          </div>

          <div className="border-b border-border"/>

          {/* Email List */}
          <div className="p-4 space-y-2 max-h-[500px] overflow-y-auto">
            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all bg-muted w-full hover:bg-accent">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="font-semibold">William Smith</div>
                  <div className="ml-auto text-xs">about 2 years ago</div>
                </div>
                <div className="text-xs font-medium">Meeting Tomorrow</div>
              </div>
              <div className="text-muted-foreground line-clamp-2 text-xs">
                Hi, let's have a meeting tomorrow to discuss the project. I've been reviewing the project details and have some ideas I'd like to share. It's crucial that we align on our next steps to ensure the project's success.
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  meeting
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground shadow">
                  work
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  important
                </div>
              </div>
            </button>

            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all w-full hover:bg-accent">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="font-semibold">Alice Smith</div>
                  <div className="ml-auto text-xs text-muted-foreground">about 2 years ago</div>
                </div>
                <div className="text-xs font-medium">Re: Project Update</div>
              </div>
              <div className="text-muted-foreground line-clamp-2 text-xs">
                Thank you for the project update. It looks great! I've gone through the report, and the progress is impressive. The team has done a fantastic job, and I appreciate the hard work everyone has put in.
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground shadow">
                  work
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  important
                </div>
              </div>
            </button>

            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all w-full hover:bg-accent">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="font-semibold">Bob Johnson</div>
                  <div className="ml-auto text-xs text-muted-foreground">over 2 years ago</div>
                </div>
                <div className="text-xs font-medium">Weekend Plans</div>
              </div>
              <div className="text-muted-foreground line-clamp-2 text-xs">
                Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold text-foreground">
                  personal
                </div>
              </div>
            </button>

            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all w-full hover:bg-accent">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Emily Davis</div>
                    <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">over 2 years ago</div>
                </div>
                <div className="text-xs font-medium">Re: Question about Budget</div>
              </div>
              <div className="text-muted-foreground line-clamp-2 text-xs">
                I have a question about the budget for the upcoming project. It seems like there's a discrepancy in the allocation of resources.
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground shadow">
                  work
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  budget
                </div>
              </div>
            </button>

            <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all w-full hover:bg-accent">
              <div className="flex w-full flex-col gap-1">
                <div className="flex items-center">
                  <div className="flex items-center gap-2">
                    <div className="font-semibold">Michael Wilson</div>
                    <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
                  </div>
                  <div className="ml-auto text-xs text-muted-foreground">over 2 years ago</div>
                </div>
                <div className="text-xs font-medium">Important Announcement</div>
              </div>
              <div className="text-muted-foreground line-clamp-2 text-xs">
                I have an important announcement to make during our team meeting. It pertains to a strategic shift in our approach to the upcoming product launch.
              </div>
              <div className="flex items-center gap-2">
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  meeting
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-primary text-primary-foreground shadow">
                  work
                </div>
                <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold bg-secondary text-secondary-foreground">
                  important
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
