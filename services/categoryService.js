const { Categories } = require('../models');

const getAll = async () => {
  try {
    const query = { attributes: { exclude: ['createdAt', 'updatedAt'] }, raw: true };
    const response = await Categories.findAll(query);
    if (!response) return null;
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

const create = async (categoryName) => {
  try {
    const response = await Categories.create(categoryName);
    const { dataValues: { id, name } } = response; 
    return { id, name };
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { getAll, create };
