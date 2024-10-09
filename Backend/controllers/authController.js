import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = 'your_jwt_secret_key';

export const registerUser = async (req, res) => {
    const { name, email, password, mobile } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = new User({ name, email, password: hashedPassword, mobile });
        await user.save();
        res.status(201).send('User registered');
    } catch (error) {
        res.status(400).send('Error registering user');
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send('User not found');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send('Invalid credentials');

        const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, user: { name: user.name, email: user.email, mobile: user.mobile, cart: user.cart } });
    } catch (error) {
        res.status(400).send('Error logging in');
    }
};