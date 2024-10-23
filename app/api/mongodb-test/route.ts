// app/api/mongodb-test/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { email, password } = await request.json();

    // 数据验证（简化示例）
    if (!email || !password) {
      return NextResponse.json(
        { message: '邮箱和密码不能为空' },
        { status: 400 } // 400 Bad Request
      );
    }

    // 检查用户是否已存在
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: '账号已存在' },
        { status: 409 } // 409 Conflict
      );
    }

    // 对密码进行哈希加密（使用 bcrypt）
    const hashedPassword = await bcrypt.hash(password, 10);

    // 创建新用户
    const newUser = new User({
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    await newUser.save();
    return NextResponse.json(
      { message: '用户注册成功' },
      { status: 201 } // 201 Created
    );
  } catch (error: any) {
    console.error('错误信息：', error);
    return NextResponse.json(
      { message: '服务器错误', error: error.message },
      { status: 500 }
    );
  }
}
