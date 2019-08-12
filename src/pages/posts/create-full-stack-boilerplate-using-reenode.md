---
title: "Create full-stack boilerplates using reenode"
date: "08-12-2019"
---

## Problems with creating fullstack boilerplates:

Creating a starter kit for full-stack applications need a lot of effort and sometimes it becomes a headache. A small mistake in the initialization of the starter project can break your whole code and then you see a huge pile of console errors.

When I was learning to create full-stack applications then every time I need to start the coding application from sketch and every need I need to repeat that huge pile of coding steps that becomes a headache for me sometimes and if I did something wrong in setup of the application, my whole application got breaks.

Making mistake can be one reason but the main problem is that its very time consuming like every time you need to install packages, need to do configure webpack, babel, eslint, prettier, etc and sometimes that makes me sick. Because of this, I created some boilerplate like [simple-react-boilerplate](https://github.com/praveen-me/simple-react-boilerplate), [MERN-boilerplate](https://github.com/praveen-me/MERN-boilerplate), [react-redux-ssr](https://github.com/praveen-me/react-redux-ssr) and every time I need to create a project I just clone that repository and start working.
But still, the problem is that there are different repositories for that.

So, that's why I create `reenode`, a CLI for generating boilerplates with all the necessary minimal configuration for creating full-stack applications.

## What is actually `reenode` is ?

`reenode` is a simple CLI that helps you create starter code for creating full-stack boilerplates without all the pain that you'll have when writing them from scratch. `reenode` also have custom options for creating different boilerplates. The best part is that it's time-saving and your starter code will be ready in just a couple of minutes.

## How to use it?

For that first you need to install it globally by just typing: <br/>
`npm install -g reenode` or `yarn add global reenode`.

That's so simple. 😃

**reenode** provides `create` command to create you project. For that you just need to run:

```bash
reenode create project-name
```

After that terminal prompt will ask some questions:
![](./../../images/reenode.gif)

That's all. Congratulations your starter code is generated. 🚀 <br/>
You can get help typing `reenode --help` and version of CLI by `reenode --version`.
