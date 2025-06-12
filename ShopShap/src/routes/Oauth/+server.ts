import { GOOGLE_CLIENT_ID , GOOGLE_CLIENT_SECRET } from "$env/static/private";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,"http://localhost:5173/oauth/callback");

export function GET() {
  const url = client.generateAuthUrl({
    scope: ['openid', 'profile', 'email'],
    access_type: 'offline'
  });

  return new Response(null, {
    status: 302,
    headers: { Location: url }
  });
}