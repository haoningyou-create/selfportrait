import Link from "next/link";
import {
  ExternalLink,
  Globe,
  Server,
  Layers,
  MousePointer2,
  MapPin,
  Settings2,
  Music2,
  Download,
  Map,
  Keyboard,
} from "lucide-react";
import ProjectLayout from "@/components/ProjectLayout";
import { demoUrls, githubUrls } from "@/lib/demo-urls";

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

const tutorialSections = [
  {
    icon: MousePointer2,
    title: "探索地球",
    steps: [
      "拖拽旋转地球，滚轮或双指缩放视角",
      "点击发光标记点，相机会自动飞入该城市",
      "左侧面板列出所有足迹，点击可快速跳转",
      "点击左下角「中国」按钮，切换至中国地图精细视图",
    ],
  },
  {
    icon: MapPin,
    title: "查看记忆",
    steps: [
      "飞入标记点后，右侧弹出记忆面板",
      "面板展示地点、日期、标题、故事与照片轮播",
      "点击照片进入全屏浏览，支持 ← → 键切换",
    ],
  },
  {
    icon: Settings2,
    title: "编辑模式",
    steps: [
      "点击右上角齿轮图标，开启 Edit Mode",
      "长按齿轮 2 秒，可快速切换编辑模式（隐藏快捷键）",
      "编辑模式下：点击地球任意位置添加新足迹",
      "点击已有标记可编辑或删除；底部工具栏支持 + Add 手动录入",
      "Export JSON 导出备份，Import 导入恢复，Reset 重置全部数据",
    ],
  },
  {
    icon: Music2,
    title: "背景音乐",
    steps: [
      "右下角播放器默认静音，点击即可播放环境音",
      "适合在展示旅行记忆时营造氛围感",
    ],
  },
];

const shortcuts = [
  { keys: "拖拽", action: "旋转地球" },
  { keys: "滚轮 / 双指", action: "缩放视角" },
  { keys: "← →", action: "全屏照片切换" },
  { keys: "长按齿轮 2s", action: "快捷进入编辑模式" },
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

      {/* 使用教程 */}
      <section className="mb-20">
        <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          How to Use
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-[1.25] text-apple-gray md:text-lg">
          打开下方 Demo 后，按以下步骤操作即可完整体验 3D 足迹交互。
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {tutorialSections.map((section) => (
            <div
              key={section.title}
              className="rounded-3xl border border-black/[0.04] bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-apple-black/5">
                  <section.icon
                    size={18}
                    className="text-apple-black"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="text-lg font-bold leading-[1.25] text-apple-black">
                  {section.title}
                </h3>
              </div>
              <ol className="space-y-3">
                {section.steps.map((step, i) => (
                  <li
                    key={step}
                    className="flex gap-3 text-sm leading-[1.25] text-apple-gray"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black/[0.04] text-[11px] font-semibold text-apple-black">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>

        {/* 快捷操作 */}
        <div className="mt-5 rounded-3xl border border-black/[0.04] bg-gradient-to-br from-sky-50/60 via-white to-blue-50/40 p-8 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <Keyboard size={18} className="text-apple-gray" strokeWidth={1.5} />
            <h3 className="text-base font-bold leading-[1.25] text-apple-black">
              快捷操作一览
            </h3>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {shortcuts.map((item) => (
              <div
                key={item.keys}
                className="flex items-center justify-between rounded-2xl border border-black/[0.04] bg-white/80 px-4 py-3 backdrop-blur-sm"
              >
                <span className="font-mono text-[12px] font-medium text-apple-black">
                  {item.keys}
                </span>
                <span className="text-[12px] text-apple-gray">{item.action}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 数据说明 */}
        <div className="mt-5 flex gap-4 rounded-3xl border border-black/[0.04] bg-white p-6 shadow-sm md:p-8">
          <Download
            size={20}
            className="mt-0.5 shrink-0 text-apple-gray"
            strokeWidth={1.5}
          />
          <div>
            <h3 className="mb-2 text-base font-bold leading-[1.25] text-apple-black">
              数据持久化
            </h3>
            <p className="text-sm leading-[1.25] text-apple-gray">
              所有足迹数据保存在浏览器{" "}
              <code className="rounded-md bg-black/[0.04] px-1.5 py-0.5 font-mono text-[11px]">
                localStorage
              </code>
              中，无需服务器即可离线使用。编辑模式下可通过 Export / Import
              JSON 备份与迁移数据，图片会自动压缩至 1200px 以内存储。
            </p>
          </div>
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
