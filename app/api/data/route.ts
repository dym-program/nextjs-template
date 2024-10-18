import { NextResponse } from 'next/server';
import { getRedisClient } from '../../../lib/redis';

export async function GET() {
  const redis = getRedisClient();

  // 示例：设置和获取数据
  await redis.set('key', 'Hello, Redis!');
  const value = await redis.get('key');

  return NextResponse.json({ message: value });
}
