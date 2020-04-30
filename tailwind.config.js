/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        'green-primary': '#3b8070',
        'gray-primary': '#35495e'
      },
      borderWidth: {
        '14': '14px',
      },
    },
    container: {
      padding: '1rem'
    },
  },
  variants: {},
  plugins: []
}
