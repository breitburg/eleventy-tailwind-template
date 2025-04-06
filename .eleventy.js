import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";
import cssnano from "cssnano";
import { minify } from "terser";
import htmlmin from "html-minifier-terser";

export default function (eleventyConfig) {
    // Copy public files to the output directory
    eleventyConfig.addPassthroughCopy({ "src/public": "/" });

    // Watch for changes in CSS and public files and recompile
    eleventyConfig.addWatchTarget("./src/css/**/*.css");
    eleventyConfig.addWatchTarget("./src/public/**/*");

    // Process CSS using PostCSS with Tailwind and minification
    eleventyConfig.addBundle("css", {
        transforms: [
            async function (content) {
                return postcss([tailwindcss, cssnano])
                    .process(content, { from: this.page.inputPath, to: null })
                    .then(result => result.css);
            }
        ]
    });

    // Minify HTML output
    eleventyConfig.addTransform("htmlmin", function (content) {
        if (!(this.page.outputPath || "").endsWith(".html")) {
            return content;
        }

        return htmlmin.minify(content, {
            useShortDoctype: true,
            removeComments: true,
            collapseWhitespace: true,
        });
    });

    // Process JS with minification
    eleventyConfig.addBundle("js", {
        transforms: [
            async function (content) {
                const result = await minify(content);
                return result.code;
            }
        ]
    });

    return {
        dir: { input: "src", output: "_site" },
    };
};