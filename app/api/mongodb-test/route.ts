// app/api/redis-test/route.ts
import { NextResponse } from 'next/server';
import redis from '../../../lib/redis';

export async function POST() {
  try {
    await redis.set('test_key', 'test_value', 'EX', 60); // 设置一个带过期时间的键
    return NextResponse.json({ message: 'Redis 写入成功' });
  } catch (error) {
    return NextResponse.json({ message: 'Redis 写入失败' }, { status: 500 });
  }
}
