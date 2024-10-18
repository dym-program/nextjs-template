// app/api/register/route.ts
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import dbConnect from '../../lib/mongodb';
import User from '../../models/User';

export async function POST(request: Request) {
  const { email, password } = await request.json();

  await dbConnect();

  // 检查用户是否已经存在
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: '用户已存在' }, { status: 400 });
  }

  // 加密用户密码
  const hashedPassword = await bcrypt.hash(password, 10);

  // 创建新用户
  const newUser = new User({ email, password: hashedPassword, createdAt: new Date() });
  await newUser.save();

  return NextResponse.json({ message: '注册成功' });
}
