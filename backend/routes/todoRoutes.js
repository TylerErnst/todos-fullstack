import express from "express";
import todoController from "../controllers/todoController.js";

// /api/todos
const router = express.Router();

router.get('/', todoController.getTodos);

export default router;