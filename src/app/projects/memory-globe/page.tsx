import Link from "next/link";
import { ExternalLink } from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";
import { demoUrls, githubUrls } from "@/lib/demo-urls";
import { Globe, Server, Layers } from "lucide-react";

const techDetails = [
  {
    icon: Layers,
    label: "前端",
    value: "Next.js + Tailwind CSS + Three.js",
  },
  {
    icon: Server,
    label: "后端",
    value: "FastAPI · 多城市足迹与时间轴日志持久化",
  },
  {
    icon: Globe,
    label: "模式",
    value: "Vibe Coding 敏捷全栈开发",
  },
];

export default function MemoryGlobePage() {
  const liveUrl = demoUrls["memory-globe"];

  return (
    <ProjectLayout
      title="Memory Globe"
      subtitle="3D 情感空间交互足迹全栈网站"
    >
      {/* 项目定位 */}
      <section className="mb-16 animate-fade-up opacity-0">
        <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          项目定位
        </h2>
        <p className="max-w-3xl text-lg leading-[1.25] text-apple-black md:text-xl">
          实现多城市（长沙、武汉、广州等）旅行数据的可视化——将每一段旅途记忆，映射为可交互的
          3D 情感空间。
        </p>
      </section>

      {/* 核心技术 */}
      <section className="mb-16">
        <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          核心技术
        </h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {techDetails.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-black/[0.04] bg-white px-6 py-5 shadow-sm"
            >
              <item.icon
                size={18}
                className="mb-3 text-apple-gray"
                strokeWidth={1.5}
              />
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-apple-gray">
                {item.label}
              </p>
              <p className="text-sm font-medium leading-[1.25] text-apple-black">
                {item.value}
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
              无需本地环境，直接在浏览器中体验 3D 地球
            </p>
          </div>
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-apple-black px-5 py-2.5 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-80"
            >
              全屏打开
              <ExternalLink size={14} />
            </Link>
          )}
        </div>

        {liveUrl ? (
          <div
            id="memory-globe-canvas-slot"
            className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-black shadow-sm"
          >
            <iframe
              src={liveUrl}
              title="Memory Globe 3D Demo"
              className="h-[min(80vh,720px)] w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
              loading="lazy"
            />
          </div>
        ) : (
          <div
            id="memory-globe-canvas-slot"
            className="relative flex min-h-[520px] items-center justify-center overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-b from-sky-50/50 via-white to-blue-50/30 shadow-sm md:min-h-[640px]"
          >
            <p className="text-sm text-apple-gray">Demo 部署中…</p>
          </div>
        )}

        {githubUrls["memory-globe"] && (
          <p className="mt-4 text-center text-[12px] text-apple-gray">
            源码 ·{" "}
            <Link
              href={githubUrls["memory-globe"]}
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
