const router = require('express').Router();
const { create, getAll } = require('../controllers/categoryController');
const validate = require('../middlewares/validateCategory');
const { validateToken } = require('../middlewares/validateToken');

router.post('/', validateToken, validate.category, create);
router.get('/', validateToken, getAll);

module.exports = router;
