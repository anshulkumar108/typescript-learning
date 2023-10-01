"use strict";
// import express from 'express'; // this will import express object .
Object.defineProperty(exports, "__esModule", { value: true });
// const router=express.Router();// from express module we extract  Router .
const express_1 = require("express");
let todos = [];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text,
    };
    todos.push(newTodo);
    res.status(200).json({ newTodo });
});
router.put('/todo/:todoId', (req, res, next) => {
    const tid = req.params.todoId;
    const todoIndex = todos.findIndex(todonext => (todonext.id === tid));
    if (todoIndex >= 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: req.body.text
        };
        return res.status(200).json({ message: "updated todos", todos: todos });
    }
    res.status(401).json({ message: 'something is wrong' });
});
router.delete('/todo/:id', (req, res, next) => {
    const id = req.params.id;
    if (!id) {
        return res.sendStatus(404).json({ success: false });
    }
    else {
        todos = todos.filter(todoId => (todoId.id !== id));
        res.status(200).json({ todos });
    }
});
exports.default = router;
