// app/not-found.tsx

import Link from "next/link";
import {
  ArrowLeft,
  BookOpen,
  GraduationCap,
  Headphones,
  Home,
  SearchX,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

/* =========================================================
   QUICK LINKS
========================================================= */

const quickLinks = [
  {
    title: "Explore Programs",
    description:
      "Discover online MBA, DBA, AI, Data Science and executive programs.",
    href: "/#premium-programs",
    icon: BookOpen,
  },
  {
    title: "Top Universities",
    description:
      "Explore programs from leading Indian and international institutions.",
    href: "/#prestigious-institutions",
    icon: GraduationCap,
  },
  {
    title: "Contact Experts",
    description:
      "Connect with our academic counsellors for personalised guidance.",
    href: "/#contact",
    icon: Headphones,
  },
];

/* =========================================================
   404 PAGE
========================================================= */

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f8fafc] px-4 py-16 sm:px-6 lg:px-8">
      {/* =====================================================
          DECORATIVE BACKGROUND
      ====================================================== */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#FFC107]/15 blur-3xl" />

        <div className="absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#1C3569]/10 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-48 w-48 -translate-x-1/2 rounded-full bg-[#005382]/5 blur-3xl" />
      </div>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-5xl">
        <Card className="overflow-hidden rounded-[28px] border border-slate-200/80 bg-white/95 shadow-2xl backdrop-blur">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* =================================================
                  LEFT CONTENT
              ================================================== */}

              <section className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
                <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#FFC107]/40 bg-[#FFC107]/10 px-4 py-2">
                  <SearchX
                    size={17}
                    className="text-[#8B7500]"
                    aria-hidden="true"
                  />

                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#8B7500]">
                    Page not found
                  </span>
                </div>

                <p className="text-[70px] font-black leading-none text-[#1C3569] sm:text-[96px]">
                  404
                </p>

                <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#172554] sm:text-4xl">
                  We couldn&apos;t find this page
                </h1>

                <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                  The page you are looking for may have been moved, renamed,
                  deleted, or the URL may be incorrect. Return to the homepage
                  or explore our online programs.
                </p>

                {/* =============================================
                    ACTION BUTTONS
                ============================================== */}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="h-12 cursor-pointer rounded-xl bg-[#FFC107] px-6 font-bold text-black shadow-md transition hover:bg-[#e6af06]"
                  >
                    <Link href="/">
                      <Home size={18} aria-hidden="true" />
                      Back to Home
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    className="h-12 cursor-pointer rounded-xl border-2 border-[#1C3569]/15 px-6 font-bold text-[#1C3569] transition hover:border-[#1C3569]/30 hover:bg-[#1C3569]/5"
                  >
                    <Link href="/#premium-programs">
                      <ArrowLeft size={18} aria-hidden="true" />
                      Explore Programs
                    </Link>
                  </Button>
                </div>
              </section>

              {/* =================================================
                  RIGHT VISUAL
              ================================================== */}

              <section className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-linear-to-br from-[#1C3569] via-[#17305e] to-[#005382] px-6 py-12">
                <div
                  aria-hidden="true"
                  className="absolute left-6 top-6 h-24 w-24 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute bottom-8 right-8 h-40 w-40 rounded-full border border-white/10"
                />

                <div
                  aria-hidden="true"
                  className="absolute right-16 top-16 h-8 w-8 rotate-12 rounded-md bg-[#FFC107]/80"
                />

                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-white/10 shadow-2xl backdrop-blur-md sm:h-40 sm:w-40">
                    <SearchX
                      className="h-16 w-16 text-[#FFC107] sm:h-20 sm:w-20"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>

                  <h2 className="mt-7 text-xl font-bold text-white sm:text-2xl">
                    Lost on your learning journey?
                  </h2>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                    Our team can help you find the right university, course and
                    admission path.
                  </p>
                </div>
              </section>
            </div>
          </CardContent>
        </Card>

        {/* =====================================================
            QUICK LINKS
        ====================================================== */}

        <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {quickLinks.map((item) => {
            const Icon = item.icon;

            return (
              <Link key={item.title} href={item.href} className="group">
                <Card className="h-full rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#FFC107]/70 hover:shadow-lg">
                  <CardContent className="flex items-start gap-4 p-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1C3569]/8 text-[#1C3569] transition group-hover:bg-[#FFC107] group-hover:text-black">
                      <Icon size={21} aria-hidden="true" />
                    </div>

                    <div>
                      <h2 className="font-bold text-[#1C3569]">{item.title}</h2>

                      <p className="mt-1 text-xs leading-5 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </section>

        {/* =====================================================
            SUPPORT TEXT
        ====================================================== */}

        <p className="mt-8 text-center text-sm text-slate-500">
          Need help? Call our admission support team at{" "}
          <a
            href="tel:+917065777755"
            className="font-bold text-[#1C3569] underline decoration-[#FFC107] decoration-2 underline-offset-4"
          >
            +91 7065 7777 55
          </a>
        </p>
      </div>
    </main>
  );
}
