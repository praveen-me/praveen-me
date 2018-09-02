---
layout: post
title:  "The Craziness of Scopes in JavaScript"
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
</style>

![](/assets/images/blog_2_images/javscript_scopes.png)

In generally __scope__ is like an limeted area. Scopes are the essential part of every progarmming language. They are behaving like a limeted space for a declaration i.e where every variable is declared and what part of the program that variable can be accessible.

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

a   //Think and let's give it a moment ??
```
So, the value of the variable should be changed or not. Let's know it by running it.

![](/assets/images/blog_2_images/image_global.png) <br>
It changed because the varible __a__ is accessible inside the function because it is declared globally. So, when we call the __iAmLocal()__ function, that reassigned the value of __a__ again.
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
OOPS!! It's says an <span class="error">error</span> because now the engine looks for the variable __b__ is defined outside that __iAmLocal()__ function because that's the global scope but it doesn't got the value of the variable __b__. So, that's why it returns an <span class="error">error</span>.

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
  var sum = secondNumber();

  return result;
}
```
So, can we access __a__ inside the __secondNumber()__. Let's try it by running it. If we get <span class="value">15</span>, that means we can.
![](/assets/images/blog_2_images/image_local_2_short.png)
Yes, It is. <br>

### __Why is that happen?__
Because when __sum()__ is declared it creates it's own scope and the variables that are declared inside it can be accessible inside that scope so when 



<!-- You’ll find this post in your `_posts` directory. Go ahead and edit it and re-build the site to see your changes. You can rebuild the site in many different ways, but the most common way is to run `jekyll serve`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll-docs] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll Talk][jekyll-talk].

[jekyll-docs]: https://jekyllrb.com/docs/home
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-talk]: https://talk.jekyllrb.com/ -->
