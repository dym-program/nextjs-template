// app/api/mongodb-test/route.ts
import { NextResponse } from 'next/server';
import dbConnect from '../../../lib/mongodb';
import User from '../../../models/User';

export async function POST() {
  await dbConnect();

  const testUser = new User({
    email: 'test@example.com',
    password: 'password',
    createdAt: new Date(),
  });

  try {
    await testUser.save();
    return NextResponse.json({ message: 'MongoDB 写入成功' });
  } catch (error) {
    return NextResponse.json({ message: 'MongoDB 写入失败' }, { status: 500 });
  }
}
