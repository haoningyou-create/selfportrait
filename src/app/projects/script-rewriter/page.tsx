import ProjectLayout from "@/components/ProjectLayout";
import { FileText, Wand2 } from "lucide-react";

const novelExcerpt = `林晚秋推开那扇斑驳的木门，一股陈年的檀香味扑面而来。

"你终于来了。"坐在窗边的老人缓缓抬头，浑浊的眼中闪过一丝精光，"我等了你整整三年。"

晚秋握紧了手中的信物——那枚在拍卖会上引起轩然大波的翡翠扳指。她不知道的是，这枚扳指背后，隐藏着一个足以颠覆整个古玩界的惊天秘密。

窗外，雨声渐急。`;

const scriptExcerpt = `【场景一：古玩店 · 内 · 夜 · 雨】

▲ 特写：一只纤细的手推开斑驳木门，门轴发出吱呀声。

▲ 檀香味弥漫。镜头缓缓推进，扫过满架古董。

                    老人（O.S.）
          你终于来了。

▲ 窗边，一位白发老人缓缓抬头，眼中精光一闪。

                    老人
          我等了你整整三年。

▲ 林晚秋入画，手中紧握翡翠扳指，指节泛白。

                    林晚秋（内心）
          这枚扳指……真的值得我冒这个险吗？

▲ 窗外雨声渐急，玻璃上水流蜿蜒。`;

export default function ScriptRewriterPage() {
  return (
    <ProjectLayout
      title="Script Rewriter"
      subtitle="LLM 文本结构化工具 · Novel-to-Script Conversion"
    >
      {/* 项目定位 */}
      <section className="mb-16 animate-fade-up opacity-0">
        <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          项目定位
        </h2>
        <p className="max-w-3xl text-lg leading-[1.25] text-apple-black md:text-xl">
          解决内容创作者在短视频、剧本杀赛道中小说转剧本成本高的痛点——长篇网文一键结构化转化为高可用剧本。
        </p>
      </section>

      {/* 核心技术 */}
      <section className="mb-16">
        <h2 className="mb-6 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          核心技术
        </h2>
        <div className="glass-card rounded-3xl border border-black/[0.04] p-8 shadow-sm md:p-10">
          <div className="flex items-start gap-4">
            <Wand2
              size={22}
              className="mt-0.5 shrink-0 text-apple-gray"
              strokeWidth={1.5}
            />
            <p className="text-base leading-[1.25] text-apple-gray md:text-lg">
              调用 LLM API 进行精细化 Prompt
              工程调优，在{" "}
              <span className="font-semibold text-apple-black">3 天内</span>{" "}
              极速落地 Demo，实现长篇网文小说文本向高可用剧本的一键结构化转化。
            </p>
          </div>
        </div>
      </section>

      {/* 双栏文本对比沙盒 */}
      <section>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
              Text Sandbox
            </h2>
            <p className="mt-2 text-base leading-[1.25] text-apple-gray">
              左栏原著 · 右栏 AI 转化剧本
            </p>
          </div>
          <FileText size={18} className="text-apple-gray" strokeWidth={1.5} />
        </div>

        {/*
          ┌─────────────────────────────────────────┐
          │  嵌入接口：替换下方静态文本为动态组件      │
          │  例：<ScriptRewriterSandbox />           │
          └─────────────────────────────────────────┘
        */}
        <div
          id="script-rewriter-sandbox-slot"
          className="overflow-hidden rounded-[2rem] border border-black/[0.06] bg-white shadow-sm"
        >
          {/* 工具栏 */}
          <div className="flex items-center justify-between border-b border-black/[0.06] bg-apple-white/80 px-6 py-3 backdrop-blur-md">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <div className="h-3 w-3 rounded-full bg-[#28c840]" />
            </div>
            <span className="text-[12px] font-medium text-apple-gray">
              Script Rewriter · Demo
            </span>
            <div className="w-[52px]" />
          </div>

          {/* 双栏内容 */}
          <div className="grid md:grid-cols-2">
            {/* 左栏：网文原著 */}
            <div className="border-b border-black/[0.06] md:border-b-0 md:border-r">
              <div className="border-b border-black/[0.04] bg-stone-50/50 px-6 py-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-apple-gray">
                  Input · 网文原著
                </span>
              </div>
              <div className="max-h-[420px] overflow-y-auto p-6 md:p-8">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-[1.25] text-apple-black">
                  {novelExcerpt}
                </pre>
              </div>
            </div>

            {/* 右栏：AI 转化剧本 */}
            <div>
              <div className="border-b border-black/[0.04] bg-amber-50/30 px-6 py-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-apple-gray">
                  Output · AI 转化剧本
                </span>
              </div>
              <div className="max-h-[420px] overflow-y-auto p-6 md:p-8">
                <pre className="whitespace-pre-wrap font-mono text-sm leading-[1.25] text-apple-black">
                  {scriptExcerpt}
                </pre>
              </div>
            </div>
          </div>

          {/* 底部操作栏 */}
          <div className="flex items-center justify-between border-t border-black/[0.06] bg-apple-white/80 px-6 py-4 backdrop-blur-md">
            <span className="text-[12px] text-apple-gray">
              示例文本 · 替换为动态 LLM 输出
            </span>
            <button
              type="button"
              className="rounded-full bg-apple-black px-5 py-2 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-80"
            >
              一键转化
            </button>
          </div>
        </div>
      </section>
    </ProjectLayout>
  );
}
