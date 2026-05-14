# Week 6 Counters

This folder contains a React + Vite project that demonstrates state-driven UI and reusable component architecture. It is designed around a small counter app with global state, routing, and Tailwind styling.

## Key Technologies
- React for UI composition
- Vite for fast local development and build
- Zustand for lightweight global state management
- Tailwind CSS for utility-first styling
- React Router for page navigation

## Core Features
- multiple counter components with increment, decrement, and reset
- global store usage via `zustand` for shared state
- responsive layout and component-based styling
- route-based navigation between pages

## Folder Structure
- `src/components/` — reusable UI components and page views
- `src/stores/` — Zustand store definitions and state hooks
- `src/App.jsx` — main app layout and router configuration
- `src/main.jsx` — Vite app entrypoint

## Setup and Run
1. open the `week-6-counters` folder
2. install dependencies with `npm install`
3. start the app with `npm run dev`
4. open the local Vite URL shown in the terminal

## How to Explore
- inspect `src/stores/useCounterStore.js` to understand the shared state model
- open page components like `Home.jsx` and layout components like `RootLayout.jsx`
- extend the app by adding new counters, derived totals, or UI sections

## Why It Matters
This project teaches how to organize React state outside components, how to connect UI to a shared store, and how to build a small but scalable Vite application.
