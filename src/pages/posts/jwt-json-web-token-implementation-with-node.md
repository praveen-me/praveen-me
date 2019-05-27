---
title: "JWT(JSON Web Token) : Implementation with Node"
date: "1-15-2019"
---

JSON Web Token is an open, industry-standard RCF 7519 method for authorizing transaction or requests between two parties. Basically, JWT used for the authorization purpose. We can authorize through session, cookies and third-party authorization.

![Source — [http://robmclarty.com/blog/what-is-a-json-web-token](http://robmclarty.com/blog/what-is-a-json-web-token)](https://cdn-images-1.medium.com/max/2000/1*IqAodJn46th31XLkU5Qf1w.jpeg)*Source — [http://robmclarty.com/blog/what-is-a-json-web-token](http://robmclarty.com/blog/what-is-a-json-web-token)*

### Steps What happened basically:

* The user sends the login credentials. If succeed, the server sends back a JWT token.

* The sent JWT token to have to be stored in local storage.

* Now, the client takes JWT and makes a request by putting JWT in Authorization header for data for the user.

* The server verifies the JWT. If successful then sends the data back to the client.

* After every request from the client side made by putting JWT in the authorization header.

* On logout, just destroy the JWT locally.

## Creation of JWT

There’re a lot of packages but we are going to use [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) for creating JWT and for checking purpose we can use passport’s JWT strategy package.
So, we have to install [passport](https://www.npmjs.com/package/passport), [passport-jwt](https://www.npmjs.com/package/passport-jwt) and [passport-local](https://www.npmjs.com/package/passport-local).
Now, It’s time to create JWT. Let’s assume that we have some user login credentials.
Let’s make a passport module for passport functions:

```js
    const jwt = require('jsonwebtoken');
    const app = require('express')();
    const passport = require('passport');
    const LocalStrategy = require('passport-local').Stratergy;

    // Use Local Startergy for authenticating user 
    passport.use(new LocalStrategy(
      function(username, password, done) {
        User.findOne({ username: username }, function (err, user) {
          if (err) { return done(err); }
          if (!user) { return done(null, false); }
          if (!user.verifyPassword(password)) {
            return done(null, false);
          }
          return done(null, user);
        });
      }
    ));

    // Apply passport authentication for getting user payload app.post('/login', (req, res, next) => {
      passport.authenticate('local', (err, userData) => {
          if (!userData || err) {
            return res.status(404).json({
              msg: 'Account not available. Please Sign Up.',
            });
          }
          req.logIn(user, (error) => {
            if (error) return next(error);
            return res.json({
              token: jwt.sign({user: userData}, 'secret'),
            });
          });
        })(req, res, next);
    });
```

When we get the token on the client side. Then it should be an encrypted string like this.

```js
**eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9**.
eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.
*SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c*
```
This string contains three parts as you see above. Let’s break them down:
* ****** Part — Contains constructing algorithm and type of token
* Normal Part — Payload data it is created
* ***** Part — Signature (base64UrlEncode(header) + ‘.’+
 base64UrlEncode(payload))

## Applying JWT for Authorization

Now, we have the JWT at our client and now we have to save that in our local-storage for getting the data throughout the application. 
Now after that, if we want to get the data of the user then we have to make a **GET** request by passing that JWT in **authorization** header:

```js
    fetch('/user', {
      method: GET,
      headers: {
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`,
     },
    });
```

Now, we are going to use the passport-jwt for verifying the token that is coming from the client-side.

```js
    const JwtStrategy = require('passport-jwt').Strategy;
    const ExtractJwt = require('passport-jwt').ExtractJwt;

    // Using passport-jwt stratergy
    passport.use(new JwtStrategy({
      jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey :'secret',
      },
      function(jwt_payload, done) {
        User.findOne({_id: jwt_payload._id}, function(err, user) {
          if (err || !user) {
            return done(err, false);
          }
          if (user) {
             return done(null, user);
          }
        });
    }));
```

Now, we implemented our passport middleware and we have to just call the passport authentication method on whatever endpoint we want to authenticate.

```js
    app.get('/user', passport.authenticate('jwt', { session: false }), (req, res) => {
      res.json({
        user: req.user
      });
    });
```

Finally, we implemented JWT using Node.
Check the code gist from [here](https://gist.github.com/praveen-me/a10e0032b4b2331cc7df4302931b8f41).
Connect me through [Github](https://github.com/praveen-me) and [Twitter](https://twitter.com/am_pra_veen).
