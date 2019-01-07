# array-object-deep-copy

> Deep copy objects and arrays
Sometimes you only care about making a proper deep copy of an array or object. If you want something which covers everything, use [this](https://lodash.com/docs/4.17.11#cloneDeep)

## Install

```
$ npm install array-object-deep-copy
```

## Usage

```js
const arrObjDeepCopy = require('array-object-deep-copy');

const originalArray = [
  { lang: "JavaScript" },
  { lang: "Elm" },
  { lang: "Rust" }
];
const newArray = arrObjDeepCopy(originalArray);

newArray[1].lang = "Elixir"
//=> 'Elixir'

originalArray[1].lang
//=> 'Elm'
```

## License

MIT © [Carl Mungazi](https://carlmungazi.com)