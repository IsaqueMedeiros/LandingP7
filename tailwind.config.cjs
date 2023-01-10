/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '300px': '300px',
      },
      maxWidth: {
        '1/2': '100%',
      },
      margin: {
        '20px': '20px',
      },
      // Header_dobra_2
      maxWidth: {
        '220px': '220px',
      },
      margin: {
        '480px': '480px',
      },
      maxWidth: {
        '120px': '120px',
      },
      maxWidth: {
        '110px': '110px',
      },
      maxWidth: {
        '350px': '350px',
      },
      maxWidth: {
        '340px': '340px',
      },
      maxWidth: {
        '800px': '800px',
      },
      maxWidth: {
        '2560px': '2560px ',
      },
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
