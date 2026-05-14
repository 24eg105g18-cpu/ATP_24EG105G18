# Week 7 Backend

This folder contains the backend API for the Week 7 blog-style application. The backend provides authentication, blog post CRUD operations, file uploads, and secure user access for the frontend app.

## Key Technologies
- Express for server routing and API endpoints
- JWT for authentication and session security
- Mongoose for MongoDB data modeling and schema validation
- Cloudinary for image uploads and media storage
- bcryptjs for password hashing and secure credential storage
- dotenv for environment variable management

## Core Features
- user registration and login
- authenticated routes for protected data access
- blog post creation, update, deletion, and retrieval
- image upload support for blog avatars or post images
- centralized error handling and request validation

## Folder Structure
- `server.js` — main server entrypoint, middleware setup, and route registration
- `APIs/` — route handlers for auth, posts, users, and other endpoints
- `Models/` — Mongoose schemas describing data models
- `middlewares/` — authentication, error handling, and request middleware
- `config/` — database and service configuration

## Environment Setup
1. install dependencies with `npm install`
2. create a `.env` file with values like:
   - `PORT`
   - `MONGO_URI`
   - `JWT_SECRET`
   - `CLOUDINARY_CLOUD_NAME`
   - `CLOUDINARY_API_KEY`
   - `CLOUDINARY_API_SECRET`
3. start the backend with `npm run dev` or `npm start`

## API Usage
- Use the backend base URL from `server.js` or the terminal logs
- Connect the frontend app to the backend API endpoints for login, registration, post operations, and uploads
- Test the API with Postman or HTTP clients using the backend routes in `APIs/`

## Why It Matters
This backend acts as the data layer for the Week 7 project. It secures user authentication, persists blog posts, handles media uploads, and enables the frontend to deliver a full-stack blogging experience.
