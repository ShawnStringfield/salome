import { SupabaseAdapter } from '@auth/supabase-adapter';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      profile(profile) {
        return {
          ...profile,
          id: profile.sub,
          image: profile.picture,
        };
      },
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: { 
    async session({session, token}) {
      session.accessToken = token.accessToken;
      session.userID = token.sub;
      return session;
    },
    async signIn({ account, user }) {
      if (account.provider === "google") {
        return user.email_verified;
      }
      return true;
    },
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    }
  },
  adaptor: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),

  secret: process.env.NEXTAUTH_SECRET
};

export const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};