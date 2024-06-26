/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        fontFamily: {
            'body': ['spacesans'],
            'heading': ['dm_mono']
        },
        extend: {
            keyframes: {
                slideDown: {
                    '0%': { height: '0' },
                    '100%': { height: 'var(--radix-accordion-content-height)' },
                },
                slideUp: {
                    '0%': { height: 'var(--radix-accordion-content-height)' },
                    '100%': { height: '0' },
                },
            },
            animation: {
                slideDown: 'slideDown 300ms ease-out',
                slideUp: 'slideUp 300ms ease-out',
            },
        },
    },
    plugins: [],
}

