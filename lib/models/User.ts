import { z } from 'zod';

// 定义用户表的结构
export const UserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6), // 假设密码最小长度为6
  name: z.string().min(1),
});

// 用户模型类型
export type User = z.infer<typeof UserSchema>;
