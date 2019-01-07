# simple-deep-copy

> Deep copy objects and arrays

Make a simple deep copy of an array or object. This will **not** work on dates, regexes and potentially other types of objects. If you want something which covers everything, use [this](https://lodash.com/docs/4.17.11#cloneDeep)

## Install

```
$ npm install simple-deep-copy
```

## Usage

```js
const simpleDeepCopy = require('simple-deep-copy');

const originalArray = [
  { lang: "JavaScript" },
  { lang: "Elm" },
  { lang: "Rust" }
];
const newArray = simpleDeepCopy(originalArray);

newArray[1].lang = "Elixir"
//=> 'Elixir'

originalArray[1].lang
//=> 'Elm'
```

## License

MIT © [Carl Mungazi](https://carlmungazi.com)