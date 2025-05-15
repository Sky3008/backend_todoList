import { Router } from "express";
import {
  getTodos,
  createTodo,
  deleteTodo,
} from "../controllers/todoController";

const router = Router();

router.get("/", getTodos);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);

export default router;
