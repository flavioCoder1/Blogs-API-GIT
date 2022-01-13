const service = require('../services/categoryService');

const getAll = async (_req, res) => {
  const response = await service.getAll();
  if (!response) return res.status(200).json([]);
  if (response.message) return res.status(500).json(response);
  return res.status(200).json(response);
};

const create = async (req, res) => {
  try {
    const response = await service.create({ name: req.body.name });
    if (response.message) return res.status(500).json(response);
    const { id, name } = response; 
    return res.status(201).json({ id, name });
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = { getAll, create };
