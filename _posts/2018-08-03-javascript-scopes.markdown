---
layout: post
title:  "Scope!! What Is This?"
date:   2018-08-06 21:45:53 +0530
categories: jekyll update
---
<!-- External Font -->
<link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">

<!-- style -->
<style>
  body {
    font-size : 18px;
    font-family: 'Roboto', sans-serif;
  }

  .error {
    color : red;
    font-weight : bold;
  }

  a {
    color : blue;
  }

  .value {
    color : chocolate;
    font-weight : bold;
  }

  .called_function {
    letter-spacing : 0.1rem;
    font-weight : bold;
    color : #1689bd;
  }

  img {
    width: 100%;0
  }
</style>

![](/assets/images/blog_2_images/blog_banner.png)

In generally __scope__ is like an limeted area. Scopes are the essential part of every programming language. They are behaving like a limeted space for a declaration i.e where every variable is declared and what part of the program that variable can be accessible.

As [MDN](https://developer.mozilla.org/en-US/docs/Glossary/Scope) Says - __The context in which values and expressions are "visible," or can be referenced.__

In generally there are two types of scopes:-
* Global Scope
* Local Scope <br>
But I also gonna talk about __Lexical Scope__.

## What is Global Scope?
Global Scope is term used when a variable is declared outside any of the functions i.e the variables should be declared globally. 

```
var a = 'global';               //I am a global scope
function iAmLocal() {           //I am a global scope
  console.log(a) // 'global'  
}                               //I am a global scope
```

So, If you look at the above function there's variable __a__ is declared globally and it can accessed inside functions. But as we know functions also created there's own scope. But here's the variable is declared in global scope.
So, the point is that if we declared a variable globally it can be accessed inside a function.

Lets's take an another example :-
```
var a = 'global'; 

function iAmLocal() {
  a = 'is I am local';
}

iAmLocal();

a;   //Think and let's give it a moment ??
```
So, the value of the variable should be changed or not. Let's know it by running it.

![](/assets/images/blog_2_images/image_global.png) <br>
It changed because the variable __a__ is accessible inside the function because it is declared globally. So, when we call the <span class="called_function">imAmLocal()</span> function, that reassigned the value of __a__ again.
Now, let's go to local scope.

## What is Local Scope?
As we know that when we declare a function it creates it's own scope. So, whenever a function is declared it creates it's local scope which is limited to that function.
So, it means that if you are declared a variable inside a function it's limited to it.
So, Let's understand it by a code example :-
```
var a = 'global';

function iAMLocal() {
  var b = 'local';
}

a; //'global'
b; //??
```
Let's access the variable outside the function.
![](/assets/images/blog_2_images/image_local.png)
OOPS!! It's says an <span class="error">error</span> because now the engine looks for the variable __b__ globally but it can't find the value because it is declared in the <span class="called_function">iAmLocal()</span>. So, that's why it returns an <span class="error">error</span>.

Let's take an another example:-
```
function sum() {
  var a = 5;
  var result = 0;

  // Declaring second function
  function secondNumber() {
    var b = 10;
    return a+b;
  }

  //calling secondNumber() and storing it in a variable
  var result = secondNumber();

  return result;
}
```
So, can we access __a__ inside the <span class="called_function">secondNumber()</span>. Let's try it by running it. If we get <span class="value">15</span>, that means we can.
![](/assets/images/blog_2_images/image_local_2_long.png)
Yes, It is. <br>

### __Why is that happen?__
Because when <span class="called_function">sum()</span> is declared it creates it's own scope and the variables that are declared inside it can be accessible limited to scope of the <span class="called_function">sum()</span>. But when we declaring the <span class="called_function">secondNumber()</span> function inside the <span class="called_function">sum()</span> it also creates it's own scope. So, when we called <span class="called_function">secondNumber()</span> it goona look for the value of __a__. It doesn't find __a__ it goes to it parent and check if there's __a__ is not. Ya, It's find there and execute that value successfully.

### == Lexical Scope ==
So, Lexical Scope is same as the nested local scopes but there be bit difference between them. In this if the current scope doesn't find the value then it moves outside to that scope and try to find the value there. This process continues untill it finds the value. It kind be boring let's do it by an example :- 
```
var num1 = 5; //globally

function add() {
  var num2 = 8;  //locally

  return function() {      //returning function
    return num1 + num2;    //returning function 
  }                        //returning function
}

var addIt = add();
addIt(); //?
```
So, In the above code sample I declared __num1__ globally because it's outside all the loops. Now, when we declared the <span class="called_function">add()</span> function it creates it's own scope. That's why __num2__ is declared locally so it available in the scope of the <span class="called_function">add()</span> function. So, let's think and look the code carefully that it gives us the <span class="value">13</span> or not. <br> 
Let's execute it :-
![](/assets/images/blog_2_images/lexical_scope.png)

**_So, what happened here?_** <br>
Let's go on that line where we called the <span class="called_function">add()</span> and stored this in the variable called __addIt()__. So, now __addIt__ holds the return function that is returned by the <span class="called_function">add()</span> function and when we call the returned function we got the correct answer. So, the thing is that how can it access the value of __num1__. So, I write above that if variable doesn't find it's value inside that function so it bubbles out i.e it goes upwards. So, now in the function that is returned by the <span class="called_function">add()</span> function. Now, __num1__ finds that is my value presented in this scope, it doesn't so it moves in the scope of the <span class="called_function">add()</span> a nd checks it that my value is presented here or not. No, It goes to the global scope there it finds the value and execute it.
So, the process of bubbling out and find it's value is called **lexical scope**. <br>
If it doesn't find the value then it returns an <span class="error">error</span> saying that variable is not defined.

## Let & Const -> How They Effect Scope
So, <span class="value">let</span> and <span class="value">const</span> are new members in the family of variables declarations in JavaScript. So, they helps us to create scope and helps the variable to not get hoisted. <br>
Let's take an example:-   
```
for(var i = 1; i <= 10; i++) {
  console.log(i);
}

i;  //Can I access it out side??.
```
Let's check out it:-
![](/assets/images/blog_2_images/let_var_first.png)
So, we can access the variable __i__ out side the loop because we know that only function can create their own scope. So, <span class="called_function">for loop</span> declared in the global scope. That's why in the last when the loop got executed we got the increased value of __i__.

Let's do it again but put <span class="value">let</span> instead of <span class="value">var</span> :-
```
for(let i = 1; i <= 10; i++) {
  console.log(i);
}

i; //Can I access i now??
```
![](/assets/images/blog_2_images/let_var_2.png)
Ya, it said a <span class="error">error</span> saying *__i__ is not defined* because <span class="value">let</span> creates a scope to that varible. <br>
<span class="value">const</span> is also same as the <span class="value">let</span> but you can't reassigned a value again. So, assigning value with <span class="value">var</span>,<span class="value">let</span> and <span class="value">const</span> depends on your need that you want to access that variable locally or want to update the varaiable as value reassigned to it.