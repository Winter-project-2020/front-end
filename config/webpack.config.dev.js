{
    test: /\.(js|jsx)$/,
    include: paths.appSrc,
    loader: require.resolve('babel-loader'),
    options: {
      plugins: ['react-hot-loader/babel'],
      // This is a feature of `babel-loader` for webpack (not Babel itself).
      // It enables caching results in ./node_modules/.cache/babel-loader/
      // directory for faster rebuilds.
      cacheDirectory: true,
    },
  },

// entry : app 의 진입점, 리액트 앱이 있는 위치와 번틀링 프로세스가 시작되는 지점이다.
  entry: [
    require.resolve('react-dev-utils/webpackHotDevClient'),
    require.resolve('./polyfills'),
    require.resolve('react-error-overlay'),
    'react-hot-loader/patch',
    paths.appIndexJs,
  ],