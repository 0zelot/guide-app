export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,
  
    // Target: https://go.nuxtjs.dev/config-target
    target: "static",
    mode: "universal",
  
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Wikipedia mcMMO | NightLand.pl",
        htmlAttrs: {
            lang: "pl"
        },
        meta: [
            { charset: "utf-8" },
            { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { hid: "description", name: "description", content: "Obszerna baza wiedzy na temat mcMMO." },
            { hid: "robots", name: "robots", content: "index,follow" }
        ],
        link: [
            { rel: "icon", type: "image/x-icon", href: "https://i.imgur.com/kVLRUOs.png" }
        ]
    },
  
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        { src: "~assets/css/main.css", lang: "css" },
        { src: "~assets/css/sidebar.css", lang: "css" }
    ],
  
    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],
  
    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,
  
    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        "@nuxt/typescript-build"
    ],
  
    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        "bootstrap-vue/nuxt",
        "@nuxtjs/markdownit"
    ],

    markdownit: {
        preset: "default",
        linkify: true,
        breaks: true,
        use: [
            "markdown-it-div",
            "markdown-it-attrs"
        ]
    },
    
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: true
    }
}
  