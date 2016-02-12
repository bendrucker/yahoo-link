# yahoo-link [![Build Status](https://travis-ci.org/bendrucker/yahoo-link.svg?branch=master)](https://travis-ci.org/bendrucker/yahoo-link)

> Generate a Yahoo mail compose link, mailto-style


## Install

```
$ npm install --save yahoo-link
```


## Usage

```js
var yahooLink = require('mailto-link')

yahooLink({to: 'bvdrucker@gmail.com', subject: 'Nice lib'})
//=> http://compose.mail.yahoo.com/?subject=Nice%20lib&to=bvdrucker%40gmail.com
```

## API

#### `yahooLink(options)` -> `string`

##### options

*Required*  
Type: `object`

###### to / cc / bcc

Type: `string` / `array[string]`

List of emails to send to.

###### subject

Type: `string`

The email subject.

###### body

Type: `string`

The email body.


## License

MIT © [Ben Drucker](http://bendrucker.me)
