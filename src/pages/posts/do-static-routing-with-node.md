---
title: "Do Static Routing with Node"
date: "12-03-2018"
---


So, first of all, why am I writing this because of when I started **Node** couple of days back, I got just frustrated with searching about how can I do static routing using Node but I can’t find anything good and I just go through every question of **Stack Overflow** but I can’t find anything good and everyone is talking about **Express** in every question it doesn’t matter whether the guy that asks the question only about in **Node**. 
So, first of all, let’s talk about static routing.

## What is Static Routing?

So, Static Routing is that kind of routing where we to set a router manually for a specific route. There are some demerits of it like everytime if we have a new file then we have set route for that file manually. And also it’s hard to handle the route for every file in our project.

## Serve Static Files

So, let’s start routing i.e start making routes and serve files according to it.
So, we have our routes like this:-
* **“/”** — **index.html**
* **“/about”** — **about.html**
* **“/contact”** — **contact.html**
* **“/public/stylesheet/style.css”** — **style.css**
* **“/public/images/1.jpg”** — **1.jpg**
* **“/public/images/2.png”** — **2.png**

And we have the directory like this:-

```
    public/
      |
      -> index.html
      -> about.html
      -> contact.html
      -> stylesheet/
            |
            -> style.css
      -> images/
            |
            -> 1.jpg
            -> 2.png
      |
      index.js
```

So, first we have to create our server first:-

![Created Server](https://cdn-images-1.medium.com/max/3440/1*e7oNU6yQMqDXJfGepEBXkA.png)*Created Server*

Now, we created our server so we need **fs** package. Then we have to take the benefit of **Node JS** **request** object that contains two special property i.e **url** and **method**. The *request.method* gave us the method of the request and *request.url* will give us the browser’s request URL that the browser requested for. Now it’s time to check for the URL and method and serve the static pages.

![Make a route and render file according to it.](https://cdn-images-1.medium.com/max/3664/1*kA67K--nS6Dki-P2uODhSg.png) *Make a route and render file according to it.*

And follow the above same steps and every time just change the **case** and read the file for that specific kind and just change the header every time.

![Headers for specific files](https://cdn-images-1.medium.com/max/2584/1*oT3nyg9uGdmWpazzgsWZ0g.png)*Headers for specific files*

So, you have done your static routing with node. 😄

Follow me on [Twitter](https://twitter.com/am_pra_veen).
Follow me on [Github](https://github.com/praveen-me).
