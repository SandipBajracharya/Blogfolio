import { validateUser } from '@/db/services/userServices';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password', placeholder: 'Password' },
      },
      async authorize(credentials): Promise<UserResponse | null> {
        if (credentials) {
          const user = await validateUser(credentials);
          if (user) {
            return { id: user.id, email: user.email, fullName: user.fullName };
          } else {
            return null;
          }
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }) {
      // session.user = token.user;
      if (token && token.user) {
        session.user = token.user;
      }
      return Promise.resolve(session);
    },
  },
  pages: {
    signIn: '/auth/signin',
  },
});
