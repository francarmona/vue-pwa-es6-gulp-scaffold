# Vue Progressive Web Application scaffold

> A Vue scaffold for building progressive web apps out of the box.

## Out of the box

* Vue.js 2.
* Offline first web app.
* Build with Gulp.
* Linting.
* Image optimization.
* Hot reloading (HMR).
* Fully responsive.
* Add to home screen feature (manifest.json).
* Heroku deployment.

## Run
```shell
# Install dependencies
npm install
```
##Production
```shell
# Build for production
gulp --env production build
cd dist
# Python 2
python -m SimpleHTTPServer 8000

# Python 3
python3 -m http.server 8000
```
Then, open [http://localhost:8000](http://localhost:8000/)

##Development
```shell
# Serve with hot reload at localhost:3000
gulp serve
```
