import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "./Navbar";

interface ProjectLayoutProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

export default function ProjectLayout({
  title,
  subtitle,
  children,
}: ProjectLayoutProps) {
  return (
    <div className="min-h-screen bg-apple-white">
      <Navbar variant="project" />

      <main className="mx-auto max-w-5xl px-6 pb-24 pt-28 md:px-10 md:pt-36">
        <Link
          href="/#works"
          className="group mb-10 inline-flex items-center gap-2 text-[13px] font-medium text-apple-gray transition-colors duration-300 hover:text-apple-black"
        >
          <ArrowLeft
            size={14}
            className="transition-transform duration-300 group-hover:-translate-x-0.5"
          />
          全部作品
        </Link>

        <header className="mb-16 animate-fade-up opacity-0">
          <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.2em] text-apple-gray">
            Project
          </p>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-[1.1] tracking-tight text-apple-black">
            {title}
          </h1>
          <p className="mt-4 text-xl font-medium leading-[1.25] text-apple-gray md:text-2xl">
            {subtitle}
          </p>
          <div className="gradient-line mt-10 w-full max-w-xs" />
        </header>

        {children}
      </main>
    </div>
  );
}
