import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { connectDB } from '$lib/server/db';
import { User } from '$lib/server/models/user';

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
      const user = await User.create({ email, password: hashed });
       cookies.set('user', String(user._id), {
      path: '/',
      httpOnly: true,
      maxAge: 60 * 60 * 1,
    });
      throw redirect(303, '/');
    } catch (err) {
      return fail(400, { message: 'User already exists' });
    }
  }
};
