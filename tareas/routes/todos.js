var express = require('express');
var router = express.Router();
var todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
// respetar el orden new, :id. Porque puede tomar la cadena 'new' como parámetro id y ejecutar la ruta show
router.get('/new', todosCtrl.new);
router.get('/:id', todosCtrl.show);
router.post('/', todosCtrl.create);

module.exports = router;
