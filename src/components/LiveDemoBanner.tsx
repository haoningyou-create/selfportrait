import Link from "next/link";
import { Code2, ExternalLink } from "lucide-react";
import { demoUrls, githubUrls } from "@/lib/demo-urls";

interface LiveDemoBannerProps {
  projectSlug: keyof typeof demoUrls;
  label?: string;
}

export default function LiveDemoBanner({
  projectSlug,
  label = "在线体验",
}: LiveDemoBannerProps) {
  const liveUrl = demoUrls[projectSlug];
  const githubUrl = githubUrls[projectSlug];

  if (!liveUrl && !githubUrl) return null;

  return (
    <div className="mb-10 flex flex-wrap items-center gap-3">
      {liveUrl && (
        <Link
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-apple-black px-5 py-2.5 text-[13px] font-medium text-white transition-opacity duration-300 hover:opacity-80"
        >
          {label}
          <ExternalLink size={14} />
        </Link>
      )}
      {githubUrl && (
        <Link
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white px-5 py-2.5 text-[13px] font-medium text-apple-black transition-colors duration-300 hover:bg-black/[0.02]"
        >
          <Code2 size={14} />
          查看源码
        </Link>
      )}
      {!liveUrl && githubUrl && (
        <span className="text-[12px] leading-[1.25] text-apple-gray">
          Demo 可通过 Vercel 一键部署（见下方说明）
        </span>
      )}
    </div>
  );
}
