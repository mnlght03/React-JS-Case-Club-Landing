/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: '#0A0F09',
            white: '#FFFFFF',
            blue: '#2E6AF6',
            light_black: '#171717',
            green: '#73D17E',
            grey: '#1F222C',
            beige: '#F7F7F7',
            orange: '#EF7F2B',
        },
        extend: {},
    },
    plugins: [
        require('tailwind-scrollbar')({ nocompatible: true })
    ],
    purge: {
        safelist: [
            'text-white',
            'text-black',
            'text-blue',
            'bg-white',
            'bg-blue',
            'bg-black',
            'bg-transparent',
            'border-white',
            'border-blue',
            'border-black',
            'xl:text-7xl',
            'text-3xl',
            'xl:text-6xl',
            'text-xl',
            'xl:text-[42px]',
            'text-lg',
            'xl:text-3xl',
        ],
    },
};
