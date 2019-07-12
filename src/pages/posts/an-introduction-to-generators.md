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
  yield 3;
}

const it = generator();
```
So, when a `generator` is called is good to store that a variable. Wait!! Oh crap it looks me different from a normal function. 🧐 <br/>
Yes, you can say that it's different.

## Hmm 🤔, But how is it works?
So, how we find the a function starts execution 🤨? From the line where we called the function and when a normal function starts execution it's going be executed till the end of the function or where function finds the `return` statement. Unlike normal function return `undefined` when nothing returned from a that function.

Instead when we called generator function i.e `const it = generator();`. So, it returns an [`iterator`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator). <br>
I assume that you already have knowledge about iterator if not checkout this [link](http://javascript.info/iterable).

Now, `it` contains that `iterator` and iterator have a method called `next` that calls and return an object like this `{ value: something, done: false }`.<br/>
Here, `value` is the current value that returned from the function and `done` is the boolean value that show if the execution of the function got finished or not. And in case of generator the value after `yield` becomes the `value` of the object when `next` method called. So, further it's going to be executed like this.

```js
it.next(); // { value: 1, done: false };

// If called it again then
it.next(); // { value: 2, done: false };

// Once More
it.next(); // { value: 3, done: false };

// Let's try one more time
it.next(); // { value: undefined, done: true };
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
If we consider this example then as we know if we called `it.next()` it will return an object. Let's first see the execution of this piece of code.

```js
it.next(); // {value : 1, done: false}

// Let's call this one more time
it.next(); // { value: 2  done: true}
```
because it when `return` statement executed then function returns `2` and we know that if function finds the `return` statement then that means the execution of the function got completed. <br>
Whoo!! 😤I think it starts to make sense. 😁

_At the end, `yield` is statement where a generator pauses and when we call `next()` it resumes from that previous point where generator got paused. That means multiple `yield` for pausing generator multiple times_.

## Generator are Iterators. How?
We know that `for..of` loop basically build for iterators so that means every data structure that is iterable we can use for of loop on that. So, let's take an example from first piece of code.

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
  console.log(value);
}
```
Now, in this case it'll return us the value after the yield. In this case `for...of` loop is calling the `next()` method internally and returns the value from this object i.e <br>
`{value: '', done: boolean}` until the `done` property is going to be `true`. 

If we can use  a `for..of` that we can also use spread operator also `...` for storing the value from it. Let's checkout this.
```js
const values = [...it]
```

__REMEMBER THAT: A GENERATOR CAN'T BE ROLL BACK FOR THAT YOU NEED TO MAKE A NEW INSTANCE AGAIN. DON'T HAVE AN IDEA WHAT I MEANT, DONT'T WORRY. LET'S CHECKOUT BY AN EXAMPLE 🤟.__ 

So, suppose you wanna run  like this:
```js
it.next();
it.next();
it.next();

const arr = [...it] ??
```
Will be an empty array because you already `it` already executed. Now, that means if you wanna run this again you need to create a new instance i.e `var it2 = generator()`.

## Generator Composition
That means you can compose one or more generator's in a single generators.