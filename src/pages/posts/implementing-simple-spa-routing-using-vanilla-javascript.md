---
title: "Implementing Simple SPA Routing Using Vanilla JavaScript"
date: "1-4-2019"
---

![](https://cdn-images-1.medium.com/max/800/1*mHQDsqWBWs3tBrPz2uZWtA.jpeg)

In this article, I am going to implement **SPA** routing using **Vanilla JavaScript**.
So, the main motive behind this article to get an understanding of how SPA routing works. Before we get into this we need to understand the main components of routing i.e Web **History** and **Location** API.

## History and Location Object

Let’s first talk about **[window.history](https://developer.mozilla.org/en-US/docs/Web/API/History)**. History contains all the browser history you can simply access it by typing *history* and then you’ll get the whole history object and the variety of method’s it has.

![window’s history object](https://cdn-images-1.medium.com/max/2346/1*o5aivA_EwWECOOZnq2GYog.png)*window’s history object*

And another one that we are going to use is **[window.location](https://developer.mozilla.org/en-US/docs/Web/API/Location).** It contains all the information about the current location such as origin, pathname, etc. If you type *location* in your terminal then you got the whole location object.

![window’s location object](https://cdn-images-1.medium.com/max/2254/1*GHosXKQnj5bwM8x3jo8wKQ.png)*window’s location object*

## Let’s start Routing

So, first of all, we need to make an **index.html.** It contains all the markup for our app. For this right, we just need to make a div of the *id *of **root**.

![index.html](https://cdn-images-1.medium.com/max/2840/1*gbW54Pe4_GxHFe4hxB0V8w.png)*index.html*

Now, we are done with that make our page. That is going to render in **root** area.

![Our three different components](https://cdn-images-1.medium.com/max/2840/1*FbzwL2Qa7-_o2CXBgHmTyA.png)*Our three different components*

Now, we make our three different pages let’s import them in our index.html’s **head **section. Now we have to use a server to serve these pages so in this I am going to use **live-server**. If you have live-server it’s well and good just go to the folder directory and run live-server otherwise install it using npm i -g live-server.
Now, it’s time to make our main JavaScript file that contains all our routing logic.
Let's make a file called app.js. 
Then first we have to decide our routes and page specific to that particular route and put them in an object.

```js
    const routes = {
      '/' : home,
      '/contact': contact,
      '/about': about
    };
```
Our next work is to render a page when the index initially loaded. For that first, we have to select the **root** div and then use innerHTML method to add the content to the element according to the path.

```js
    const rootDiv = document.getElementById('root');
    rootDiv.innerHTML = routes[window.location.pathname];
```

Here **window.location.pathname** will give the current path and when the page is loaded the current path is going to **‘/’**. But our work is not done here yet. Now, we also have to make the route for ‘/about’ and ‘/contact’ page. For that, we are going to create a simple navigation menu.

![Simple navigation for navigating through sections.](https://cdn-images-1.medium.com/max/3328/1*HRolE_-GnyX2C7o-ye5ZIQ.png)*Simple navigation for navigating through sections.*

Now, we are going to make a function that helps us to navigate through section it takes a path and then uses **history.pushState()** method that takes three parameters i.e state, title, and the route to push and to push the current route into history object so we can also navigate through the browser *backward* and *forward* button and then render the section according to the current path.

![onNavigate Method](https://cdn-images-1.medium.com/max/3160/1*nok3v9iCyS75U1G0dgWHow.png)*onNavigate Method*

Now, just call this **onNavigate **method on the **onClick **event of our navigation menu’s a tag. We just need to do this.

```js
    <a href="#" onclick="onNavigate('/about'); return false;">About</a>
    // repeat for other routes also.
```

Congrats you just make your own router and when you pressing browser’s forward and backword button you see that the route actually changes but wait for your page is not changing. So, this is because when the browser call’s it’s **pushState()** method than another method is also called i.e **window.onpopstate** it’s a simple function where you can customize it according to your need. So, whenever the pushState is called we are going to render our section. For that all we need to apply this.

```js
    window.onpopstate = () => {
      rootDiv.innerHTML = routes[window.location.pathname]
    }
```

Congrats you finally have done with it.

If you want to follow the code. Check out GitHub repo from [here](https://github.com/praveen-me/simple-vanila-router).
If you want to connect with me check out my [Twitter](https://twitter.com/am_pra_veen) and [Github](https://github.com/praveen-me).
