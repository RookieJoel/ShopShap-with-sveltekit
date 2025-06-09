import { redirect } from '@sveltejs/kit';

export function GET({ cookies }) {
  cookies.delete('user', { path: '/' });
  throw redirect(303, '/');
}
