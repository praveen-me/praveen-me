---
title: "Make a Todo List Using React Hooks!!"
date: "1-13-2019"
---

![](https://cdn-images-1.medium.com/max/800/1*yCfHA67G2vPV7mmgzYpIgg.png)

**React Hooks** are upcoming features in the React family and the interesting part of React Hooks are that we can use state in **functional components**.
So, no more class components it doesn’t mean the support for class components is going to be stopped there. **Class components** are still there.
But React Hooks are currently in the alpha version of **React** i.e **v16.8.0-alpha.0**. But we can use them through the alpha version.

## Setup for React Hooks

First, we need to make a react app using **create-react-app**. It will make a create an app for us. For that just run in your terminalnpx create-react-app hooks-todo. It takes some time then it’ll create a react app for you now just to the app by runningcd hooks-todo now we have our **react-app** ready. Run npm install react@next react-dom@next that’ll install the alpha version of React in out app.

## Let’s Make the Todo

In this project, our focus is not to make a layout. So please copy the SASS file for the project from [here](https://gist.github.com/praveen-me/6da4e55421e61adeb91b6d9103814a7f). If you don’t have sass package install just run npm i node-sass. 
Now, let’s move into our App.js and make the App component **functional**. So, now our first move is to make the form for submitting our todo. Just copy this snippet of code into the return statement of our App component. I also called a function on events. We’ll take a look at them later.

![Todo form for adding todo](https://cdn-images-1.medium.com/max/3112/1*gjDdZHOgAXZ_TPoK-PJ_zg.png)*Todo form for adding todo*

Now, let’s make a state for storing the current todo value. We are using useState **state hook** for making state. We need to import it from ‘react’.
For that add this line at the top of the fileimport React, { useState } from ‘react’. Now, go inside our App then add const [todoValue, setTodoValue] = useState(''). So, here we are making a state **todoValue** and **setTodoValue** is for updating the value of **todoValue** and in the **useState** part, we are just setting the initial value of **todoValue** state by calling useState(). So, if you take a look we are using the array destructing here. **useState** returns an array that the first element of the array is stated name and the second item of the array is the function for updating the value of that state.
Now, let’s make the **handleChange** function.

![handleChange for setting current todo value](https://cdn-images-1.medium.com/max/2840/1*H3FQO1MWyEd7miYraXgJ9Q.png)*handleChange for setting current todo value*

So, simple for setting the current todoValue just call the **setTodoValue** function and pass the value as an argument.

Now, It’s time to work on our adding todo.
For that, we need another state. Let’s make const `[todos, setTodo] = useState([]);`. So, we make another state and all our todos are going to store here. I previously made an event-handler to submitting to-do form. Let’s made a function called **handleSubmit** that take care of submitting todo.

![function for submitting todo](https://cdn-images-1.medium.com/max/2840/1*0i8X3wwmpbYUV3c0lmcgzQ.png)*function for submitting todo*

It’s so simple from line 4 to line 7 we just making a todo object. And then in line 10 we just call **setTodo** function and passing a new array as an argument and the spreading the **todos** array for previous todos and then just adding todo at the end of the array. Now, we did our adding todo functionality we just need to display them. 
We have to map over the **todo** array and make an element for every todo.

![block for dispalying todo](https://cdn-images-1.medium.com/max/3416/1*V9rjJhWJzR1LqhbkohU-IA.png)*block for dispalying todo*

Paste this snippet after the parent div of the App component. As you see we just map over the todos array and creating a block for every todo. I also added the event handler for adding done and delete functionality in our todo.

Let’s work on delete our todo.
For this, we have to make a **handleDelete** function. We take the id from it’s parent element of the delete button and then just going to splice that index form the array then just again called the **setTodo** function and make the new array and spread all todos.

![function for deleting todo](https://cdn-images-1.medium.com/max/2840/1*MbEox6RvBCE1M1kF5H761w.png)*function for deleting todo*

Now, we completed our delete todo functionality.
Now, let’s work on **handleDone** functionality of the todo. For that, let’s just create **handleDone** function. In that, we are going to take the id from its parent element and then change the **done** of that todo and set the **todos** using **setTodo** method.

![function for handling done of todo](https://cdn-images-1.medium.com/max/2840/1*saUQtUiFFCWcBpC7wLrN4w.png)*function for handling done of todo*

Congrats, We completed our todo using hooks. I am glad if you make some changes and add more functionality using hooks don’t stop keep experimenting. Get the code of the App from [here](https://gist.github.com/praveen-me/74d58161e1c863b6310d04e81e204c10).

Follow me on [Twitter](https://twitter.com/am_pra_veen).
Check out my [GitHub](https://github.com/praveen-me) profile.
