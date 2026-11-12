# OnePiece

一个无需安装依赖、无需构建的静态首页。双击 `index.html` 即可本地预览。

## 本地与 GitHub

仓库：https://github.com/Gawainlizheng/onepiece

本地目录：`D:\Gawain\Project\OnePiece`

后续修改网页后，在此目录的终端执行：

```powershell
git add .
git commit -m "Update website"
git push
```

Cloudflare Pages 连接此仓库后，每次推送到 `main` 都会自动部署。

## Cloudflare Pages 设置

- 连接仓库：`Gawainlizheng/onepiece`
- 生产分支：选择仓库的默认分支（通常为 `main`）
- 框架预设：`None`
- 构建命令：留空
- 构建输出目录：`/`

部署成功后，在 Pages 项目的 **Custom domains** 中添加自己的域名。

## 多语言

- 支持简体中文、英文和日文，顶部选择器可随时切换。
- 首次访问调用 `/api/language`，通过 Cloudflare `request.cf.country` 判断：`CN` → 简体中文，`JP` → 日文，其他或未知 → 英文。
- 手动选择保存在当前域名的浏览器 localStorage 中，优先于 IP 判断；两个域名分别保存偏好。
- `functions/api/language.js` 随 Git 自动部署；`_routes.json` 仅让语言接口调用 Function，其余页面和图片保持静态托管。
- 不保存 IP，接口响应禁止缓存；请求失败默认英文。VPN 会影响国家判断。
- 本地直接打开 HTML 不具备 Cloudflare 国家信息，可使用选择器预览各语言。
