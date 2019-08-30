var Todo = require('../models/todo');

module.exports = {
    index,
    show,
    new: newTarea,
    create
};

function create (req, res) {
  console.log(req.body);
  req.body.done = false;
  Todo.create(req.body);
  res.redirect('/todos');
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

function newTarea(req, res) {
  res.render('todos/new');
};