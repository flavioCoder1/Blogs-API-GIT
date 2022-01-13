const { BlogPosts } = require('../../models');

const UNAUTHORIZED_USER = {
  status: 401,
  message: 'Unauthorized user',
};

const NOT_EXIST = (itemName) => ({
  status: 404,
  message: `${itemName} does not exist`,
});

const checkUserLog = async (postId, userCheckId) => {
  const post = await BlogPosts.findByPk(postId);

  if (!post) throw NOT_EXIST('Post');

  const { userId } = post;

  if (userId !== userCheckId) throw UNAUTHORIZED_USER;
};

module.exports = checkUserLog;