import ProjectLayout from "@/components/ProjectLayout";
import { Camera, Radio, Music, Sparkles } from "lucide-react";

const techStack = [
  {
    icon: Camera,
    title: "环境视觉感知",
    description:
      "利用移动端传感器/摄像头扫描物理环境，提取视觉特征并通过 AI 转化为文本 Prompt。",
  },
  {
    icon: Radio,
    title: "实时投票漏斗",
    description:
      "通过 WebSockets 协议构建实时的场内群体多维投票漏斗，秒级汇聚偏好数据。",
  },
  {
    icon: Music,
    title: "AI 音乐生成",
    description:
      "联动 AI 音乐生成模型，根据群体投票结果秒级生成并播放环境背景音乐。",
  },
];

export default function VibeCreatorPage() {
  return (
    <ProjectLayout
      title="Vibe Creator"
      subtitle="多模态 AI 场景音乐投票系统"
    >
      {/* 项目定位 */}
      <section className="mb-16 animate-fade-up opacity-0">
        <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          项目定位
        </h2>
        <p className="max-w-3xl text-lg leading-[1.25] text-apple-black md:text-xl">
          解决派对、沙龙等社交场景中环境氛围难以迎合群体实时偏好的痛点——让在场每个人的审美，共同定义此刻的音乐。
        </p>
      </section>

      {/* 核心技术 */}
      <section className="mb-20">
        <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          核心技术
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {techStack.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-black/[0.04] bg-white p-7 shadow-sm"
            >
              <item.icon
                size={20}
                className="mb-4 text-apple-gray"
                strokeWidth={1.5}
              />
              <h3 className="mb-2 text-base font-bold leading-[1.25] text-apple-black">
                {item.title}
              </h3>
              <p className="text-sm leading-[1.25] text-apple-gray">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Demo 嵌入区 */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
              Interactive Demo
            </h2>
            <p className="mt-2 text-base leading-[1.25] text-apple-gray">
              将本地交互 Demo 组件嵌入下方区域
            </p>
          </div>
          <Sparkles size={18} className="text-apple-gray" strokeWidth={1.5} />
        </div>

        {/*
          ┌─────────────────────────────────────────┐
          │  嵌入接口：在此处 import 并渲染你的 Demo   │
          │  例：<VibeCreatorDemo />                  │
          └─────────────────────────────────────────┘
        */}
        <div
          id="vibe-creator-demo-slot"
          className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-br from-violet-50/80 via-white to-purple-50/60 shadow-sm"
        >
          {/* 流线型装饰背景 */}
          <div className="pointer-events-none absolute inset-0">
            <svg
              className="absolute -right-20 -top-20 h-[400px] w-[400px] opacity-[0.07]"
              viewBox="0 0 400 400"
              fill="none"
            >
              <path
                d="M0 200C100 100 200 300 400 200"
                stroke="currentColor"
                strokeWidth="2"
                className="text-violet-600"
              />
              <path
                d="M0 250C150 150 250 350 400 250"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-purple-400"
              />
            </svg>
          </div>

          {/* Mockup 播放器占位 */}
          <div className="relative flex min-h-[480px] flex-col items-center justify-center p-8 md:min-h-[560px] md:p-12">
            {/* 播放器 UI 骨架 */}
            <div className="w-full max-w-lg">
              <div className="glass-card rounded-3xl border border-black/[0.04] p-8 shadow-sm backdrop-blur-md">
                <div className="mb-8 flex items-center justify-center">
                  <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-violet-100 to-purple-50 shadow-inner">
                    <Music
                      size={36}
                      className="text-violet-400"
                      strokeWidth={1.5}
                    />
                    <div className="absolute inset-0 animate-pulse-soft rounded-full border border-violet-200/50" />
                  </div>
                </div>

                <div className="mb-6 space-y-2 text-center">
                  <div className="mx-auto h-4 w-40 animate-shimmer rounded-full" />
                  <div className="mx-auto h-3 w-28 animate-shimmer rounded-full" />
                </div>

                {/* 进度条 */}
                <div className="mb-6 h-1 overflow-hidden rounded-full bg-black/[0.04]">
                  <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-400 to-purple-400" />
                </div>

                {/* 控制按钮 */}
                <div className="flex items-center justify-center gap-6">
                  <div className="h-10 w-10 rounded-full bg-black/[0.04]" />
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-apple-black shadow-md">
                    <div className="ml-0.5 h-0 w-0 border-y-[8px] border-l-[14px] border-y-transparent border-l-white" />
                  </div>
                  <div className="h-10 w-10 rounded-full bg-black/[0.04]" />
                </div>
              </div>

              <p className="mt-8 text-center text-[13px] leading-[1.25] text-apple-gray">
                Demo 组件嵌入区 ·{" "}
                <code className="rounded-md bg-black/[0.04] px-1.5 py-0.5 font-mono text-[11px]">
                  #vibe-creator-demo-slot
                </code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
