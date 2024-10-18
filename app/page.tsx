"use client"; // 将整个组件标记为客户端组件
import { useEffect, useState } from 'react';
import CustomButton from '../components/Button';
import { getRedisClient } from '../lib/redis';

export default function Home() {
  const [redisMessage, setRedisMessage] = useState('');
  const [dbStatus, setDbStatus] = useState('未连接到数据库');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // 模拟数据库连接
  useEffect(() => {
    const connectToDatabase = async () => {
      // 假设这里是连接 MongoDB 的逻辑
      const success = true; // 这里可以根据实际连接结果来修改
      if (success) {
        setDbStatus('连接数据库成功');
      }
    };
    connectToDatabase();
  }, []);

  // 注册用户
  const handleRegister = async () => {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (response.ok) {
      setRedisMessage(data.message);
    } else {
      setRedisMessage(`注册失败: ${data.error}`);
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Welcome to Next.js!</h1>
      <p>{dbStatus}</p>
      <div className="mt-6">
        <h2 className="text-2xl">用户注册</h2>
        <input
          type="text"
          placeholder="姓名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="email"
          placeholder="邮箱"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 mr-2"
        />
        <CustomButton onClick={handleRegister}>注册</CustomButton>
      </div>
      {redisMessage && <p className="mt-4">{redisMessage}</p>}
    </main>
  );
}
