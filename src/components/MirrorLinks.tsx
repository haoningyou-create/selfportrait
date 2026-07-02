import Link from "next/link";
import { siteMirrors } from "@/lib/mirror-urls";

export default function MirrorLinks() {
  return (
    <div className="flex flex-col items-start gap-1.5 sm:items-end">
      <p className="text-[11px] font-medium uppercase tracking-[0.12em] text-apple-gray">
        国内访问
      </p>
      <Link
        href={siteMirrors.china}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm leading-[1.25] text-apple-blue transition-opacity hover:opacity-70"
      >
        GitHub Pages 镜像 →
      </Link>
    </div>
  );
}
