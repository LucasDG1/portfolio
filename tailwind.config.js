/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.antlers.html",
        "./resources/**/*.antlers.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.vue",
        "./content/**/*.md",
    ],


    theme: {
        extend: {
            colors: {
                black: "#000000",
                white: "#ffffff",
            },
            backgroundImage: {
                background: "url('/assets/nightsky.png')",
                second: "url('/assets/who-am-i-bg.jpg')",
                spin: "url('/assets/yingandyang.png')",
                user: "url(('/assets/user-test.jpg'))",
                php: "url(('/assets/php.png'))",
                css: "url(('/assets/css3.webp'))",
                html: "url(('/assets/html5.png'))",
                me: "url(('/assets/me-port.png'))"
            },
        },
    },

    plugins: [require("@tailwindcss/typography")],
};
