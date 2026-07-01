export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  href: string;
  accent: string;
}

export const projects: Project[] = [
  {
    slug: "le-labo-agent",
    title: "Le Labo Agent",
    subtitle: "策略仿真系统",
    tagline: "LLM-Agent 驱动的高奢品牌 Masstige 扩张决策",
    href: "/projects/le-labo-agent",
    accent: "from-stone-200 to-stone-100",
  },
  {
    slug: "vibe-creator",
    title: "Vibe Creator",
    subtitle: "场景音乐投票",
    tagline: "多模态 AI 实时群体氛围音乐生成",
    href: "/projects/vibe-creator",
    accent: "from-violet-100 to-purple-50",
  },
  {
    slug: "memory-globe",
    title: "Memory Globe",
    subtitle: "3D 交互足迹",
    tagline: "多城市旅行数据的情感空间可视化",
    href: "/projects/memory-globe",
    accent: "from-sky-100 to-blue-50",
  },
  {
    slug: "script-rewriter",
    title: "Script Rewriter",
    subtitle: "AI 剧本改写器",
    tagline: "网文小说一键结构化转剧本",
    href: "/projects/script-rewriter",
    accent: "from-amber-100 to-orange-50",
  },
];
