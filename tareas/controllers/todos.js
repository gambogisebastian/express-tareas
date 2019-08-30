var Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTarea
};

function newTarea(req, res) {
  res.render('todos/new');
};

function index (req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
    tiempo: req.time
  });
};

function show (req, res) {
  res.render('todos/show', {
    todo: Todo.getOne(req.params.id),
    todoNum: parseInt(req.params.id) + 1
  });
};