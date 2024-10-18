// app/api/user/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json({ message: 'Email 参数缺失' }, { status: 400 });
  }

  await dbConnect();

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: '用户不存在' }, { status: 404 });
    }

    return NextResponse.json({
      email: user.email,
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
    });
  } catch (error) {
    return NextResponse.json({ message: '查询失败' }, { status: 500 });
  }
}
