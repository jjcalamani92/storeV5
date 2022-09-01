
import {verify} from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export default function profileHandler(req: NextRequest, res: any) {
  const {myToken}:any = req.cookies
  const user = verify(myToken, 'secret')
  console.log(user);
  
  return res.json({user: user})
}
