export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card rounded-full text-sm border border-border shadow-xs">
            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            Visual Theme Editor
          </div>

          <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
            Design Your <br />
            <span className="italic font-serif">Perfect</span>{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
                shadcn/ui
              </span>
            </span>
            <br />
            Theme
          </h1>

          <p className="text-lg text-muted-foreground max-w-lg">
            Customize colors, typography, and layouts with a real-time preview. No signup required.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all shadow-md hover:shadow-lg font-medium flex items-center justify-center gap-2">
              Start Customizing
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <button className="px-6 py-3 bg-secondary hover:bg-secondary/80 rounded-xl transition-colors font-medium border border-border">
              View Examples
            </button>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Real-time Preview</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Export to Tailwind</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>Beautiful Presets</span>
            </div>
          </div>
        </div>

        {/* Right Preview Card */}
        <div className="relative">
          <div className="bg-card rounded-[1.25rem] shadow-2xl border border-border overflow-hidden">
            {/* macOS Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>

            <div className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">Color Palette</h3>
                <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>

              <div className="bg-gradient-to-r from-primary via-chart-2 to-chart-3 rounded-xl h-24"></div>

              <div className="grid grid-cols-5 gap-2 text-xs text-center text-muted-foreground">
                <div>Primary</div>
                <div>Secondary</div>
                <div>Accent</div>
                <div>Muted</div>
                <div>Background</div>
              </div>

              <div>
                <h4 className="font-medium mb-3 text-sm">Preview</h4>
                <div className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <button className="px-4 py-2 bg-card border border-border rounded-lg text-sm flex items-center gap-2 hover:bg-secondary transition-colors shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    Copy Code
                  </button>
                  <div className="px-4 py-2 bg-card border border-border rounded-lg text-sm flex items-center gap-2 shadow-xs">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    oklch, hsl, rgb, hex
                  </div>
                </div>

                <div className="mt-3 p-4 bg-card border border-border rounded-lg shadow-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-semibold">
                      UI
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="h-2 bg-secondary rounded-full w-3/4"></div>
                      <div className="h-2 bg-secondary rounded-full w-1/2"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
