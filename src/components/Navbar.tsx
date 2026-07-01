"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  variant?: "home" | "project";
}

export default function Navbar({ variant = "home" }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-nav border-b border-black/[0.06] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="group flex flex-col transition-opacity duration-300 hover:opacity-70"
        >
          <span className="text-[15px] font-semibold tracking-tight text-apple-black">
            尤浩宁
          </span>
          <span className="text-[11px] font-medium tracking-wide text-apple-gray">
            Haoning You
          </span>
        </Link>

        <div className="flex items-center gap-8">
          {variant === "home" ? (
            <>
              <a
                href="#works"
                className="hidden text-[13px] font-medium text-apple-gray transition-colors duration-300 hover:text-apple-black sm:block"
              >
                作品集
              </a>
              <a
                href="#about"
                className="hidden text-[13px] font-medium text-apple-gray transition-colors duration-300 hover:text-apple-black sm:block"
              >
                关于
              </a>
            </>
          ) : (
            <Link
              href="/"
              className="text-[13px] font-medium text-apple-gray transition-colors duration-300 hover:text-apple-black"
            >
              ← 返回主页
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
