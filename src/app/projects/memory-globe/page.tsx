import ProjectLayout from "@/components/ProjectLayout";
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

      {/* Three.js Canvas 嵌入区 */}
      <section>
        <div className="mb-6">
          <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
            3D Globe Canvas
          </h2>
          <p className="mt-2 text-base leading-[1.25] text-apple-gray">
            将本地 Three.js 地球代码嵌入下方容器
          </p>
        </div>

        {/*
          ┌─────────────────────────────────────────┐
          │  嵌入接口：在此处 import 并渲染 3D 地球   │
          │  例：<MemoryGlobeCanvas />               │
          └─────────────────────────────────────────┘
        */}
        <div
          id="memory-globe-canvas-slot"
          className="relative overflow-hidden rounded-[2rem] border border-black/[0.06] bg-gradient-to-b from-sky-50/50 via-white to-blue-50/30 shadow-sm"
        >
          <div className="relative flex min-h-[520px] items-center justify-center md:min-h-[640px]">
            {/* 加载骨架屏 */}
            <div className="flex flex-col items-center gap-8">
              {/* 地球骨架 */}
              <div className="relative">
                <div className="h-48 w-48 animate-shimmer rounded-full md:h-56 md:w-56" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-globe-spin h-40 w-40 rounded-full border border-sky-200/60 md:h-48 md:w-48">
                    <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-sky-300/40 to-transparent" />
                    <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-sky-300/40 to-transparent" />
                  </div>
                </div>
                <Globe
                  size={32}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sky-400/60"
                  strokeWidth={1.5}
                />
              </div>

              {/* 城市标签骨架 */}
              <div className="flex gap-3">
                {["长沙", "武汉", "广州"].map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-black/[0.06] bg-white/80 px-4 py-1.5 text-[12px] font-medium text-apple-gray backdrop-blur-md"
                  >
                    {city}
                  </span>
                ))}
              </div>

              {/* 加载提示 */}
              <div className="text-center">
                <p className="text-sm font-medium leading-[1.25] text-apple-gray">
                  Three.js Canvas 渲染容器
                </p>
                <p className="mt-2 text-[12px] leading-[1.25] text-apple-gray/70">
                  嵌入锚点 ·{" "}
                  <code className="rounded-md bg-black/[0.04] px-1.5 py-0.5 font-mono text-[11px]">
                    #memory-globe-canvas-slot
                  </code>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
