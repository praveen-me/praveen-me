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
1 - <span class="highlight">manifest.json</span> (to set the metadata for our chrome extension)<br>
2 - <span class="highlight">index.html</span> <br>
3 - <span class="highlight">style.css</span> (if you want) <br>
3 - <span class="highlight">main.js</span> (for extension dynamic part) <br>

Try to make directory strucure like this:-
![](/assets/images/blog_3_images/dir_str.jpg)

**What is manifest.json file and why do we use it?** <br>
<span class="highlight">manifest.json</span> file used to specify basic metadata about our extension such as name and the version and can also specify the behaviour of it. And, so setup these basic specifications we need <span class="highlight">manifest.json</span>.

Now, Let's start to code <span class="highlight">manifest.json</span>. The first thing is that it is a <span class="highlight">JSON file</span>, so it's a <span class="highlight">Object</span>. So, copy and paste this code in to your <span class="highlight">manifest.json</span> file and I'm going to tell you about every line :-
<script src="https://gist.github.com/praveen-me/06013e75173c806021ed3a7ac412dab6.js"></script>

Let's go through every line :- <br>
**1** - Start the <span class="highlight">Object</span>. <br>
**2** - Set the name of the project. <br>
**3** - Set the description of the project. <br>
**4** - Set the version of the app. <br>
**5**- Set the manifest version to the 2.(latest one) <br>
**6** - Create a <span class="highlight">Object</span> for browser actions. <br>
**7** - Set the default pop up to the <span class="highlight">index.html</span>. It's means that when you click on icon of the extension it pop up the <span class="highlight">index.html</span> page for you. <br>
**8** - Set the deafult tab name to "New Tab". <br>
**9** - Set the logo of the extension. <br>
**11** - Create a <span class="highlight">chrome_url_overrides</span> to overwrite the url of whenever the new tab is opened. <br>
**12** - set "newtab" property overwritten with <span class="highlight">index.html</span>.

And also make a basic structure to out <span class="highlight">index.html</span> file and put some basic css styles like background-color and font-family to our <span class="highlight">style.css</span> file.

## Let's Code Our Extension
We code out extension in two part:-<br>
1 - Set the <span class="highlight">Time</span> functionality. <br>
2 - Set the <span class="highlight">Greet Message</span> functionality.


### <u>1- Set the Time Functionality</u>
So, for this first we have to create time-block.htmleletime-block.htmlments for our time functionlity. Let's go back to our <span class="highlight">index.html</span> file and make some element there and put some basic styling to them.
<script src="https://gist.github.com/praveen-me/5c4a8715a460d325b6fbecec735ea282.js"></script>

Now, Go to our <span class="highlight">main.js</span> file.
So, first make a **init()** function that have our all initailization process. <br>
Now, select both **hourELm** and **minuteElm** and make a <span class="highlight">setTime()</span> and then create <span class="highlight">Date()</span> inside <span class="highlight">setTime()</span> then take minutes and hours from the <span class="highlight">Date()</span> and append them to **hourELm** and **minuteElm**. And call <span class="highlight">setTime()</span> with a <span class="highlight">setTimeout()</span> with the timeout of <span class="highlight">1000ms</span> in <span class="highlight">init()</span>. <br>
Now, Our code looks like this:-
<script src="https://gist.github.com/praveen-me/f71aad7241103bc054f258f340bd5a86.js"></script>

At this point your Extension looks like :-
![](/assets/images/blog_3_images/time_block.png)

### <u>2- Set Greet Message Functionality</u>
So, We done with the time functionality now it's time to give Greet Message functionality to our extension.

