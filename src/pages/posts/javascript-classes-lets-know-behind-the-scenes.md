---
title: "JavaScript Classes: Let’s Know Behind the Scenes"
date: "11-30-2018"
---

So, as we know **JavaScript Classes** are just a way of working on our problem using the OOP paradigm that helps us to solve our problem in a very structured way. In this article, I am not going to tell you how to write a **JavaScript Classes** my main focus is just to implement in different approaches.
In this article we are going to implement **JavaScript Classes** in three ways:-
* **Using Factory functions**
* **Using Constructor Function (Pseudo Class)**
* **Using Classes**
So, let’s start.

## Using Factories Functions

As I wrote we are going to implement by **factories function**. Let’s first talk about what are **factories functions**.
**Factories functions** are simple functions that take values from and returns an object to you they are not **constructor** functions. We just have to call them and they just return us an object and we can store these object in any variable.
Now, we going to apply our **class** using these **factories functions**.
Let’s first make an object that holds the function that is linked with the [[[Prototype]]](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/proto) of the object.

```js
    let studFunctions = {
      percentage: function(p, c, m) {
        let total = p + c + m;
        console.log((total / 3).toFixed(2));
      },
      result: function(p, c, m) {
        let total = p + c + m;
        if(total > 50){
          console.log("Pass");
        } else {
          console.log("Fail");
        } 
      }
    }
```

Here we created an object that has two methods **percentage** and **result** for our **Student** object.
Now, let’s create a factory function that creates an object for us and return it.

```js
    function studFactory(p,c,m) {
      let obj = Object.create(studFunctions);
      obj.phy = p;
      obj.che = c;
      obj.math = m;
      *return* obj;
    }
```

So, here we created a function that takes send three parameters and then we created an object using **[Object.create()](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/create)** because of this method us to create an empty object and set the **[[Prototype]]** to the **studFunctions** that we created. Now, we created our class now it’s time to create instances with this class.

```js
    let stud1 = studFactory(50, 60, 80);
    stud1.percentage(stud1.phy, stud1.che,stud1.math); // 63.33
    stud1.result(stud1.phy, stud1.che, stud1.math); // pass
```

## Using Constructor Function (Pseudo Class)

Now it turns to make the class using the pseudo-class method. For that first, we have to create a constructor function for that.

```js
    function Student (p, c, m) {
      *this*.phy = p;
      *this*.che = c;
      *this*.math = m;
    }
```

So, we just here created a function that takes three parameters and inside that **[this](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this)** because in the after some time we are going to call this function with **[new](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/new)** operator that returns an object from that function and then **this** refers to that same object.
Now we are putting some function in the **prototype** of the function. **[Prototype](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)** is just a simple object that default attach with the function and contains a contains a default **constructor** property that points to the same function.

```js
    Student.prototype.percentage = function() {
      let total =  *this*.phy + *this*.che + *this*.math;
      console.log((total / 3).toFixed(2))0
    }

    Student.prototype.result = function() {
      let total =  *this*.phy + *this*.che + *this*.math;
      *if*(total > 200) {
        console.log('pass');
      } *else* {
        console.log('fail')
      }
    }
```

So, same as previously did we did same just putting the method in the prototype of the function.
We created our class. Now let’s just make an instance from this class.

```js
    let stud1 = new Student(60, 90, 80);
    stud1.result(); //76.67
    stud1.percentage(); // 'pass'
```

## Using Classes (ES6 classes)

Now finally, we are going to implement **JavaScript classes** using ES6 classes.
For that, we just have first had to put **class** keyword in front Class name inside that there’s a special **constructor** method where we just going to put values as we did in previously where we make constructor function. Then just simply put the method that we put in the **prototype** in the previous section.

```js
    class Student {
      constructor(p, c, m) {
        *this*.phy = p;
        *this*.che = c;
        *this*.math = m;
     }

     percentage() {
       let total =  *this*.phy + *this*.che + *this*.math;
       console.log((total / 3).toFixed(2));
     }

     result() {
       let total =  *this*.phy + *this*.che + *this*.math;
       *if*(total > 200) {
         console.log('pass');
       } *else* {
         console.log('fail')
       }
     }
    }
```

Finally, we created our class with ES6 class syntax also. Now just initiate our class as we previously did in **pseudo class** part.

```js
    let stud1 = new Student(60, 90, 80);
    stud1.result(); //76.67
    stud1.percentage(); // 'pass'
```

## **Conclusion**

So, If you compare all these three approaches to writing **JavaScript class** then you the last step of making classes easier and cleaner way. But the motive of this article is just to demonstrate how it works behind the scenes i.e if we broke down to make a class into smaller parts then **factory functions** approach makes gave you an idea how it works.

Follow me on [Twitter](https://twitter.com/am_pra_veen).<br/>
Follow me on [Github](https://github.com/praveen-me).
