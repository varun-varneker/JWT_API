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

![User Registration](https://github.com/varun-varneker/JWT_API/blob/main/Screenshots/REGISTER.png)

![User Login](https://github.com/varun-varneker/JWT_API/blob/main/Screenshots/LOGIN.png)

![Protected Route Access](https://github.com/varun-varneker/JWT_API/blob/main/Screenshots/GET.png)

## Note
This is a simple demo project. User data is stored in memory and will be lost when the server restarts.
