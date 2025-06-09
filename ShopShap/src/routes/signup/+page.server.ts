import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { connectDB, User } from '$lib/db';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = String(data.get('email'));
    const password = String(data.get('password'));

    if (!email || !password) {
      return fail(400, { error: 'Missing email or password' });
    }

    await connectDB();
    const existing = await User.findOne({ email });
    if (existing) {
      return fail(400, { error: 'Email already exists' });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hashed });
    cookies.set('userId', user._id.toString(), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict'
    });
    throw redirect(302, '/');
  }
};
