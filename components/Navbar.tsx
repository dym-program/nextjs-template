// components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="w-full p-4 bg-gray-800 text-white">
      <div className="container mx-auto flex justify-between">
        <Link href="/" className="text-lg font-bold">
          Next.js Template
        </Link>
        <div>
          {session ? (
            <div className="flex items-center">
              <span className="mr-4">你好, {session.user?.name || session.user?.email}</span>
              <img
                src={session.user?.image || '/default-avatar.png'}
                alt="头像"
                className="w-8 h-8 rounded-full mr-4"
              />
              <button onClick={() => signOut()} className="bg-red-500 px-4 py-2 rounded">
                登出
              </button>
            </div>
          ) : (
            <>
              <Link href="/register" className="mr-4">
                注册
              </Link>
              <Link href="/api/auth/signin">登录</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
