const email = (req, res, next) => {
  const user = req.body;
  const emptyMessage = '"email" is not allowed to be empty';
  if (user.email === '') return res.status(400).json({ message: emptyMessage });
  const requiredMessage = '"email" is required';
  if (!user.email) return res.status(400).json({ message: requiredMessage });
  next();
};

const password = (req, res, next) => {
  const user = req.body;
  const emptyMessage = '"password" is not allowed to be empty';
  if (user.password === '') return res.status(400).json({ message: emptyMessage });
  const requiredMessage = '"password" is required';
  if (!user.password) return res.status(400).json({ message: requiredMessage });
  next();
};

module.exports = {
  email,
  password,
};