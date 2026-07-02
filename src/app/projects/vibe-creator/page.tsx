import Link from "next/link";
import { ExternalLink, Camera, Radio, Music, Sliders, QrCode, Users } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";
import LiveDemoBanner from "@/components/LiveDemoBanner";
import { demoUrls, githubUrls } from "@/lib/demo-urls";

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

const tutorialSteps = [
  {
    icon: Sliders,
    title: "调节 Vibe 滑块",
    description: "拖动中间珍珠质感滑块，在 Breeze / Warm-Up / Bumpy 三档氛围间切换。",
  },
  {
    icon: QrCode,
    title: "扫码参与投票",
    description: "右侧卡片生成二维码，好友扫码进入 H5 页面，从 6 种预设风格中投票。",
  },
  {
    icon: Users,
    title: "应用群体共识",
    description: "点击「应用共识到 Vibe 滑块」，将群友投票结果同步到主屏氛围参数。",
  },
];

export default function VibeCreatorPage() {
  const liveUrl = demoUrls["vibe-creator"];

  return (
    <ProjectLayout
      title="Vibe Creator"
      subtitle="多模态 AI 场景音乐投票系统"
    >
      <LiveDemoBanner projectSlug="vibe-creator" label="全屏打开 Demo" />

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
      <section className="mb-16">
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

      {/* 使用教程 */}
      <section className="mb-16">
        <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          快速上手
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {tutorialSteps.map((step, i) => (
            <div
              key={step.title}
              className="rounded-3xl border border-black/[0.04] bg-white p-7 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-violet-100 text-[12px] font-bold text-violet-600">
                  {i + 1}
                </span>
                <step.icon size={18} className="text-apple-gray" strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-base font-bold leading-[1.25] text-apple-black">
                {step.title}
              </h3>
              <p className="text-sm leading-[1.25] text-apple-gray">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 在线 Demo */}
      <section>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
              Live Demo
            </h2>
            <p className="mt-2 text-base leading-[1.25] text-apple-gray">
              国内可直接访问，无需本地环境
            </p>
          </div>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-apple-black px-5 py-2.5 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-80"
            >
              全屏体验
              <ExternalLink size={14} />
            </Link>
          )}
        </div>

        {liveUrl ? (
          <div
            id="vibe-creator-demo-slot"
            className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-br from-violet-950 via-purple-950 to-black shadow-sm"
          >
            <iframe
              src={liveUrl}
              title="Vibe Creator Interactive Demo"
              className="h-[min(80vh,720px)] w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; camera"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            id="vibe-creator-demo-slot"
            className="flex min-h-[480px] items-center justify-center rounded-[2rem] border border-black/[0.06] bg-gradient-to-br from-violet-50/80 via-white to-purple-50/60 shadow-sm"
          >
            <p className="text-sm text-apple-gray">Demo 部署中…</p>
          </div>
        )}

        {githubUrls["vibe-creator"] && (
          <p className="mt-4 text-center text-[12px] text-apple-gray">
            源码 ·{" "}
            <Link
              href={githubUrls["vibe-creator"]}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-apple-black"
            >
              GitHub
            </Link>
          </p>
        )}
      </section>
    </ProjectLayout>
  );
}
