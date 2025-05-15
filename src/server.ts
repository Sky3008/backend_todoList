import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";

const app = express();

app.use(express.json());
app.use(cors());

// Register todo routes
app.use("/api/todos", todoRoutes);

export default app;
