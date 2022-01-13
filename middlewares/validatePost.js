const title = (req, res, next) => {
  const post = req.body;
  const messageRequired = '"title" is required';
  if (!post.title) return res.status(400).json({ message: messageRequired });
  next();
};

const content = (req, res, next) => {
  const post = req.body;
  const messageRequired = '"content" is required';
  if (!post.content) return res.status(400).json({ message: messageRequired });
  next();
};

const categoryIds = (req, res, next) => {
  const post = req.body;
  const messageRequired = '"categoryIds" is required';
  if (!post.categoryIds) return res.status(400).json({ message: messageRequired });
  next();
};

module.exports = {
  title,
  content,
  categoryIds,
};