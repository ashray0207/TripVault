# 🌍 TripVault - Week 1 Authentication System

TripVault is a MERN Stack travel application. This Week 1 implementation focuses on building a secure user authentication system using JWT, MongoDB Atlas, Express.js, React, and Node.js.

---

## 🚀 Features

- User Registration
- User Login
- Password Hashing using bcryptjs
- JWT Authentication
- Protected Dashboard
- Protected API Routes
- Logout Functionality
- MongoDB Atlas Integration
- Responsive React Frontend

---

## 🛠️ Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- dotenv
- cors

---

## 📁 Project Structure

```
TripVault/
│
├── client/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── styles.css
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── .env
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/tripvault.git
```

```bash
cd tripvault
```

---

## Backend Setup

Navigate to server

```bash
cd server
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5001

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=tripvault_secret_key
```

Start backend

```bash
npm run dev
```

---

## Frontend Setup

Navigate to client

```bash
cd client
```

Install dependencies

```bash
npm install
```

Start frontend

```bash
npm run dev
```

Frontend runs at

```
http://localhost:5173
```

Backend runs at

```
http://localhost:5001
```

---

## 🔐 API Endpoints

### Register

```
POST /api/auth/register
```

Sample Request

```json
{
  "name":"John Doe",
  "email":"john@example.com",
  "password":"123456"
}
```

---

### Login

```
POST /api/auth/login
```

Sample Request

```json
{
  "email":"john@example.com",
  "password":"123456"
}
```

Returns

```json
{
  "token":"JWT_TOKEN",
  "user":{
      "id":"...",
      "name":"John Doe",
      "email":"john@example.com"
  }
}
```

---

### Get Logged-in User

```
GET /api/auth/me
```

Header

```
Authorization: Bearer JWT_TOKEN
```

---

## Authentication Flow

1. User registers an account.
2. Password is encrypted using bcrypt.
3. User logs in.
4. Backend verifies credentials.
5. JWT token is generated.
6. Token is stored in Local Storage.
7. Protected Dashboard fetches user details.
8. Logout removes token and redirects to Login.

---

## 📷 Screenshots

### Register Page

_Add Screenshot Here_

### Login Page

_Add Screenshot Here_

### Dashboard

_Add Screenshot Here_

---

## Future Enhancements

- Travel Journal
- Trip Planner
- Expense Tracker
- Destination Gallery
- Cloud Image Upload
- User Profile Management

---

## Author

**Ashray Patil**

B.E. Computer Science Engineering

MERN Stack Developer

GitHub: https://github.com/ashray0207

LinkedIn: https://www.linkedin.com/in/ashray-patil/

---

## License

This project is developed for learning purposes as part of a MERN Stack Internship assignment.
