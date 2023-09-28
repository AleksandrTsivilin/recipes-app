import {AuthOptions, User} from 'next-auth';
import Credentials from 'next-auth/providers/credentials';


export const authConfig: AuthOptions = {
    providers: [
       Credentials({
        credentials: {
            email: {label: 'email', type: 'email'},
            password: {label: 'password', type: 'password'}
        },
        authorize(credentials) {
            console.log('credentials?.password', credentials?.email)
            if (credentials?.password === '1') {
                return {email: credentials.email} as User
            }
            return null;
        },
        
       })
    ],
    pages: {
        signIn: '/signIn'
    }
}