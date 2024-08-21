/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
      extend: {
        colors: {
            white: "#ffffff",
            black: "#1E1E1E",
            light: "#EAE3E8",
            primary: "#682F76",
            secondary: "#C85859",
            contrasted: "#CD00FF",
            dark: {
                '50': '#f6f6f6',
                '100': '#e7e7e7',
                '200': '#d1d1d1',
                '300': '#b0b0b0',
                '400': '#888888',
                '500': '#6d6d6d',
                '600': '#5d5d5d',
                '700': '#4f4f4f',
                '800': '#454545',
                '900': '#3d3d3d',
                '950': '#0c0c0c',
            },
        },
        aspectRatio: {
            '3/2': '3 / 2',  // Add your custom aspect ratio here
            '4/3': '4 / 3',  // Another example
            '3/4': '3 / 4',  // Another example
        },
    },
  },
  plugins: [],
}

