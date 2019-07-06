---
title: "An Introduction to Generators"
date: "06-07-2019"
---

![An Introduction to Generators Cover](./../../images/an-introduction-to-generators.png)

Generators are function that are introduced in ES6 and have ability to pause and play i.e you can return multiple values from the different context of the execution of the function.
You can pause them where ever you want maybe in the middle of the express. They have this super cool ability on execution. 

## Let's write a Generator 

```js
function *generator() {
  yield 1;
  yield 2;
  return 3;
}

const it = generator();
```
So, when a `generator` is called is good to store that a variable. Wait!! Oh crap it looks me different from a normal function. 🧐 <br/>
Yes, you can say that it's different.

## Hmm 🤔, But how is it works?
