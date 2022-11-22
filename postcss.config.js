module.exports = {
  plugins: [
    require('autoprefixer'),
    //minimizes the code
    require('cssnano')({
      preset: [
        'default', {
          discardComments: {
            //deletes the comments at production build
            removeAll: true
          }
        }
      ]
    })
  ]
};