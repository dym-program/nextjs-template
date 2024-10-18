import { NextResponse } from 'next/server';
import { connectToDatabase } from '../../../../lib/db';
import { getRedisClient } from '../../../../lib/redis';
import { UserSchema } from '../../../../lib/models/User';

export async function POST(req: Request) {
  const redis = getRedisClient();
  const data = await req.json();

  // 验证数据
  const result = UserSchema.safeParse(data);
  if (!result.success) {
    return NextResponse.json({ error: result.error.format() }, { status: 400 });
  }

  const userData = result.data;
  const { user } = await connectToDatabase();

  // 插入用户数据到数据库
  await user.insertOne(userData);

  // 将用户数据存入 Redis
  await redis.hmset(`user:${userData.email}`, userData);

  return NextResponse.json({ message: '用户注册成功' });
}
