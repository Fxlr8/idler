/** @type {import('tailwindcss').Config}*/

const spacing = {}
const step = 2 //px
for (let i = 0; i < 201; i++) {
  spacing[i] = i * step + 'px'
}
spacing['1px'] = '1px'

const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    spacing,

    extend: {},
  },

  plugins: [],
};

module.exports = config;
