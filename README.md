# JWT Authentication API

A basic Node.js API for user authentication using JWT tokens.

## What it does
- Register new users
- Login existing users 
- Protect routes that need authentication

## How to run

1. Install packages:
```bash
npm install
```

2. Start the server:
```bash
node server.js
```

Server runs on http://localhost:3000

## API Routes

**POST /register** - Create new user
```json
{ "username": "john", "password": "secret123" }
```

**POST /login** - Login user (returns JWT token)
```json
{ "username": "john", "password": "secret123" }
```

**GET /protected** - Access protected content (needs token in header)
```
Authorization: Bearer your_jwt_token_here
```

## Screenshots

![User Registration]([https://github.com/varun-varneker/JWT_API/blob/main/Screenshots/REGISTER.png](https://github.com/varun-varneker/JWT_API/blob/0c6f473228a3b051f5d5deb6d2eec5e60540649f/REGISTER.png))

![User Login]([https://github.com/varun-varneker/JWT_API/blob/main/Screenshots/LOGIN.png](https://github.com/varun-varneker/JWT_API/blob/0c6f473228a3b051f5d5deb6d2eec5e60540649f/LOGIN.png))

![Protected Route Access]([https://github.com/varun-varneker/JWT_API/blob/main/Screenshots/GET.png](https://github.com/varun-varneker/JWT_API/blob/0c6f473228a3b051f5d5deb6d2eec5e60540649f/GET.png))

## Note
This is a simple demo project. User data is stored in memory and will be lost when the server restarts.
