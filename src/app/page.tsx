import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-apple-white">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pb-20 pt-32 md:px-10 md:pb-32 md:pt-44">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-white to-stone-200/40 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-sky-100/30 to-transparent blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="animate-fade-up opacity-0">
            <p className="mb-6 text-[13px] font-semibold uppercase tracking-[0.25em] text-apple-gray">
              Portfolio · 2026
            </p>
          </div>

          <h1 className="animate-fade-up stagger-1 max-w-4xl text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[1.05] tracking-tight text-apple-black opacity-0">
            尤浩宁
          </h1>
          <p className="animate-fade-up stagger-2 mt-2 text-[clamp(1.5rem,3vw,2.5rem)] font-semibold leading-[1.25] tracking-tight text-apple-gray opacity-0">
            Haoning You
          </p>

          <div className="animate-fade-up stagger-3 mt-12 max-w-2xl opacity-0">
            <p className="text-lg font-medium leading-[1.25] text-apple-black md:text-xl">
              香港中文大学 × 香港中文大学（深圳）
            </p>
            <p className="mt-2 text-lg font-medium leading-[1.25] text-apple-gray md:text-xl">
              2+2 联合培养计划
            </p>
          </div>

          <div className="animate-fade-up stagger-4 mt-8 max-w-2xl opacity-0">
            <p className="text-base leading-[1.25] text-apple-gray md:text-lg">
              跨学科数据分析{" "}
              <span className="font-semibold text-apple-black">(IDA)</span> ×
              市场营销{" "}
              <span className="font-semibold text-apple-black">(MKT)</span>{" "}
              双学位
            </p>
          </div>

          <div className="gradient-line mt-14 max-w-md" />

          <p className="animate-fade-up mt-10 max-w-2xl text-lg leading-[1.25] text-apple-gray opacity-0 md:text-xl">
            主攻全栈敏捷开发（
            <span className="font-semibold text-apple-black">Vibe Coding</span>
            ）与生成式 AI 策略仿真。打破技术与商业壁垒，致力于成为 AI
            时代的{" "}
            <span className="font-semibold text-apple-black">
              技术 × 商业超级个体
            </span>
            。
          </p>
        </div>
      </section>

      {/* Works Grid */}
      <section id="works" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex items-end justify-between">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
                Selected Works
              </p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold leading-[1.1] tracking-tight text-apple-black">
                作品集
              </h2>
            </div>
            <p className="hidden text-sm leading-[1.25] text-apple-gray md:block">
              4 Projects
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {projects.map((project, index) => (
              <Link
                key={project.slug}
                href={project.href}
                className={`group relative overflow-hidden rounded-3xl border border-black/[0.04] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md md:p-10 animate-fade-up opacity-0 stagger-${index + 1}`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative">
                  <div className="mb-6 flex items-start justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-apple-gray">
                      0{index + 1}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-apple-gray transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-apple-black"
                    />
                  </div>

                  <h3 className="text-2xl font-bold leading-[1.15] tracking-tight text-apple-black md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-base font-medium leading-[1.25] text-apple-gray">
                    {project.subtitle}
                  </p>
                  <p className="mt-4 text-sm leading-[1.25] text-apple-gray">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="gradient-line mb-14 w-full" />

          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
                About
              </p>
              <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] font-bold leading-[1.15] tracking-tight text-apple-black">
                技术 × 商业
                <br />
                超级个体
              </h2>
            </div>
            <div className="space-y-5 text-base leading-[1.25] text-apple-gray md:text-lg">
              <p>
                在香港中文大学与香港中文大学（深圳）的 2+2
                联合培养体系中，我同时深耕数据分析与市场策略两个维度，将
                LLM、Agent 仿真与全栈开发能力融入真实商业场景。
              </p>
              <p>
                从 Le Labo 品牌策略仿真到 3D
                情感足迹可视化，每一个项目都遵循同一理念：用技术验证商业直觉，用数据驱动创意决策。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/[0.06] px-6 py-10 md:px-10">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <p className="text-sm leading-[1.25] text-apple-gray">
            © 2026 尤浩宁 · Haoning You
          </p>
          <p className="text-sm leading-[1.25] text-apple-gray">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
