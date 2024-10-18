import mysql from 'mysql2/promise';

export const connectMySQL = async () => {
  const connection = await mysql.createConnection(process.env.MYSQL_URI!);
  return connection;
};
