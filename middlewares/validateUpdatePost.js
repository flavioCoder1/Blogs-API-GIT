const Title = (req, res, next) => {
  const { title } = req.body;
  const messageRequired = '"title" is required';
  if (!title) return res.status(400).json({ message: messageRequired });
  next();
};

const Content = (req, res, next) => {
  const { content } = req.body;
  const messageRequired = '"content" is required';
  if (!content) return res.status(400).json({ message: messageRequired });
  next();
};

const CategoryIds = (req, res, next) => {
  const { categoryIds } = req.body;
  const messageCannotEdit = '"Categories cannot be edited';
  if (categoryIds) return res.status(400).json({ message: messageCannotEdit });
  next();
};

module.exports = {
    Title,
    Content,
    CategoryIds,
};
