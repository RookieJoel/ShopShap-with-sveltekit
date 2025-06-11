import type { Handle } from '@sveltejs/kit';
import { connectDB } from '$lib/server/db';
import { User } from '$lib/server/models/user';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get('token');
  if (token) {
    try {
      const payload = jwt.verify(token, JWT_SECRET) as { userId: string };
      await connectDB();
      const user = await User.findById(payload.userId);
      if (user) {
        event.locals.user = {
          id: String(user._id),
          name: user.name,
          email: user.email
        };
      } else {
        event.locals.user = null;
      }
    } catch {
      event.locals.user = null;
    }
  } else {
    event.locals.user = null;
  }

  return resolve(event);
};