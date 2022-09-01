import type { NextAuthOptions } from "next-auth"
import NextAuth from "next-auth"
import jwt from "jsonwebtoken"

export const authOptions: any = {
  providers: [],
  jwt: {
    async encode({ secret, token }:any) {
      return jwt.sign(token!, secret)
    },
    async decode({ secret, token }:any) {
      return jwt.verify(token, secret)
    },
  },
}

export default NextAuth(authOptions)
