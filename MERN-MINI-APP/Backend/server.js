import exp from 'express'
import {connect} from 'mongoose';
import { empRoute} from './API/empApp.js';
import cors from "cors";

const app = exp();

// Enable CORS for frontend connection
app.use(
  cors({
    origin: ["http://localhost:5173"],
  }),
);

// Middleware to parse JSON bodies
app.use(exp.json())

// Route for employee API
app.use('/emp-api', empRoute)

// Database connection setup
const connectDB = async () => {
  try {
    await connect("mongodb://localhost:27017/empdb");
    console.log("DB connected");
    // Start the server once DB is ready
    app.listen(4000, () => console.log("server listening on port 4000.."));
  } catch (err) {
    console.log("err in DB connection", err.message);
  }
};

connectDB();

// Global error handling middleware
app.use((err, req, res, next) => {
  console.log("err in middleware:", err.message);

  res.status(err.status || 500).json({
    message: "error",
    reason: err.message,
  });
});
