/** 站点镜像地址 — 国内访问请优先使用 GitHub Pages / Gitee 镜像 */
export const siteMirrors = {
  /** 海外访问（Vercel，国内可能较慢或无法打开） */
  global: "https://selfportrait-two.vercel.app",
  /** 国内推荐（GitHub Pages，大陆通常比 vercel.app 更稳定） */
  china:
    process.env.NEXT_PUBLIC_CHINA_MIRROR_URL ||
    "https://haoningyou-create.github.io/selfportrait/",
  /** Gitee 镜像（配置 Secrets 后自动部署，大陆访问最佳） */
  gitee: "https://gitee.com/haoningyou-create/selfportrait/pages",
} as const;
