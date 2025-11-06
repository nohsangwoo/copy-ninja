element.style {
    --radius: 1.25rem;
    --font-sans: Plus Jakarta Sans, sans-serif;
    --font-serif: Lora, serif;
    --font-mono: Roboto Mono, monospace;
    --shadow-opacity: 0.18;
    --shadow-blur: 10px;
    --shadow-spread: 4px;
    --shadow-offset-x: 2px;
    --shadow-offset-y: 2px;
    --letter-spacing: 0em;
    --spacing: 0.25rem;
    --background: hsl(20 5.8824% 90%);
    --foreground: hsl(217.2414 32.5843% 17.4510%);
    --card: hsl(60 4.7619% 95.8824%);
    --card-foreground: hsl(217.2414 32.5843% 17.4510%);
    --popover: hsl(60 4.7619% 95.8824%);
    --popover-foreground: hsl(217.2414 32.5843% 17.4510%);
    --primary: hsl(238.7324 83.5294% 66.6667%);
    --primary-foreground: hsl(0 0% 100%);
    --secondary: hsl(24.0000 5.7471% 82.9412%);
    --secondary-foreground: hsl(215 13.7931% 34.1176%);
    --muted: hsl(20 5.8824% 90%);
    --muted-foreground: hsl(220 8.9362% 46.0784%);
    --accent: hsl(292.5000 44.4444% 92.9412%);
    --accent-foreground: hsl(216.9231 19.1176% 26.6667%);
    --destructive: hsl(0 84.2365% 60.1961%);
    --destructive-foreground: hsl(0 0% 100%);
    --border: hsl(24.0000 5.7471% 82.9412%);
    --input: hsl(24.0000 5.7471% 82.9412%);
    --ring: hsl(238.7324 83.5294% 66.6667%);
    --chart-1: hsl(238.7324 83.5294% 66.6667%);
    --chart-2: hsl(243.3962 75.3555% 58.6275%);
    --chart-3: hsl(244.5205 57.9365% 50.5882%);
    --chart-4: hsl(243.6522 54.5024% 41.3725%);
    --chart-5: hsl(242.1687 47.4286% 34.3137%);
    --sidebar: hsl(24.0000 5.7471% 82.9412%);
    --sidebar-foreground: hsl(217.2414 32.5843% 17.4510%);
    --sidebar-primary: hsl(238.7324 83.5294% 66.6667%);
    --sidebar-primary-foreground: hsl(0 0% 100%);
    --sidebar-accent: hsl(292.5000 44.4444% 92.9412%);
    --sidebar-accent-foreground: hsl(216.9231 19.1176% 26.6667%);
    --sidebar-border: hsl(24.0000 5.7471% 82.9412%);
    --sidebar-ring: hsl(238.7324 83.5294% 66.6667%);
    --shadow-color: hsl(240 4% 60%);
    --shadow-2xs: 2px 2px 10px 4px hsl(240 4% 60% / 0.09);
    --shadow-xs: 2px 2px 10px 4px hsl(240 4% 60% / 0.09);
    --shadow-2xl: 2px 2px 10px 4px hsl(240 4% 60% / 0.45);
    --shadow-sm: 2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18);
    --shadow: 2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 1px 2px 3px hsl(240 4% 60% / 0.18);
    --shadow-md: 2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 2px 4px 3px hsl(240 4% 60% / 0.18);
    --shadow-lg: 2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 4px 6px 3px hsl(240 4% 60% / 0.18);
    --shadow-xl: 2px 2px 10px 4px hsl(240 4% 60% / 0.18), 2px 8px 10px 3px hsl(240 4% 60% / 0.18);
}
* {
    --lightningcss-light: initial;
    --lightningcss-dark: ;
    color-scheme: light dark;
    border-color: var(--color-border);
}
html, :host {
    -webkit-text-size-adjust: 100%;
    -moz-tab-size: 4;
    tab-size: 4;
    line-height: 1.5;
    font-family: var(--default-font-family);
    font-feature-settings: var(--default-font-feature-settings, normal);
    font-variation-settings: var(--default-font-variation-settings, normal);
    -webkit-tap-highlight-color: transparent;
}
@supports (color:color-mix(in lab, red, red)) {
    * {
        outline-color: 
 color-mix(in oklab, var(--ring) 50%, transparent);
    }
}
* {
    border-color: var(--border);
    outline-color: var(--ring);
}
*, :after, :before {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
}
@supports (color:lab(0% 0 0)) {
    :root, :host {
        --color-red-50: lab(96.5005% 4.18508 1.52328);
        --color-red-300: lab(76.5514% 36.422 15.5335);
        --color-red-400: lab(63.7053% 60.745 31.3109);
        --color-red-500: lab(55.4814% 75.0732 48.8528);
        --color-red-600: lab(48.4493% 77.4328 61.5452);
        --color-yellow-500: lab(76.3898% 14.5258 98.4589);
        --color-green-400: lab(78.503% -64.9265 39.7492);
        --color-green-500: lab(70.5521% -66.5147 45.8073);
        --color-green-600: lab(59.0978% -58.6621 41.2579);
        --color-sky-400: lab(70.687% -23.6078 -45.9483);
        --color-blue-500: lab(54.1736% 13.3369 -74.6839);
        --color-blue-600: lab(44.0605% 29.0279 -86.0352);
    }
}
@supports (color:color(display-p3 0 0 0)) {
    :root, :host {
        --color-red-50: color(display-p3 .988669 .951204 .950419);
        --color-red-300: color(display-p3 .956922 .651886 .645122);
        --color-red-400: color(display-p3 .933534 .431676 .423491);
        --color-red-500: color(display-p3 .903738 .262579 .253307);
        --color-red-600: color(display-p3 .830323 .140383 .133196);
        --color-yellow-500: color(display-p3 .903651 .703062 .0745389);
        --color-green-400: color(display-p3 .399536 .862346 .49324);
        --color-green-500: color(display-p3 .308734 .774754 .374307);
        --color-green-600: color(display-p3 .243882 .640824 .294808);
        --color-sky-400: color(display-p3 .305975 .725011 .980173);
        --color-blue-500: color(display-p3 .266422 .491219 .988624);
        --color-blue-600: color(display-p3 .174493 .358974 .950247);
    }
}
:root, :host {
    --font-sans: var(--font-sans);
    --font-serif: var(--font-serif);
    --font-mono: var(--font-mono);
    --color-red-50: #fef2f2;
    --color-red-300: #ffa3a3;
    --color-red-400: #ff6568;
    --color-red-500: #fb2c36;
    --color-red-600: #e40014;
    --color-yellow-500: #edb200;
    --color-green-400: #05df72;
    --color-green-500: #00c758;
    --color-green-600: #00a544;
    --color-sky-400: #00bcfe;
    --color-blue-500: #3080ff;
    --color-blue-600: #155dfc;
    --color-black: #000;
    --color-white: #fff;
    --spacing: .25rem;
    --container-sm: 24rem;
    --container-md: 28rem;
    --container-lg: 32rem;
    --container-xl: 36rem;
    --container-2xl: 42rem;
    --container-3xl: 48rem;
    --container-4xl: 56rem;
    --container-5xl: 64rem;
    --container-7xl: 80rem;
    --text-xs: .75rem;
    --text-xs--line-height: calc(1 / .75);
    --text-sm: .875rem;
    --text-sm--line-height: calc(1.25 / .875);
    --text-base: 1rem;
    --text-base--line-height: calc(1.5 / 1);
    --text-lg: 1.125rem;
    --text-lg--line-height: calc(1.75 / 1.125);
    --text-xl: 1.25rem;
    --text-xl--line-height: calc(1.75 / 1.25);
    --text-2xl: 1.5rem;
    --text-2xl--line-height: calc(2 / 1.5);
    --text-3xl: 1.875rem;
    --text-3xl--line-height: calc(2.25 / 1.875);
    --text-4xl: 2.25rem;
    --text-4xl--line-height: calc(2.5 / 2.25);
    --text-5xl: 3rem;
    --text-5xl--line-height: 1;
    --text-6xl: 3.75rem;
    --text-6xl--line-height: 1;
    --font-weight-light: 300;
    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-semibold: 600;
    --font-weight-bold: 700;
    --font-weight-extrabold: 800;
    --tracking-tighter: calc(var(--letter-spacing) - .05em);
    --tracking-tight: calc(var(--letter-spacing) - .025em);
    --tracking-normal: var(--letter-spacing);
    --tracking-wide: calc(var(--letter-spacing) + .025em);
    --tracking-wider: calc(var(--letter-spacing) + .05em);
    --tracking-widest: calc(var(--letter-spacing) + .1em);
    --leading-tight: 1.25;
    --leading-snug: 1.375;
    --leading-relaxed: 1.625;
    --radius-sm: calc(var(--radius) - 4px);
    --radius-md: calc(var(--radius) - 2px);
    --radius-lg: var(--radius);
    --radius-xl: calc(var(--radius) + 4px);
    --radius-2xl: 1rem;
    --shadow-2xs: var(--shadow-2xs);
    --shadow-xs: var(--shadow-xs);
    --shadow-sm: var(--shadow-sm);
    --shadow-md: var(--shadow-md);
    --shadow-lg: var(--shadow-lg);
    --shadow-xl: var(--shadow-xl);
    --shadow-2xl: var(--shadow-2xl);
    --drop-shadow-lg: 0 4px 4px rgba(0, 0, 0, .15);
    --drop-shadow-2xl: 0 25px 25px rgba(0, 0, 0, .15);
    --ease-in: 
cubic-bezier(.4, 0, 1, 1);
    --ease-out: 
cubic-bezier(0, 0, .2, 1);
    --ease-in-out: 
cubic-bezier(.4, 0, .2, 1);
    --animate-spin: spin 1s 
linear infinite;
    --animate-ping: ping 1s 
cubic-bezier(0, 0, .2, 1) infinite;
    --animate-pulse: pulse 2s 
cubic-bezier(.4, 0, .6, 1) infinite;
    --animate-bounce: bounce 1s infinite;
    --blur-xs: 4px;
    --blur-sm: 8px;
    --blur-md: 12px;
    --blur-lg: 16px;
    --blur-xl: 24px;
    --blur-3xl: 64px;
    --aspect-video: 16 / 9;
    --default-transition-duration: .15s;
    --default-transition-timing-function: 
cubic-bezier(.4, 0, .2, 1);
    --default-font-family: var(--font-sans);
    --default-mono-font-family: var(--font-mono);
    --shadow: var(--shadow);
    --color-background: var(--background);
    --color-foreground: var(--foreground);
    --color-card: var(--card);
    --color-card-foreground: var(--card-foreground);
    --color-popover: var(--popover);
    --color-popover-foreground: var(--popover-foreground);
    --color-primary: var(--primary);
    --color-primary-foreground: var(--primary-foreground);
    --color-secondary: var(--secondary);
    --color-secondary-foreground: var(--secondary-foreground);
    --color-muted: var(--muted);
    --color-muted-foreground: var(--muted-foreground);
    --color-accent: var(--accent);
    --color-accent-foreground: var(--accent-foreground);
    --color-destructive: var(--destructive);
    --color-destructive-foreground: var(--destructive-foreground);
    --color-border: var(--border);
    --color-input: var(--input);
    --color-ring: var(--ring);
    --color-chart-1: var(--chart-1);
    --color-chart-2: var(--chart-2);
    --color-chart-3: var(--chart-3);
    --color-chart-4: var(--chart-4);
    --color-chart-5: var(--chart-5);
    --color-sidebar: var(--sidebar);
    --color-sidebar-foreground: var(--sidebar-foreground);
    --color-sidebar-primary: var(--sidebar-primary);
    --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
    --color-sidebar-accent: var(--sidebar-accent);
    --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
    --color-sidebar-border: var(--sidebar-border);
    --color-sidebar-ring: var(--sidebar-ring);
}
html[Attributes Style] {
    -webkit-locale: "en";
}
user agent stylesheet
:root {
    view-transition-name: root;
}
user agent stylesheet
html {
    display: block;
}
*, :after, :before {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
}
*, :after, :before {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
}
::backdrop {
    box-sizing: border-box;
    border: 0 solid;
    margin: 0;
    padding: 0;
}