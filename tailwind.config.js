module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  prefix: 't-',
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [
    './public/**/*.html',
    './src/**/*.vue'
  ],
}
