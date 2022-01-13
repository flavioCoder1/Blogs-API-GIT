const name = (req, res, next) => {
    const { displayName } = req.body;
    const message = '"displayName" length must be at least 8 characters long';
    if (displayName.length < 8) return res.status(400).json({ message });
    next();
  };
  
  const email = (req, res, next) => {
    const user = req.body;
    const messageRequired = '"email" is required';
    if (!user.email) return res.status(400).json({ message: messageRequired });
    const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const messageValid = '"email" must be a valid email';
    if (!re.test(user.email)) return res.status(400).json({ message: messageValid });
    next();
  };
  
  const password = (req, res, next) => {
    const user = req.body;
    const messageRequired = '"password" is required';
    if (!user.password) return res.status(400).json({ message: messageRequired });
    const messageValid = '"password" length must be 6 characters long';
    if (user.password.length !== 6) return res.status(400).json({ message: messageValid });
    next();
  };

  module.exports = {
    name,
    email,
    password,
};