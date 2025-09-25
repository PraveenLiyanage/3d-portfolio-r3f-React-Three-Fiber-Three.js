# 3D Portfolio Project

A simple **React + Three.js (via @react-three/fiber)** portfolio starter with a rotating 3D model, animated cube, and an Express backend. Built with Vite + TypeScript.

---

## Features

### Frontend
- React + Vite + TypeScript
- Three.js with @react-three/fiber
- @react-three/drei helpers (OrbitControls, useGLTF, Suspense loader)
- GSAP animation for a spinning cube
- Fullscreen Canvas with overlay UI text

### Backend
- Express server with CORS enabled
- Example `/contact` POST endpoint

### Developer Experience
- TypeScript typings for props and 3D models
- `.gitignore` for clean version control
- Preloading GLTF models for performance

---

## Project Structure

```plaintext

project-root/
├── backend/
│ └── server.js # Express backend
├── public/
│ └── assets/model.glb # 3D model file
├── src/
│ ├── App.tsx # Canvas setup + scene composition
│ ├── main.tsx # React entry point
│ ├── Model.tsx # GLTF loader component
│ ├── AnimatedBox.tsx # Example spinning cube
│ ├── Home.tsx # Overlay UI text
│ ├── index.css # Global styles
│ └── index.html # Root HTML
└── .gitignore
```

---

## Getting Started

### 1. Install dependencies

```
bash
npm install
```

### 2. Run the frontend (Vite)

```
npm run dev
```

### 3. Run the backend (optional)

```
cd backend
node server.js
```
