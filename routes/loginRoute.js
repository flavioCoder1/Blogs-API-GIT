const router = require('express').Router();
const validate = require('../middlewares/validateLogin');
const { login } = require('../controllers/loginController');

router.post('/', validate.email, validate.password, login);

module.exports = router;