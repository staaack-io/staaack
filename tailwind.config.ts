import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontSize: {
                sm: '0.8rem',
                base: '1rem',
                xl: '1.25rem',
                '2xl': '1.563rem',
                '3xl': '1.953rem',
                '4xl': '2.441rem',
                '5xl': '3.052rem',
                '6xl': '3.75rem'
            },
            scale: {
                '102': '1.02',
            },
            colors: {
                'cs-yellow-light': '#FEAE07',
                'cs-pink-light': '#FE05C2',
                'cs-red-light': '#FF1378',
                'cs-purple-1-light': '#C600B0',
                'cs-purple-2-light': '#54A4FF',
                'cs-blue-light': '#29D9FF',
                'cs-green-light': '#A2FFAE',
                'cs-yellow-dark': '#FF4D7B',
                'cs-pink-dark': '#CD06BC',
                'cs-red-dark': '#9D00A4',
                'cs-purple-1-dark': '#6711C5',
                'cs-purple-2-dark': '#672FD0',
                'cs-blue-dark': '#5267FF',
                'cs-green-dark': '#13CEF5',
            }
        }
    },
    plugins: [],
}
export default config
