const router = require('express').Router();
const validate = require('../middlewares/validatePost');
const validateUpdatePost = require('../middlewares/validateUpdatePost');
const { validateToken } = require('../middlewares/validateToken');
const { 
    create, 
    getAll, 
    getPostById, 
    updatePost, 
    deletePost } = require('../controllers/postController');

const validatePost = [validate.title, validate.content, validate.categoryIds];
const valUpdatePost = [
    validateUpdatePost.Title, 
    validateUpdatePost.Content, 
    validateUpdatePost.CategoryIds];

router.post('/', validateToken, validatePost, create);
router.get('/', validateToken, getAll);
router.get('/:id', validateToken, getPostById);
router.put('/:id', validateToken, valUpdatePost, updatePost);
router.delete('/:id', validateToken, deletePost);

module.exports = router;
