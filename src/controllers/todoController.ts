import { Request, Response } from "express";
import { db } from "../database/mysql";

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
      res.status(201).json({ id: (result as any).insertId, title });
    }
  );
};

export const deleteTodo = (req: Request, res: Response) => {
  db.query("DELETE FROM todo_items WHERE id = ?", [req.params.id], (err) => {
    if (err) return res.status(500).json(err);
    res.sendStatus(204);
  });
};
