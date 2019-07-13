---
title: "An Introduction to Generators"
date: "06-07-2019"
---

![An Introduction to Generators Cover](./../../images/an-introduction-to-generators.png)

Generators function are introduced in ES6 and have the ability to pause and play i.e can return multiple values from the different context of the execution of the function.
You can pause them where ever you want, even in the middle of the express. They have this super cool ability when get executed.

## Let's write a Generator 

```js
function *generator() {
  yield 1;
  yield 2;
  yield 3;
}

const it = generator();
```
So, when a `generator` is called it's good to store that in a variable. Because it does not behave like a normal function. Wait Really!! that's why it's looking me different. 🧐

## Hmm 🤔, But how is it works?
So, how we find the function starts execution 🤨? From the line where we called the function and when a normal function starts execution it's going be executed till the end of the function or where function finds the `return` statement and normal function return `undefined` when nothing returned from the function.

Instead when we called generator function i.e `const it = generator();` it returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator). <br>
I assume that you already have knowledge about iterator if not checkout this [link](http://javascript.info/iterable).

Now, `it` contains an `iterator` and iterator have a method of `next` that when calls return's an object like this `{ value: something, done: false }`.<br/>
Here, `value` is the current value that returned from the function and `done` is the boolean value that tells that if the execution of the function got finished or not. And in case of the generator, the value after `yield` becomes the `value` of the object when `next` method called. So further, it's going to be executed the same.

```js
it.next(); { value: 1, done: false };

// If called it again then
it.next(); { value: 2, done: false };

// Once More
it.next(); { value: 3, done: false };

// Let's try one more time
it.next(); { value: undefined, done: true };
```

At last, when the generator execution finished it returns `value` of `undefined` because there's no value to be returned. 

### What happens If we put return statement in the middle of the generator function?
So, for this let's take an example:

```js
function *generator() {
  yield 1;
  return 2;
  yield 3;
}

const it = generator();
```
If we consider this example an if we called `it.next()` it will return an object. Let's first see the execution of this piece of code.

```js
it.next(); {value : 1, done: false}

// Let's call this one more time
it.next(); { value: 2  done: true}
```

So, when we call `it.next()` the first time it'll return as we expected an object with `value` of `1` and `done` of `false`.
But, we call that again this time the `value` is going to be `2` but the function knows that where it executed currently there's also a `return` statement that tells the generator to complete it's execution immediately. That's why it returns `done` of `true`.
Now it makes sense. 😁

_In the end, when `yield` is called that means it's time to pause the generator and when we call `next()` it resumes from that previous point where generator got paused. That means multiple `yield` for pausing generator multiple times_.

## Generator are Iterable. How?
We know that `for..of` loop basically builds for iterators so that means every data structure that is iterable we can use for of loop on that. So, let's take an example from the first piece of code.

```js
function *generator() {
  yield 1;
  yield 2;
  yield 3;
}

const it = generator();
```

We can run a `for..of` to this because it's an iterator. Let's try that.
```js
for(const value of it) {
  console.log(value); // 1 , 2, 3
}
```
Now, in this case it'll return the value after the `yield`. In this case `for...of` loop is calling the `next()` method internally and returns the `value` from this object i.e <br>
`{value: '', done: boolean}` until the `done` property is going to be `true`. 

If we can use a `for..of` that means we can also use spread operator also `...` for storing the value from it. Let's check out this.
```js
const values = [...it]
```

__REMEMBER THAT: A GENERATOR CAN'T ROLLBACK FOR THAT YOU NEED TO MAKE A NEW INSTANCE AGAIN. DON'T HAVE AN IDEA WHAT I MEANT, DON'T WORRY. LET'S CHECK OUT BY AN EXAMPLE 🤟.__ 

So, suppose you wanna run like this:
```js
it.next();
it.next();
it.next();

const arr = [...it] ??
```
Will be an empty array because `it` already got executed. Now, that means if you wanna run this again you need to create a new instance i.e `const it2 = generator()`.

## Generator Composition
That means you can comprise one or more generator's in a single generator. Let's take an example:

```js
function *getNumbers(start, end) {
  for(let i = start; i <= end; i++) yield i;
}

function *getAllNumbers() {
  yield* getNumbers(1, 10);

  yield* getNumbers(41, 50);

  yield* getNumbers(61, 70);
}

for(const value of getAllNumbers()) {
  console.log(value);
}
```

So, here first we create a simple generator `getNumbers` that takes two arguments i.e `start, end` and just loop over that them and on every iteration just yield that value. Then we create another generator `getAllNumbers` this just takes all those 