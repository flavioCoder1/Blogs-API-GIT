const { Users } = require('../models');

const getAll = async () => {
  try {
    const attributes = ['id', 'displayName', 'email', 'image'];
    const users = await Users.findAll({ attributes, raw: true });
    return users;
  } catch (err) {
    return { message: err.message };
  }
};

const getById = async (userId) => {
  try {
    const response = await Users.findByPk(userId);
    if (!response) return null;
    const { id, displayName, email, image } = response;
    return { user: { id, displayName, email, image } };
  } catch (err) {
    return { message: err.message };
  }
};

const getByEmail = async (userEmail) => {
  try {
    const response = await Users.findOne({ where: { email: userEmail }, raw: true });
    if (!response) return null;
    const { id, displayName, email, image } = response;
    return { user: { id, displayName, email, image } };
  } catch (err) {
    return { message: err.message };
  }
};

const create = async (user) => {
  try {
    const response = await Users.create(user);
    const { id, email } = response.dataValues;
    return { id, email };
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { getAll, getById, getByEmail, create };