const todos = [
    {todo: 'pelar galgos', done: true},
    {todo: 'galgos', done: true},
    {todo: 'soluciones web', done: false},
];

module.exports = {
    getAll
};

function getAll() {
    return todos;
};