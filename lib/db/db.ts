import { MongoClient } from 'mongodb';
import { User } from './models/User';

const mongoUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';
const client = new MongoClient(mongoUrl);

export const connectToDatabase = async () => {
  await client.connect();
  const db = client.db('mydatabase');
  return {
    user: db.collection<User>('users'),
  };
};

// 关闭连接的函数（可选）
export const closeDatabase = async () => {
  await client.close();
};
