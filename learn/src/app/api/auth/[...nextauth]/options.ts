import type {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import Credentials from "next-auth/providers/credentials";

const authConfig:NextAuthOptions = {
    providers:[
        GoogleProvider({
            clientId:process.env.CLIENT_ID!,
            clientSecret:process.env.CLIENT_SECRET!
        }),
        Credentials({
            credentials:{
                email:{
                    label:'Ваша почта',
                    placeholder:'Введите вашу почту...',
                    type:'email'
                },
                password:{
                    label:'Ваш пароль',
                    placeholder:'Введите пароль...',
                    type:'password'
                }
            },
            async authorize(credentials){
                if(!credentials.name || !credentials.email) return null;

                const currentUser = users.find(user => user.email === credentials.email)

                if(currentUser && currentUser.password === credentials.password ) {
                    const {  password, ...user } = currentUser
                }

                return null
            }


        })
    ]
}

export default authConfig;