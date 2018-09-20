---
layout: post
title:  "How to Make a Simple Chrome Extension"
categories: jekyll update
---
<link rel="stylesheet" href="/assets/css/blog.css">

![Blog Cover](/assets/images/blog_3_images/blog_cover.jpg) <br>

In this article, we going to make a simple customizable chrome extension. This chrome extension include functionality of **Time** and **Greet Message**. By the end of the article you got the idea of how can you make chrome extension. Prerequisities of making this chrome extension is that you have to know about some [DOM Manipulation Methods](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model).<br>
In this article we are going to cover:- <br>
1 - [**Local Storage Methods**](https://developer.mozilla.org/en/docs/Web/API/Window/localStorage) <br>
2 - [**JSON Methods**](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/JSON) <br>
But don't worry I'm going to explain them also.

## Let's Set the Starter Files
So, now we done with what we are going to do. Let's set that what starter files should be need :- <br>
1 - <span class="highlighter">manifest.json</span> (to set the metadata for our chrome extension)<br>
2 - <span class="highlighter">index.html</span> <br>
3 - <span class="highlighter">style.css</span> (if you want) <br>
3 - <span class="highlighter">main.js</span> (for extension dynamic part) <br>

Try to make directory strucure like this:-
![](/assets/images/blog_3_images/dir_str.jpg)

**What is manifest.json file and why do we use it?** <br>
<span class="highlighter">manifest.json</span> file used to specify basic metadata about our extension such as name and the version and can also specify the behaviour of it. And, so setup these basic specifications we need <span class="highlighter">manifest.json</span>.

Now, Let's start to code <span class="highlighter">manifest.json</span>. The first thing is that it is a <span class="highlighter">JSON file</span>, so it's a <span class="highlighter">Object</span>. So, copy and paste this code in to your <span class="highlighter">manifest.json</span> file and I'm going to tell you about every line :-
<script src="https://gist.github.com/praveen-me/06013e75173c806021ed3a7ac412dab6.js"></script>

Let's go through every line :- <br>
**1** - Start the <span class="highlighter">Object</span>. <br>
**2** - Set the name of the project. <br>
**3** - Set the description of the project. <br>
**4** - Set the version of the app. <br>
**5**- Set the manifest version to the 2.(latest one) <br>
**6** - Create a <span class="highlighter">Object</span> for browser actions. <br>
**7** - Set the default pop up to the <span class="highlighter">index.html</span>. It's means that when you click on icon of the extension it pop up the <span class="highlighter">index.html</span> page for you. <br>
**8** - Set the deafult tab name to "New Tab". <br>
**9** - Set the logo of the extension. <br>
**11** - Create a <span class="highlighter">chrome_url_overrides</span> to overwrite the url of whenever the new tab is opened. <br>
**12** - set "newtab" property overwritten with <span class="highlighter">index.html</span>.

And also make a basic structure to out <span class="highlighter">index.html</span> file and put some basic css styles like background-color and font-family to our <span class="highlighter">style.css</span> file.

## Let's Code Our Extension
We code out extension in two part:-<br>
1 - Set the <span class="highlighter">Time</span> functionality. <br>
2 - Set the <span class="highlighter">Greet Message</span> functionality.


### <u>1- Set the Time Functionality</u>
So, for this first we have to create time-block.htmleletime-block.htmlments for our time functionlity. Let's go back to our <span class="highlighter">index.html</span> file and make some element there and put some basic styling to them.
<script src="https://gist.github.com/praveen-me/5c4a8715a460d325b6fbecec735ea282.js"></script>

Now, Go to our <span class="highlighter">main.js</span> file.
So, first make a **init()** function that have our all initailization process. <br>
Now, select both **hourELm** and **minuteElm** and make a <span class="highlighter">setTime()</span> and then create <span class="highlighter">Date()</span> inside <span class="highlighter">setTime()</span> then take minutes and hours from the <span class="highlighter">Date()</span> and append them to **hourELm** and **minuteElm**. And call <span class="highlighter">setTime()</span> with a <span class="highlighter">setTimeout()</span> with the timeout of <span class="highlighter">1000ms</span> in <span class="highlighter">init()</span>. <br>
Now, Our code looks like this:-
<script src="https://gist.github.com/praveen-me/f71aad7241103bc054f258f340bd5a86.js"></script>

At this point your Extension looks like :-
![](/assets/images/blog_3_images/time_block.png)

### <u>2- Set Greet Message Functionality</u>
So, We done with the time functionality now it's time to give Greet Message functionality to our extension. Let's create element for Greeting Message and style them.
<script src="https://gist.github.com/praveen-me/4d27a3939029c69f1ba998003e313b2c.js"></script>

This functionality divides into two parts:- 
*  Check for user details are available, if not then set details of user for first time.
*  If details are available, then display greeting.

That's why in the our <span class="highlighter">index.html</span>, we make a section for <span class="highlighter">user details</span>. So, move to our <span class="highlighter">main.js</span> file and first check for user details first. For this, inside in our <span class="highlighter">init()</span> we have to write a *if... else* block. That check's the username is present or not.
<script src="https://gist.github.com/praveen-me/20a86322951755913bc7679d63d8f6d1.js"></script>

Here, For you <span class="highlighter">localStorage</span> is new thing. So, for now keep it simple. <span class="highlighter">localStorage</span> is a kind of database internally in the browser. In the *if* statement we use <span class="highlighter">localStorage.getItem()</span> for getting a value that is assigned by a key of **userNameKey**, so here if it is null that means it's not there then when the we call a <span class="highlighter">getDetails()</span> when the **Submit** button click, otherwise call <span class="highlighter">setGreet()</span> for setting greeting message.

Now, let's first grab all the elements for getting details from inside the **user-details** block.
```
const userDetailsBlock = document.querySelector('.user-details');
const submitBtn = document.getElementById('submit');
```

Now, declare your <span class="highlighter">getDetails()</span> that takes the input value and set it into **localStorage**.
<script src="https://gist.github.com/praveen-me/a5c11606f6893a9d5840b17095713b74.js"></script> 
Let's take a look at line - 7. There's we first user *JSON.stringify()* to convert our item as a **String** and inside that we use <span class="highlighter">localStorage.setItem()</span> for setting the *userName*. The <span class="highlighter">localStorage.setItem()</span> takes two arguments, **(a)** - the key through which the value should be saved and **(b)** - the value itself that has to be stored. In line - 10 and 11 we call <span class="highlighter">setGreet()</span> because we want to set greet immediately after the adding value to the **localStorage**. So, for this time comment out those lines.<br>
So, now if you refresh the page and then enter **userName** and then click on **Submit** button then the **userName** immediately stored in **localStorage**. If you want to checkout then go you console and type **localStorage** then console returns a *Object* that contains **userName**.
![](/assets/images/blog_3_images/check-local-sto.png)

Now, let's move to the second function for setting greeting message. First select all elements of the **greet_msg** block.
```
const greetBlock = document.querySelector('.greet_msg');
const greet_msg = document.getElementById('greet-msg');
const userNameElm = document.getElementById('user-name');
```
We already call <span class="highlighter">setGreet()</span> in the else block. Now, let's declare it, this function take the **userName** from **localStorage** and then append it to *userNameElm* and get the hours and then greet a greeting according to the hours and then append it also to *greet-msg*.
<script src="https://gist.github.com/praveen-me/3bb7b84874f00acfe51da51b6c70a814.js"></script>

Finally, Our chrome extension is completed. You can also checkout the code of this project from [here](https://github.com/praveen-me/chrome-extension-blog).