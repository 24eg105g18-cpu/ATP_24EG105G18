# Week 6 MERN Mini App

This week contains a compact full-stack project with a backend API and a React frontend. The app demonstrates the MERN flow by connecting an Express/MongoDB backend to a Vite-powered React frontend.

## What’s Included
- `Backend/` — Express backend with MongoDB and API routes
- `frontend/` — React + Vite frontend consuming backend data
- example employee data management features
- shared state handling and form-driven user interactions

## Backend Features
- Express server with JSON parsing and CORS support
- MongoDB connection using Mongoose
- CRUD-like employee route handling in `Backend/API/empApp.js`
- modular route and controller structure

## Frontend Features
- React app built using Vite
- Axios for API requests to the backend
- form handling and validation patterns
- toast notifications for user feedback
- Zustand for lightweight global state sharing

## Folder Structure
- `Backend/server.js` — backend entrypoint and middleware registration
- `Backend/API/empApp.js` — employee-related route logic
- `Backend/models/` — Mongoose schema definitions
- `frontend/src/App.jsx` — main React application and routing
- `frontend/src/components/` — UI components and pages
- `frontend/src/store/` — global state and auth handling

## Setup and Run
1. open the `week-6-MERN-MINI-APP/Backend` folder and run `npm install`
2. start the backend with `npm run dev` or `npm start`
3. open the `week-6-MERN-MINI-APP/frontend` folder and run `npm install`
4. start the frontend with `npm run dev`
5. open the frontend URL in the browser and use the employee UI

## Why It Matters
This mini app shows how frontend and backend code can be developed together. It is a practical introduction to full-stack development, teaching API design, database models, HTTP communication, and UI integration.
DeploymentLink: https://atp-24-eg-105-g18-djxv.vercel.app/
