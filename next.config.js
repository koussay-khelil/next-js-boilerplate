module.exports = {
  publicRuntimeConfig: {
    localeSubpaths: typeof process.env.LOCALE_SUBPATHS === 'string' ? process.env.LOCALE_SUBPATHS : 'all',
  },
};
module.exports = {
  pageExtensions: ['mdx', 'jsx', 'js'],
};
