/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
        extend: {

            keyframes: {
                slideIn: {
                    '0%': { opacity: '0', transform: 'translateX(100%)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
            },

            animation: {
                'slide-in': 'slideIn 0.8s ease-out forwards',
            },
        },
    },
    plugins: [],
}
// ! This doesnt work any way so using style.css for animations