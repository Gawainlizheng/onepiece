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
