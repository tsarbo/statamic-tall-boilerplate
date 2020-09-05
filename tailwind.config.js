const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    dark: 'class', // or 'media'
    experimental: {
        darkModeVariant: true,
    },
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
                mono: ['Menlo', ...defaultTheme.fontFamily.mono],
            },
        }
    },
    purge: {
        content: [
            './app/**/*.php',
            './resources/**/*.html',
            './resources/**/*.js',
            './resources/**/*.jsx',
            './resources/**/*.ts',
            './resources/**/*.tsx',
            './resources/**/*.php',
            './resources/**/*.vue',
            './resources/**/*.twig',
        ],
        options: {
            defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
            whitelistPatterns: [/-active$/, /-enter$/, /-leave-to$/, /show$/],
        },
        whitelist: ['dark']
    },
    variants: {
        backgroundColor: ['dark', 'responsive', 'hover', 'focus'],
        borderColor: ['dark', 'responsive', 'hover', 'focus'],
        textColor: ['dark', 'responsive', 'hover', 'focus'],
        divideColor: ['dark', 'responsive'],
        placeholderColor: ['dark', 'responsive', 'focus'],
        gradientColorStops: ['dark', 'responsive', 'hover', 'focus']
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography')
    ],
};
