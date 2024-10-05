import dotenv from 'dotenv'

dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB_URI)
  .then(() => console.log("Databse is Connected Sucessfully"))
  .catch((error) => console.log("Database Error: ", error))

import express from 'express'
import bodyParser from 'body-parser'
import authenticateJWT from './middlewares/auth.middelware.js'
import { signup, login } from './controllers/user.controller.js'
import { createTodo, getAllTodos, getAllTodosByCategory, updateTodo, deleteTodo }
  from './controllers/todo.controller.js'
import cors from 'cors';

const app = express()
app.listen(process.env.PORT, () => console.log("server is running on PORT: 8080"))
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.post('/api/signup', signup)
app.post('/api/login', login)

app.use(authenticateJWT)
app.post('/api/todo', createTodo)
app.get('/api/todos', getAllTodos)
app.get('/api/todos/:category', getAllTodosByCategory)
app.put('/api/todo/:id', updateTodo)
app.delete('/api/todo/:id', deleteTodo)