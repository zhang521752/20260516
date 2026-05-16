# 🎬 漫剧制作工作台 - 部署指南

> 零基础也能跟着做！把漫剧工作台发布到互联网，让任何人都能访问。

---

## 📋 你需要准备什么

- 一台能上网的电脑（Windows / Mac 都行）
- 一个浏览器（推荐 Chrome 或 Edge）
- 大约 20 分钟时间

---

## 🚀 方式一：Vercel 部署（推荐）

Vercel 是一个免费的网站托管平台，部署后你会获得一个 `https://xxx.vercel.app` 网址。

### 第 1 步：注册 GitHub 账号

1. 打开 [https://github.com](https://github.com)
2. 点击右上角 **Sign up**（注册）
3. 填写邮箱、密码、用户名，按提示完成注册
4. 到邮箱里找到验证邮件，点击验证链接

> 💡 **你会看到**：GitHub 首页，右上角有一个小头像图标，说明注册成功了。

### 第 2 步：创建新仓库，上传项目文件

1. 登录 GitHub 后，点击右上角 **+** 号 → **New repository**（新建仓库）
2. 填写信息：
   - **Repository name**：输入 `comic-workbench`（名字随意，英文即可）
   - **Public**（公开）选上 ✅
   - 其他都不用勾
3. 点击 **Create repository**
4. 点击 **uploading an existing file**（上传已有文件）
5. 把 `漫剧工作台` 文件夹里的 **所有文件** 拖进去：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `icons/` 文件夹（连同里面的两个 png 图片）
   - `README.md`（这个文件，可选）
6. 点击底部绿色按钮 **Commit changes**

> 💡 **你会看到**：仓库页面列出了你上传的所有文件，文件名都可以点击查看。

> ⚠️ **注意**：上传 `icons/` 文件夹时，确保里面的 `icon-192.png` 和 `icon-512.png` 都在 `icons/` 目录下，不要放到根目录。

### 第 3 步：注册 Vercel 账号

1. 打开 [https://vercel.com](https://vercel.com)
2. 点击 **Sign Up**（注册）
3. 选择 **Continue with GitHub**（用 GitHub 登录）— 这样最方便！
4. 授权 Vercel 访问你的 GitHub

> 💡 **你会看到**：Vercel 仪表盘页面，上面有 "Add New..." 按钮。

### 第 4 步：一键导入 GitHub 仓库

1. 在 Vercel 仪表盘，点击 **Add New...** → **Project**
2. 找到你刚才创建的 `comic-workbench` 仓库
3. 点击 **Import**（导入）

> 💡 **你会看到**：一个配置页面，有项目名称、Framework Preset 等选项。

### 第 5 步：配置并部署

1. **Framework Preset** 选择 **Other**（其他）— 因为我们的项目是纯 HTML
2. **Build Command** 和 **Output Directory** 都不用填（留空即可）
3. 点击 **Deploy**（部署）🚀

> 💡 **你会看到**：一个带进度动画的部署页面，通常 30 秒内完成。

> 🎉 **部署成功后**：你会看到一个庆祝页面，上面有你的网站地址，类似 `https://comic-workbench-xxx.vercel.app`，点击就能访问了！

### 第 6 步：自定义域名（可选）

如果你有自己的域名（比如 `comic.example.com`），可以绑定：

1. 在 Vercel 项目页面，点击 **Settings** → **Domains**
2. 输入你的域名，点击 **Add**
3. 按照提示去你的域名服务商那里添加 DNS 记录
4. 等待 DNS 生效（通常几分钟到几小时）

> 💡 没有域名也没关系，Vercel 自带的 `.vercel.app` 域名完全够用！

---

## ⚡ 方式二：Bolt.new 部署（最快）

Bolt.new 是一个在线开发平台，适合快速体验。

### 第 1 步：打开 Bolt.new

1. 浏览器访问 [https://bolt.new](https://bolt.new)

> 💡 **你会看到**：一个 AI 对话界面，类似聊天窗口。

### 第 2 步：上传或粘贴项目

**方法 A — 直接描述：**
在对话框中输入：
```
帮我创建一个项目，包含以下文件：
（然后把 index.html、manifest.json、sw.js 的内容依次粘贴进去）
```

**方法 B — 上传文件：**
1. 在对话界面中，找到附件/上传按钮
2. 把 `漫剧工作台` 文件夹中的文件上传

### 第 3 步：一键部署

1. 等待 Bolt.new 完成项目初始化
2. 点击界面上的 **Deploy**（部署）按钮
3. 等待部署完成，获取网址

> 💡 **你会看到**：部署完成后会生成一个访问链接，点击即可打开你的漫剧工作台。

---

## 🔄 如何更新网站内容

当你修改了代码（比如改了 `index.html`），需要更新网站：

### Vercel 方式（自动更新！）

1. 回到你的 GitHub 仓库页面
2. 找到要修改的文件，点击文件名
3. 点击右上角的 **铅笔图标** ✏️（Edit this file）
4. 修改代码
5. 点击绿色按钮 **Commit changes**
6. **等大约 30 秒**，Vercel 会自动检测到更新并重新部署

> 🎯 就这么简单！改完 GitHub，网站自动更新。

### Bolt.new 方式

1. 在 Bolt.new 的对话中告诉 AI 你要改什么
2. 等待 AI 修改并重新部署

---

## ❓ 常见问题

### Q1：部署失败怎么办？

**可能原因和解决方案：**

| 问题 | 解决方案 |
|------|----------|
| 仓库里没有 `index.html` | 检查文件是否成功上传到 GitHub |
| 网页打开是空白 | 打开浏览器控制台（F12）看报错信息 |
| 图标不显示 | 检查 `icons/` 文件夹结构是否正确 |
| Vercel 显示 404 | 确认 Framework 选的是 "Other"，Output Directory 留空 |

### Q2：手机能安装成 App 吗？

可以！这就是 PWA 的好处：

- **安卓 Chrome**：访问网站后，浏览器会提示"添加到主屏幕"，点击即可安装
- **iPhone Safari**：点击底部分享按钮 → "添加到主屏幕"
- 安装后，漫剧工作台会像原生 App 一样运行，没有浏览器地址栏

### Q3：离线能用吗？

部分功能可以。Service Worker 会缓存主页面，但以下功能需要联网：

- AI 辅助功能（需要调用 API）
- CDN 资源加载（React、FFmpeg 等）
- 首次访问需要联网，之后基本页面可以离线打开

### Q4：如何查看部署日志？

在 Vercel 项目页面，点击 **Deployments** 标签，可以看到每次部署的记录和日志。

### Q5：部署后页面样式不对？

确保所有文件都正确上传：
- `index.html` — 主应用
- `manifest.json` — PWA 配置
- `sw.js` — Service Worker
- `icons/icon-192.png` — 小图标
- `icons/icon-512.png` — 大图标

### Q6：想换一个 Vercel 项目名称？

在 Vercel 项目 Settings → General → Project Name 里修改。注意这会改变 `.vercel.app` 的子域名。

---

## 📁 项目文件说明

```
漫剧工作台/
├── index.html          # 主应用（React + TailwindCSS 单文件应用）
├── manifest.json       # PWA 配置（应用名称、图标、主题色）
├── sw.js               # Service Worker（缓存策略、离线支持）
├── icons/
│   ├── icon-192.png    # PWA 图标（192×192，安卓/Chrome 用）
│   └── icon-512.png    # PWA 图标（512×512，启动画面用）
└── README.md           # 本部署指南
```

---

## 🛠 技术栈一览

| 技术 | 用途 |
|------|------|
| React 18 | UI 框架 |
| TailwindCSS | 样式 |
| FFmpeg.wasm | 浏览器端视频合成 |
| Service Worker | 离线缓存 |
| Web App Manifest | PWA 安装支持 |
| IndexedDB (localForage) | 本地数据持久化 |

---

## 📝 许可

本项目仅供学习交流使用。
