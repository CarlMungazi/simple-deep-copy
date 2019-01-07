import test from 'ava';
import simpleDeepCopy from '.';

test('it creates a deep copy', t => {
  const originalArray = [
    { lang: "JavaScript" },
    { lang: "Elm" },
    { lang: "Rust" }
  ];
  const newArray = simpleDeepCopy(originalArray);

  t.deepEqual(originalArray, newArray);
});

test('it does not change values in the original array', t => {
  const originalArray = [
    { lang: "JavaScript" },
    { lang: "Elm" },
    { lang: "Rust" }
  ];
  const newArray = simpleDeepCopy(originalArray);
  
  newArray[1].lang = "Elixir"; 

  t.not(originalArray[1].lang, newArray[1].lang);
});

test('it does not change values in the original object', t => {
  const originalObject = { lang: "JavaScript" };
  const newObject = simpleDeepCopy(originalObject);
  
  newObject.lang = "Elixir";  

  t.not(originalObject.lang, newObject.lang);
});