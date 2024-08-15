const router = require("express").Router();
const {getTodo,addTodo,editTodo,deleteTodo } = require("../Controller/todo")

router.get("/todo",getTodo);
router.post("/todo",addTodo);
router.put("/todo",editTodo);
router.delete("/todo",deleteTodo);


module.exports= router;