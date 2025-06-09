import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { connectDB } from '$lib/server/db';
import { User } from '$lib/server/models/user';

export const actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    if (typeof email !== 'string' || typeof password !== 'string') {
      return fail(400, { message: 'Invalid form data' });
    }
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) {
      return fail(400, { message: 'Invalid credentials' });
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
      return fail(400, { message: 'Invalid credentials' });
    }
    cookies.set('user', String(user._id), { path: '/' });
    throw redirect(303, '/');
  }
};
