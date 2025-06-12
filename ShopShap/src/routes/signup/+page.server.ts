import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { connectDB } from '$lib/server/db';
import { User } from '$lib/server/models/user';
import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const name = data.get('name');

    if (
      typeof email !== 'string' ||
      typeof password !== 'string' ||
      typeof name !== 'string'
    ) {
      return fail(400, { message: 'Invalid form data' });
    }

    await connectDB();

    const existing = await User.findOne({ email });
    if (existing) {
      return fail(400, { message: 'User already exists' });
    }
    if (password.length < 6) {
      return fail(400, { message: 'Password must be at least 6 characters long' });
    }
    const hashed = await bcrypt.hash(password, 10);
    try {
      const user = await User.create({ email, password: hashed , name});
      console.log('User created:', user);
      const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
      console.log('Token generated:', token);
      cookies.set('token', token, { path: '/', httpOnly: true, maxAge: 3600 });

    }catch (err: any) {
      return fail(400, { message: err.message});
    }

    throw redirect(303, '/login');
    }
};
