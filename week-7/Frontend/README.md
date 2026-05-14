# Week 7 Frontend

This folder contains the React frontend for the Week 7 blog application. The frontend is built with Vite, styled with Tailwind CSS, and integrates with the backend API for user authentication and blog content management.

## Key Technologies
- React for building reusable UI components
- Vite for fast development and build performance
- Tailwind CSS for utility-first styling
- React Router for client-side navigation
- Zustand for lightweight global state management

## Core Features
- login and registration screens
- authenticated dashboard and user flow
- blog post listing, detail view, and creation forms
- image preview and upload integration with backend
- responsive UI for desktop and mobile layouts

## Folder Structure
- `src/App.jsx` — application shell and route definitions
- `src/components/` — reusable UI components and page sections
- `src/assets/` — static assets such as images and icons
- `src/store/` — global state store and authentication state
- `src/main.jsx` — app entrypoint and render logic

## Setup Instructions
1. install dependencies with `npm install`
2. start the frontend with `npm run dev`
3. open the local Vite URL shown in the terminal
4. configure the API base URL if needed, then connect to the backend

## Frontend Workflow
- authenticate users using the backend JWT-based login
- store authentication state in the Zustand store
- fetch blog posts and user data from the backend API
- send form data and file uploads to backend endpoints
- manage navigation between home, post, and profile pages

## What to Explore
- inspect `src/App.jsx` for routing and layout control
- review components under `src/components/` to understand UI composition
- examine how state and auth flows are handled in `src/store/`
- experiment with styling and add new pages or components

## Why It Matters
This frontend ties the Week 7 project together by providing the user experience layer. It demonstrates how a modern React application communicates with a Node.js backend and delivers a complete full-stack blog application.
