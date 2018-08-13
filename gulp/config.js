let pngquant = require('imagemin-pngquant'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    watchify = require('watchify'),
    vueify = require ('vueify'),
    hmr = require('browserify-hmr'),
    babelify = require('babelify'),
    envify = require('envify');

module.exports = {
  development: {
    paths: {
      html: {
        src: './src/**/*.html',
        dst: './www'
      },
      styles: {
        src: './src/app/scss/app.scss',
        watchSrc: './src/app/scss/**/*.scss',
        dst: './www/css'
      },
      fonts: {
        materialIconsSrc: './node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.*',
        dst: './www/fonts'
      },
      js: {
        all: './src/app/**/*.js',
        src: './src/app/index.js',
        dst: './www/js'
      },
      manifest: {
        src: './src/manifest.json',
        dst: './www'
      },
      sw: {
        src: './src/service-worker.js',
        dst: './www'
      },
      img: {
        src: './src/assets/img/**/*.{gif,jpg,jpeg,png,svg}',
        dst: './www/assets/img'
      }
    },
    plugins: {
      browserify: {
        plugin: [hmr, watchify],
        transform: [vueify, babelify],
        cache: {},
        packageCache: {},
        debug: true
      },
      browserifySw: {
        transform: [babelify],
        cache: {},
        packageCache: {},
        debug: true
      },
      sass: {},
      imagemin: [
        pngquant(),
        imageminMozjpeg({
          progressive: true,
          quality: 90
        })
      ]
    }
  },
  production: {
    paths: {
      html: {
        src: './src/**/*.html',
        dst: './dist'
      },
      styles: {
        src: './src/app/scss/app.scss',
        dst: './dist/css'
      },
      fonts: {
        materialIconsSrc: './node_modules/material-design-icons-iconfont/dist/fonts/MaterialIcons-Regular.*',
        dst: './dist/fonts'
      },
      js: {
        all: './src/app/**/*.js',
        src: './src/app/index.js',
        dst: './dist/js'
      },
      manifest: {
        src: './src/manifest.json',
        dst: './dist'
      },
      sw: {
        src: './src/service-worker.js',
        dst: './dist'
      },
      img: {
        src: './src/assets/img/**/*.{gif,jpg,jpeg,png,svg}',
        dst: './dist/assets/img'
      }
    },
    plugins: {
      browserify: {
        transform: [vueify, babelify, [envify, { NODE_ENV: 'production', global: true }]],
        cache: {},
        packageCache: {},
        debug: false
      },
      uglify: {
        mangle: true
      },
      sass: {
        outputStyle: 'compressed'
      },
      imagemin: [
        pngquant(),
        imageminMozjpeg({
          progressive: true,
          quality: 90
        })
      ]
    }
  }
};
