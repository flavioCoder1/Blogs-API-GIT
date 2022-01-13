require('dotenv').config();
const req = require('express/lib/request');
const { Users } = require('../models');

const getUserByEmailAndPassword = async (email, password) => {
  try {
    const response = await Users.findOne({ where: { email, password } });
    req.user = response;
    return response;
  } catch (err) {
    return { message: err.message };
  }
};

module.exports = { getUserByEmailAndPassword };