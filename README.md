# Safe JSON parsing/stringifying using promises

[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

This tiny module provides a safe and modern way to parse or stringify JSON
that uses type checking and promises.

I wrote this mini-module to more easily handle JSON within my projects.

## Install & usage

Install it using npm:

```bash
npm install json-updated
```

You can use it anywhere you'd normally use the built-in `JSON` methods:

```js
const updatedJSON = require('json-updated')

// Stringify an object:
updatedJSON.stringify({ an: 'object' }).then(str => {
  console.log(str)
}).catch(err => {
  console.log(err)
})

// Parse a string:
updatedJSON.parse('{ "some": "string" }').then(obj => {
  console.log(obj)
}).catch(err => {
  console.log(err)
})
```

### License

Copyright 2016 [Michiel van der Velde](http://www.michielvdvelde.nl).

This software is licensed under the [MIT License](LICENSE).
