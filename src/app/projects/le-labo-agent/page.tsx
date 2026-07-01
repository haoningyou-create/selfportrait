import ProjectLayout from "@/components/ProjectLayout";
import { Shield, Store, Crown } from "lucide-react";

const strategies = [
  {
    icon: Shield,
    number: "01",
    title: "产品命名隔离",
    description:
      "大众线无编号中性命名，香水主线严格保留专属「香调+编号」命名，保护稀缺性。",
  },
  {
    icon: Store,
    number: "02",
    title: "陈列渠道隔离",
    description:
      "大众护手霜/香薰设置独立子品牌货架或专柜，空间上不与香水主线同区域陈列。",
  },
  {
    icon: Crown,
    number: "03",
    title: "消费权限隔离",
    description:
      "高净值现场调香、停产复古香、嗅觉沙龙全部预约/VVIP 专属，大众线无门槛直接购买。",
  },
];

export default function LeLaboAgentPage() {
  return (
    <ProjectLayout
      title="Le Labo Agent"
      subtitle="高奢沙龙香水品牌 Masstige 扩张策略仿真系统"
    >
      {/* 项目定位 */}
      <section className="mb-20 animate-fade-up opacity-0">
        <h2 className="mb-4 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          项目定位
        </h2>
        <p className="max-w-3xl text-lg leading-[1.25] text-apple-black md:text-xl">
          高奢沙龙香水品牌 Le Labo
          在大规模商业化扩张（Masstige）中，针对高净值用户面临祛魅流失的痛点，构建的{" "}
          <span className="font-semibold">LLM-Agent 决策系统</span>。
        </p>
      </section>

      {/* 硬核行动 */}
      <section className="mb-20">
        <h2 className="mb-8 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          硬核行动
        </h2>

        <div className="space-y-6">
          <div className="glass-card rounded-3xl border border-black/[0.04] p-8 shadow-sm transition-shadow duration-500 hover:shadow-md md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-apple-black text-[12px] font-bold text-white">
                1
              </span>
              <h3 className="text-xl font-bold leading-[1.25] text-apple-black">
                数据清洗与画像
              </h3>
            </div>
            <p className="text-base leading-[1.25] text-apple-gray md:text-lg">
              爬取并清洗小红书、抖音等主流社媒海量评论数据，通过语义分析提取对品牌「独特性、标签感」敏感的核心高净值用户（HNWIs）多维特征。
            </p>
          </div>

          <div className="glass-card rounded-3xl border border-black/[0.04] p-8 shadow-sm transition-shadow duration-500 hover:shadow-md md:p-10">
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-apple-black text-[12px] font-bold text-white">
                2
              </span>
              <h3 className="text-xl font-bold leading-[1.25] text-apple-black">
                Agent 仿真对抗
              </h3>
            </div>
            <p className="text-base leading-[1.25] text-apple-gray md:text-lg">
              基于大语言模型（LLM）对 Agent
              进行垂直领域语料预训练，使其深度模拟真实用户消费心理，并在自动化沙盒中运行{" "}
              <span className="font-semibold text-apple-black">
                100 种商业策略
              </span>{" "}
              的算法对抗。
            </p>
          </div>
        </div>
      </section>

      {/* 三大黄金策略 */}
      <section>
        <h2 className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
          最终选出的 3 大黄金策略
        </h2>
        <p className="mb-10 text-base leading-[1.25] text-apple-gray">
          经 Agent 仿真对抗筛选的最优商业策略组合
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {strategies.map((strategy) => (
            <div
              key={strategy.number}
              className="group rounded-3xl border border-black/[0.04] bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-6 flex items-center justify-between">
                <strategy.icon
                  size={22}
                  className="text-apple-gray transition-colors duration-300 group-hover:text-apple-black"
                  strokeWidth={1.5}
                />
                <span className="text-[11px] font-semibold tracking-[0.15em] text-apple-gray">
                  {strategy.number}
                </span>
              </div>
              <h3 className="mb-3 text-lg font-bold leading-[1.25] text-apple-black">
                {strategy.title}
              </h3>
              <p className="text-sm leading-[1.25] text-apple-gray">
                {strategy.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </ProjectLayout>
  );
}
