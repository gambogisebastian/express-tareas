const todos = [
    {todo: 'pelar galgos', done: true},
    {todo: 'galgos', done: true},
    {todo: 'soluciones web', done: false},
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return todos;
};

function getOne(id) {
    return todos[id];
};