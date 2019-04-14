module.exports = {
  plugins: {
    'autoprefixer': {
      browsers: ['Android >= 4.0', 'iOS >= 7']
    },
    postcss: [require('postcss-px2rem')({ 'remUnit': 75, 'baseDpr': 2 })]
  }
}
