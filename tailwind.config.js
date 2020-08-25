const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', ...defaultTheme.fontFamily.sans],
                mono: ['Menlo', ...defaultTheme.fontFamily.mono],
            },
        },
        typography: (theme) => ({
            dark: {
                css: {
                    color: theme('colors.gray.300'),
                    a: {
                        color: theme('colors.green.500'),
                        '&:hover': {
                            color: theme('colors.green.500'),
                        },
                    },

                    h1: {
                        color: theme('colors.gray.300'),
                    },
                    h2: {
                        color: theme('colors.gray.300'),
                    },
                    h3: {
                        color: theme('colors.gray.300'),
                    },
                    h4: {
                        color: theme('colors.gray.300'),
                    },
                    h5: {
                        color: theme('colors.gray.300'),
                    },
                    h6: {
                        color: theme('colors.gray.300'),
                    },

                    strong: {
                        color: theme('colors.gray.300'),
                    },

                    code: {
                        color: theme('colors.gray.300'),
                    },

                    figcaption: {
                        color: theme('colors.gray.500'),
                    },
                },
            },
        }),
    },
    variants: {
        backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
        borderColor: ['dark', 'dark-disabled', 'dark-focus', 'dark-focus-within'],
        textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
        visibilty: ['dark', 'dark-hover', 'dark-group-hover', 'dark-focus', 'dark-focus-within', 'dark-active']
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
        whitelist: ['mode-dark']
    },
    plugins: [
        require('@tailwindcss/ui'),
        require('@tailwindcss/typography'),
        require('tailwindcss-dark-mode')()
    ],
};
