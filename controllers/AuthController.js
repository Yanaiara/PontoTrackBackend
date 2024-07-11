const AuthService = require('../services/AuthService');

const register = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await AuthService.createUser({ firstName, lastName, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'User creation failed' });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AuthService.findUserByEmail(email);
    if (user && await AuthService.validatePassword(password, user.password)) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ error: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Login failed' });
  }
};

module.exports = {
  register,
  login
};
