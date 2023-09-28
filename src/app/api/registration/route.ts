import { User } from "next-auth";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
     Credentials({
      credentials: {
          email: {label: 'email', type: 'email'},
          password: {label: 'password', type: 'password'}
      },
      authorize(credentials) {
          console.log(credentials?.password)
          if (credentials?.password === '1') {
              return {} as User
          }
          return null;
      }
      
     })
  ],
  pages: {
      signIn: '/signIn'
  },
  session: {
    strategy: 'jwt',
    maxAge: 60
  }
});

export {handler as POST, handler as GET};