
// app/page.tsx
"use client";

import { useState } from 'react';
import { Button } from '@shadcn/ui';
import axios from 'axios';

export default function HomePage() {
  const [result, setResult] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [userData, setUserData] = useState<any>(null);

  const handleMongoDBWrite = async () => {
    try {
      const response = await axios.post('/api/mongodb-test');
      setResult(response.data.message);
    } catch (error) {
      setResult('MongoDB 写入失败');
    }
  };

  const handleRedisWrite = async () => {
    try {
      const response = await axios.post('/api/redis-test');
      setResult(response.data.message);
    } catch (error) {
      setResult('Redis 写入失败');
    }
  };

  const handleEmailSearch = async () => {
    try {
      const response = await axios.get(`/api/user?email=${email}`);
      setUserData(response.data);
    } catch (error) {
      setUserData({ message: '查询失败或用户不存在' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-2xl font-bold mb-4">Next.js Template 项目主页</h1>
      <Button className="mb-2" onClick={handleMongoDBWrite}>
        测试 MongoDB 写入
      </Button>
      <Button className="mb-2" onClick={handleRedisWrite}>
        测试 Redis 写入
      </Button>
      {result && <p className="mt-4">{result}</p>}

      <div className="mt-6 w-full max-w-md">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="输入用户邮箱"
          className="w-full p-2 border border-gray-300 rounded mb-2"
        />
        <Button onClick={handleEmailSearch}>查询用户信息</Button>
      </div>
      {userData && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          {userData.message ? (
            <p>{userData.message}</p>
          ) : (
            <div>
              <p>Email: {userData.email}</p>
              <p>创建时间: {new Date(userData.createdAt).toLocaleString()}</p>
              <p>最后登录时间: {new Date(userData.lastLoginAt).toLocaleString()}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
