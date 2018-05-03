let pngquant = require('imagemin-pngquant'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    watchify = require('watchify');

module.exports = {
  development: {
    paths: {
      html: {
        src: './src/**/*.html',
        dst: './www'
      },
      styles: {
        src: './src/app/scss/**/*.scss',
        dst: './www/css'
      },
      fonts: {
        materialIconsSrc: './node_modules/material-design-icons/iconfont/MaterialIcons-Regular.*',
        dst: './www/fonts'
      },
      js: {
        all: './src/app/js/**/*.js',
        src: './src/app/js/index.js',
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
        src: './src/app/scss/**/*.scss',
        dst: './dist/css'
      },
      fonts: {
        materialIconsSrc: './node_modules/material-design-icons-iconfont/fonts/MaterialIcons-Regular.*',
        dst: './dist/fonts'
      },
      js: {
        all: './src/app/js/**/*.js',
        src: './src/app/js/index.js',
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
