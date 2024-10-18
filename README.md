# Next.js 14 项目模板

这个模板旨在帮助你快速启动新的项目，集成了常用的技术栈和功能模块，代码简洁、结构清晰，便于维护和扩展。

## 功能特性

- **Next.js 14 (App Router 模式)**：利用最新的 Next.js 功能，实现服务端渲染和静态网站生成。
- **TypeScript**：使用 TypeScript 提供静态类型支持，提高代码可靠性和可维护性。
- **Shadcn-UI**：集成预设的 UI 组件，加速界面开发。
- **MongoDB 集成**：内置对 MongoDB 的支持，作为主要数据库。
- **Redis 集成**：包括 Redis，用于缓存和会话管理。
- **Tailwind CSS**：使用实用程序优先的 CSS 框架，快速构建响应式界面。
- **ESLint**：配置了宽松规则的 ESLint，保证代码质量的同时不影响开发效率。
- **Yarn**：使用 Yarn 作为包管理工具，提高依赖管理效率。

## 主要功能

### 主页

- **数据库测试按钮**：
  - 测试 MongoDB 写入操作。
  - 测试 Redis 写入操作。
- **Email 查询**：
  - 输入 email，查询 MongoDB 中的用户数据并返回结果。
- **用户信息显示**：
  - 登录成功后，右上角显示账户名称（邮箱或第三方平台的 ID）和头像。
  - 注册用户将使用默认头像。

### 用户认证

- **注册模块**：
  - 提供用户注册功能，信息写入 MongoDB。
- **社交登录**：
  - 支持 Facebook、GitHub、Google 登录，功能模块化。
- **数据存储**：
  - 用户的认证信息存储在 MongoDB 中。

### 数据库结构

- **用户集合** (`users`)：
  - `email`：用户邮箱。
  - `password`：用户密码（需加密存储）。
  - `createdAt`：账户创建时间。
  - `lastLoginAt`：最后登录时间。

## 目录结构

- **`app`**：Next.js 的主应用目录。
  - **`page.tsx`**：主页组件。
  - **`api`**：后端 API 路由。
- **`components`**：通用 React 组件。
- **`lib`**：辅助函数和库。
- **`public`**：静态资源。
- **`styles`**：全局样式文件。
- **`config`**：配置文件，例如数据库连接配置。
- **`middleware`**：中间件配置。
- **`types`**：TypeScript 类型定义。

## 快速开始

1. **克隆仓库**：

   ```bash
   git clone https://github.com/yourusername/your-template.git
   ```

2. **安装依赖**：

   ```bash
   yarn install
   ```

3. **配置环境变量**：

   在项目根目录下创建 `.env.local` 文件，添加以下内容：

   ```env
   MONGODB_URI=你的MongoDB连接字符串
   REDIS_URI=你的Redis连接字符串
   NEXTAUTH_SECRET=用于加密的密钥
   FACEBOOK_CLIENT_ID=你的Facebook应用ID
   FACEBOOK_CLIENT_SECRET=你的Facebook应用密钥
   GITHUB_CLIENT_ID=你的GitHub客户端ID
   GITHUB_CLIENT_SECRET=你的GitHub客户端密钥
   GOOGLE_CLIENT_ID=你的Google客户端ID
   GOOGLE_CLIENT_SECRET=你的Google客户端密钥
   ```

4. **运行开发服务器**：

   ```bash
   yarn dev
   ```

5. **打开浏览器访问**：

   在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看效果。

## 项目截图

（此处可添加项目的截图，展示主页、登录页等）

## 贡献指南

欢迎提交问题和拉取请求！请确保在提交之前运行了所有测试并遵循项目的代码风格。

## 许可证

本项目采用 MIT 许可证。
