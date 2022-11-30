import NextAuth, { Profile } from 'next-auth';
import { OAuthConfig } from 'next-auth/providers';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }) as OAuthConfig<Profile>,
  ],
  secret: process.env.JWT_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  jwt: { secret: process.env.SECRET },
  callbacks: {},
});
