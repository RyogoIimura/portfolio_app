
import express from "express";
import type { Express, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import cors from "cors";

const app: Express = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
const prisma = new PrismaClient();

// 全ての Todo を取得
// findMany =	複数件取得
//   条件に一致する全てのレコードを取得
app.get("/allItems", async (req: Request, res: Response) => {
  const allItems = await prisma.items.findMany();
  const new_data = JSON.stringify(allItems, (key, value) => {  
    return typeof value === 'bigint' ? value.toString() : value;  
  });
  return res.json(JSON.parse(new_data));
});

// Todo を作成
// create	= 作成
// app.post("/createTodo", async (req: Request, res: Response) => {
//   try {
//     const { title, isCompleted } = req.body;
//     const createTodo = await prisma.todo.create({
//       data: {
//         title,
//         isCompleted,
//       },
//     });
//     return res.json(createTodo);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// Todo を編集
// id = 任意の id
// update	= 更新
//   1.条件に一致するレコードを更新
//   2.一意の識別子またはIDを指定する必要がある
// app.put("/editTodo/:id", async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);
//     const { title, isCompleted } = req.body;
//     const editTodo = await prisma.todo.update({
//       where: { id },
//       data: {
//         title,
//         isCompleted,
//       },
//     });
//     return res.json(editTodo);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

// Todo を削除（ : = 任意の id ）
// delete	= 削除
//   条件に一致するレコードを削除する
// app.delete("/deleteTodo/:id", async (req: Request, res: Response) => {
//   try {
//     const id = Number(req.params.id);
//     const deleteTodo = await prisma.todo.delete({
//       where: { id },
//     });
//     return res.json(deleteTodo);
//   } catch (e) {
//     return res.status(400).json(e);
//   }
// });

app.listen(PORT, () => console.log("server is running🚀"));