import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

export const connectMongo = async () => {
  if (!client.isConnected()) await client.connect();
  return client.db();
};
