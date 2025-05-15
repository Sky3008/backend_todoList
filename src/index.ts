import express from "express";
import cors from "cors";
import todoRoutes from "./routes/todoRoutes";
import ENV from "./common/ENV";

const app = express();

app.use(cors());
app.use(express.json());

// Đăng ký route
app.use("/api/todos", todoRoutes);

// Khởi động server
app.listen(ENV.Port, () => {
  console.log(`🚀 Server running on http://localhost:${ENV.Port}`);
});
