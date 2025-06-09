import { fail, redirect, type Actions } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { connectDB, User } from '$lib/db';

export const actions: Actions = {
  default: async ({ request, cookies }) => {
    const data = await request.formData();
    const email = String(data.get('email'));
    const password = String(data.get('password'));

    await connectDB();
    const user = await User.findOne({ email });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      return fail(400, { error: 'Invalid email or password' });
    }

    cookies.set('userId', user._id.toString(), {
      path: '/',
      httpOnly: true,
      sameSite: 'strict'
    });
    throw redirect(302, '/');
  }
};
