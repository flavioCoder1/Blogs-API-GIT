require('dotenv').config();
const jwt = require('jsonwebtoken');
const service = require('../services/postService');
const { getByEmail } = require('../services/userService');

const create = async (req, res) => {
  const token = req.headers.authorization;
  try {
    const { title, categoryIds, content } = req.body;

    const verifyCatId = await service.verifyCategory(categoryIds);
    if (!verifyCatId) return res.status(400).json({ message: '"categoryIds" not found' });

    const payload = jwt.verify(token, process.env.JWT_SECRET);
    const { user } = await getByEmail(payload.email);

    const response = await service.create({ title, content, categoryIds, userId: user.id });
    return res.status(201).json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const getAll = async (req, res) => {
  const response = await service.getAll();
  if (!response) return res.status(200).json([]);
  if (response.message) return res.status(500).json(response);
  return res.status(200).json(response);
};

const getPostById = async (req, res) => {
  try {
    const response = await service.getPostById(req.params.id);
    if (!response) return res.status(404).json({ message: 'Post does not exist' });
    return res.status(200).json(response);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const { id: userId } = req.user;

    const updatedPost = await service.updatePost({ id, title, content, userId });

    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { id: userId } = req.user;

    await service.deletePost(id, userId);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};

module.exports = { create, getAll, getPostById, updatePost, deletePost };
