const withNextra = require('nextra')('nextra-theme-blog', './theme.config.js')
module.exports = withNextra({
 async redirects() {
    return [
      {
        source: ':slug',
        destination: 'https://kunalbotla.com/:slug',
        permanent: false,
      },
      {
        source: '/zoom',
        destination: 'https://us02web.zoom.us/j/2536919608?pwd=cG9XeWc1cFI5Z29hZ2x2QVVIbk9KZz09',
        permanent: false,
      },
      {
        source: '/tac-zoom',
        destination: 'https://us02web.zoom.us/j/2536919608?pwd=cG9XeWc1cFI5Z29hZ2x2QVVIbk9KZz09',
        permanent: false,
      },
    ]
  }, 
}
)
