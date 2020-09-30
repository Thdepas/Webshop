# eShop OOP

- Repository: OOP
- Type of Challenge: `Consolidation`
- Duration: `5 days`
- Deadline: `02/10/20 05:00 PM`
- Team challenge : `solo`

## Mission objectives

In this challenge, you will implement as many back-end functionalities as possible in OOP.

## The Mission

Freshshop is your new customer. They specialize in organic food and biodegradable bikes. Their store in Saint-Gilles is so profitable that they've opened another just below Thomas's apartment. To celebrate, they want to launch an e-commerce website at the same time.

Freshshop already owns the frontend part of the project. You must now implement the back-end with NodeJS or Php in OOP.

### Day one

Build a secure authentication system in Node.js featuring email confirmation, password reset, remember me.
We'll use Express for routing, MongoDB for data persistence, and Redis for session storage.
I'll also be using TypeScript for type-checking and auto-complete.

- express@4.17.1
- typescript@4.0.3
- express-session@1.17.1
- ioredis@4.17.3
- connect-redis@5.0.0
- mogoose@0.0.1-security

### Day two

Installed MongoDB and Redis in a docker-compose container, MongoDB image doesn't create an admin user for the initial database so we mapped a shell script to the MongoDB entrypoint directory.
Registration. When signing up with our app, a user would need to submit some personal data, which we're going to validate with Joi. @hapi/joi.
initiate user sessions and issue session cookies upon successful registration.
Proper error handling.

### Day three

Proper error handling.
Password Security with NPM bcryptjs hashing algorithm.
Implementation of login and logout functionality. When the user signs in, we validate their email address and password,
match them with a user in our database, create a session in cache, and issue a session cookie. When the user logs out, we destroy the session and unset the cookie.
