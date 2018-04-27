# Progressive Web Application scaffold
---

> A scaffold for building progressive web apps out of the box.

## Run

```shell
# Install dependencies
npm install
```
###Production
```shell
gulp --env production build
cd dist
# Python 2
python -m SimpleHTTPServer 8000

# Python 3
python3 -m http.server 8000
```
Then, open [http://localhost:8000](http://localhost:8000/)

###Development
```shell
gulp serve
```