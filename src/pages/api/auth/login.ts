import { serialize } from "cookie";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export default function loginHandler(req: NextRequest, res: any) {
  const { email, password }: any = req.body;
  
  if (email === "jesus@jesus.com" && password === "123456") {
    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
        email: "jesus@jesus.com",
        username: "jj",
        role: "ADMIN_ROL" 
      },
      "secret"
    )
    
    const serialised = serialize("myToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30,
      path: "/",
    })
    res.setHeader("Set-Cookie", serialised);
    return res.json("login succesfully");
  }
  return res.status(401).json({error: 'invalid email or password'})
}
