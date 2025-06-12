import { GOOGLE_CLIENT_ID , GOOGLE_CLIENT_SECRET, REDIRECT_URI } from "$env/static/private";
import { OAuth2Client } from "google-auth-library";

const client = new OAuth2Client(GOOGLE_CLIENT_ID,GOOGLE_CLIENT_SECRET,REDIRECT_URI);

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