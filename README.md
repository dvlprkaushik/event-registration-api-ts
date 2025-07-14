# 🚀 Event Registration API

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge\&logo=typescript\&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge\&logo=express\&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge\&logo=nodedotjs\&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge\&logo=zod\&logoColor=white)
![REST API](https://img.shields.io/badge/REST%20API-FF6C37?style=for-the-badge\&logo=postman\&logoColor=white)

A robust RESTful API for event registration built with Express.js and TypeScript, featuring comprehensive input validation using Zod.

## 📋 Overview

This backend API service handles event registration with emphasis on:

* Strong data validation and sanitization using Zod
* Clear request-response patterns
* Duplicate registration prevention
* Type safety with TypeScript
* Consistent API response format

## 🛠️ Tech Stack ->

* **Runtime**: Node.js
* **Framework**: Express.js
* **Language**: TypeScript
* **Validation**: Zod
* **Architecture**: RESTful API

## ✨ Key Features

* Comprehensive input validation with detailed error messages
* Prevents duplicate registrations for the same event
* In-memory data storage for quick testing and prototyping
* Consistent API response format for success and error cases
* Administrative endpoint for viewing registrations

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/dvlprkaushik/event-registration-api-ts.git

# Navigate to project directory
cd event-registration-api-ts

# Install dependencies
npm install

# Create .env file
cp .env.example .env

# Start the development server
npm run dev
```

## ⚙️ Environment Variables

Create a `.env` file in the root directory:

```env
PORT=3000
BASE_URL=localhost
```

## 🔌 API Endpoints

| Method | Endpoint                      | Description                   | Required Body                             |
| ------ | ----------------------------- | ----------------------------- | ----------------------------------------- |
| POST   | `/api/v1/event/register`      | Register for an event         | `fullName`, `email`, `phone`, `eventName` |
| GET    | `/api/v1/event/registrations` | Get all registrations (Admin) | None                                      |

### Registration Request Example

**Using cURL:**

```bash
curl -X POST http://localhost:3000/api/v1/event/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Kaushik Das",
    "email": "kaushik@example.com",
    "phone": "9876543210",
    "eventName": "Node.js Bootcamp"
  }'
```

**Using JSON:**

```json
{
  "fullName": "Kaushik Das",
  "email": "kaushik@example.com",
  "phone": "9876543210",
  "eventName": "Node.js Bootcamp"
}
```

### Successful Response (201 Created)

```json
{
  "success": true,
  "message": "Registration successful",
  "data": {
    "fullName": "Kaushik Das",
    "email": "kaushik@example.com",
    "phone": "9876543210",
    "eventName": "Node.js Bootcamp",
    "timestamp": "2025-07-13T06:32:03Z"
  }
}
```

### View Registrations Example

```bash
curl http://localhost:3000/api/v1/event/registrations
```

## 📁 Project Structure

```bash
event-registration-api/
├── src/
│   ├── config/
│   │   ├── env.d.ts
│   │   ├── HealthCheck.ts
│   │   └── listener.ts
│   ├── controllers/
│   │   └── event.controller.ts
│   ├── middlewares/
│   │   ├── checkRole.middleware.ts
│   │   ├── mockUser.middleware.ts
│   │   ├── requestLogger.middleware.ts
│   │   └── validate.middleware.ts
│   ├── routes/
│   │   └── event.routes.ts
│   ├── types/
│   │   ├── express/
│   │   │   └── index.d.ts
│   │   ├── Event.types.ts
│   │   └── HttpUtils.types.ts
│   ├── validators/
│   │   ├── event.validator.ts
│   │   └── index.ts
├── .env
├── .env.example
├── tsconfig.json
└── package.json
```

## ✅ Validation Rules

| Field     | Validation Rules               |
| --------- | ------------------------------ |
| fullName  | Required, minimum 3 characters |
| email     | Required, valid email format   |
| phone     | Required, 10 digits            |
| eventName | Required, non-empty string     |

## 🔍 Error Handling

The API provides detailed error messages for:

* Invalid input data
* Duplicate registrations
* Server errors

Example validation error response (400 Bad Request):

```json
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "phone": ["Expected string, received number"],
    "email": ["Invalid email format"]
  }
}
```

## 🧪 Development

```bash
# Run in development mode
npm run dev

# Build the project
npm run build

# Run in production mode
npm start
```

## 💡 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👥 Author

* **Kaushik Das** - [@dvlprkaushik](https://github.com/dvlprkaushik)
