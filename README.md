# Week 6 - MERN and React Projects

This week was focused on building full-stack applications using the MERN stack (MongoDB, Express, React, Node.js) and exploring more advanced React concepts like global state management and form handling.

## Projects Overview

### 1. MERN Mini App
A full-stack employee management application.
- **Backend**: Built with Node.js, Express, and MongoDB (Mongoose). It handles CRUD operations for employee records.
- **Frontend**: A React application using `react-router` for navigation and `react-hook-form` for data entry. It connects to the backend API to manage employee data.

### 2. React-App-2
A collection of React demonstrations focusing on:
- **API Fetching**: Using `useEffect` and `fetch` to retrieve data from external APIs.
- **Form Handling**: Implementing complex forms with validation using `react-hook-form`.
- **Component Communication**: Managing data flow between parent and child components.

### 3. Counters (Zustand)
A simple counter application demonstrating global state management.
- **State Management**: Uses **Zustand** to share a single counter state across multiple component instances.
- **Reusability**: Shows how multiple independent-looking UI elements can stay in sync using a central store.

## How to Run

### Backend (MERN-MINI-APP/Backend)
1. Ensure MongoDB is running locally.
2. Navigate to the `Backend` folder.
3. Run `npm install`.
4. Run `node server.js` or `npm run dev`.

### Frontend
1. Navigate to the respective project folder (e.g., `MERN-MINI-APP/frontend`, `React-App-2`, or `counters`).
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the local server link in your browser.
