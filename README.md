# Hogwarts House App
A fullstack app displaying and filtering Hogwarts house data via REST API.

This is a fullstack React + Node.js application built for a coding assignment.  
It contains:

- ✅ A frontend built with **Next.js + TypeScript**
- ✅ A backend REST API using **Node.js + Express**
- ✅ A working trait filter and dynamic rendering of house data
- ✅ Deployed frontend (Vercel) and backend (Railway)

---

## 📁 Folder Structure

hogwarts-houses-app/
├── frontend/   # Next.js + TypeScript app
├── backend/    # Express.js REST API

---

## 🚀 Live Deployment

- **Frontend (Vercel)**: [Hogwarts Houses Frontend](http://hogwarts-houses-app.vercel.app/)

- **Backend (Railway)**: [Hogwarts Houses Backend](https://hogwarts-houses-app-production.up.railway.app/houses)

---

## 💻 Run Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/hogwarts-houses-app.git
cd hogwarts-houses-app
```

### 2. Start the backend (port 4000)
```bash
cd backend
npm install
npm start
```

### 3. Start the frontend (port 3000)
In a new terminal:
```bash
cd frontend
npm install
npm run dev
```

---

## 🔁 API Routes

**GET /houses** – returns all houses  
**GET /houses?name=gry** – filters houses by name (case-insensitive)

---

## ⚙️ Notes

- Font used: **Verdana**
- Trait filtering happens **client-side** on already fetched data
- Gradient uses valid `houseColours` or defaults to white→black
- Both frontend and backend are kept in the same repo for simplicity and clarity
