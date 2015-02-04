# es6-test

A barebones ES6 Node.js app using [Express 4](http://expressjs.com/).

```sh
$ npm install
$ npm start
```

Your app should now be running on [localhost:5000](http://localhost:5000/).

### URLs

Try the following:

- [http://localhost:5000](http://localhost:5000/) - hello world
- [http://localhost:5000/math/2](http://localhost:5000/math/2) - try some math
- [http://localhost:5000/crash](http://localhost:5000/crash) - force a crash
- [http://localhost:5000/slow](http://localhost:5000/slow) - arbitrary amount of slowness

### Branches

There are several branches each exploring a different way to transpile ES6 code.

- `6to5` - basic pre-compile
- `6to5-source-maps` - same as `6to5` but with (semi) working source maps
- `6to5-register` - uses the `require('6to5/register')` functionality
- `6to5-node` - uses the `6to5-node` binary
