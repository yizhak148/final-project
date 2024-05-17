import { Router ,Express } from "express";
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());


app.post('/register', registerUser);
app.post('/login', loginUser);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ username, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: 'Failed to register user' });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ where: { email } });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (passwordMatch) {
    const token = jwt.sign({ userId: user.id }, 'secretkey', { expiresIn: '1h' });
    return res.status(200).json({ message: 'Login successful', token });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
};

module.exports = { registerUser, loginUser };
