import type { Handle } from '@sveltejs/kit';
import { connectDB } from '$lib/server/db';
import { User } from '$lib/server/models/user';

export const handle: Handle = async ({ event, resolve }) => {
  const id = event.cookies.get('user');
  if (id) {
    await connectDB();
    try {
      const user = await User.findById(id);
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