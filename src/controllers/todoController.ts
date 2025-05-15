import { Request, Response } from "express";
import { db } from "../database/mysql";

// Định nghĩa kiểu dữ liệu trả về khi insert
interface InsertResult {
  insertId: number;
}

export const getTodos = (_: Request, res: Response) => {
  db.query("SELECT * FROM todo_items", (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};

export const createTodo = (req: Request, res: Response) => {
  const { title } = req.body;

  db.query(
    "INSERT INTO todo_items (title) VALUES (?)",
    [title],
    (err, result) => {
      if (err) return res.status(500).json(err);

      // Ép kiểu result rõ ràng thay vì dùng `as any`
      const insertResult = result as InsertResult;
      res.status(201).json({ id: insertResult.insertId, title });
    }
  );
};

export const deleteTodo = (req: Request, res: Response) => {
  db.query("DELETE FROM todo_items WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.sendStatus(204);
  });
};
