// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import fonts from "./fonts";

import mdx from "@astrojs/mdx";

import lenis from "astro-lenis";

// https://astro.build/config
export default defineConfig({
    site: "https://hackthewinter.dev",
    integrations: [react(), mdx(), lenis()],
    vite: {
        plugins: [tailwindcss()],
    },
    experimental: {
        fonts,
    },
});