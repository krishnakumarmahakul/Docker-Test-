# Express Authentication API

A RESTful API built with Express.js following MVC architecture for user authentication.

## Features

- User registration (signup)
- User authentication (login)
- JWT token-based authentication
- Password hashing with bcrypt
- Input validation
- Error handling
- MongoDB integration

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file with your configuration
3. Start MongoDB service
4. Run the server:
```bash
npm run dev
```

## API Endpoints

### Authentication

#### POST /api/auth/signup
Register a new user
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "Password123"
}
```

#### POST /api/auth/login
Login user
```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

#### GET /api/auth/profile
Get user profile (Protected route)
Headers: `Authorization: Bearer <token>`

## Project Structure

```
├── controllers/
│   └── authController.js
├── middleware/
│   ├── auth.js
│   └── validation.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── server.js
└── package.json
```
