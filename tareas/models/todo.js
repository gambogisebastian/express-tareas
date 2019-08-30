const todos = [
    {todo: 'pelar galgos', done: true},
    {todo: 'galgos', done: true},
    {todo: 'soluciones web', done: false},
];

module.exports = {
    getAll,
    getOne,
    create
};

function create (todo) {
    todos.push(todo);
};

function getAll() {
    return todos;
};

function getOne(id) {
    return todos[id];
};