export default ({
    ssr: false,
    modules: [
        '@nuxtjs/tailwindcss', 
        '@nuxt/content', 
        'nuxt-icon', 
        '@nuxtjs/color-mode',
        '@nuxt/image-edge',
    ],
    build: {
        transpile: ['gsap'],
    },
    content: {
        highlight: {
            theme: 'nord',
            preload: ['js', 'css', 'html', 'md', 'ts', 'tsx', 'vue', 'python', 'ruby', 'java'],
        }
    },
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'dark',
    },
    css: ['/assets/css/main.css'],
})
