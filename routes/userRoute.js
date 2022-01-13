const router = require('express').Router();
const { create, getAll, getById } = require('../controllers/userController');
const validate = require('../middlewares/validateUser');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validate.name, validate.email, validate.password, create);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getById);

module.exports = router;