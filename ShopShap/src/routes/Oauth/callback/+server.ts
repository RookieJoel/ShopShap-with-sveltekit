import { redirect } from '@sveltejs/kit';
import { OAuth2Client } from 'google-auth-library';
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET } from '$env/static/private';
import { connectDB } from '$lib/server/db';
import { User } from '$lib/server/models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const client = new OAuth2Client(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, "http://localhost:5173/oauth/callback");

export const GET = async ({ url, cookies }) => {
  const code = url.searchParams.get('code');
  if (!code) {
    throw redirect(303, '/signup');
  }

  const { tokens } = await client.getToken(code);
  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token ?? '',
    audience: GOOGLE_CLIENT_ID
  });

  const payload = ticket.getPayload();
  const email = payload?.email;
  const name = payload?.name;
  if (!email || !name) {
    throw redirect(303, '/signup');
  }

  await connectDB();
  let user = await User.findOne({ email });
  if (!user) {
    const randomPass = Math.random().toString(36).slice(-8);
    const hashed = await bcrypt.hash(randomPass, 10);
    user = await User.create({ email, name, password: hashed });
  }

  const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
  cookies.set('token', token, { path: '/', httpOnly: true, maxAge: 3600 });

  throw redirect(303, '/');
};
