import { Section } from "@/components/section";
import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    role: "Co-founder & CTO",
    org: "Mem0",
    url: "https://mem0.ai",
    period: "2023 — Present",
  },
  {
    role: "Senior Autopilot Engineer",
    org: "Tesla",
    url: "https://tesla.com/autopilot",
    period: "2019 — 2023",
  },
  {
    role: "MS Computer Science",
    org: "Georgia Tech",
    url: "https://gatech.edu",
    period: "2017 — 2018",
  },
];

const news = [
  {
    date: "Sep 2023",
    text: "Started as Co-founder and CTO at Mem0 — building the memory layer for AI agents.",
  },
  {
    date: "Jul 2019",
    text: "Joined Tesla Autopilot as Machine Learning Engineer.",
  },
  {
    date: "Mar 2019",
    text: "Co-founded Caliper — a platform to evaluate practical AI skills at scale.",
  },
  {
    date: "Dec 2018",
    text: "Successfully defended Masters thesis — EvalAI: Evaluating AI Systems at Scale.",
  },
  {
    date: "Aug 2018",
    text: "Paper accepted at EMNLP 2018 — Do explanations make VQA models more predictable to a human?",
  },
  {
    date: "Dec 2017",
    text: "Won Snap Inc. Research Scholarship — one of 8 awardees worldwide.",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="mb-20">
        <div className="flex items-start justify-between gap-8 mb-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Deshraj Yadav
          </h1>
          <Image
            src="/static/img/deshraj.png"
            alt="Deshraj Yadav"
            width={100}
            height={100}
            className="rounded-full shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            priority
          />
        </div>
        <p className="text-muted text-lg leading-relaxed max-w-xl">
          Co-founder and CTO at{" "}
          <a
            href="https://mem0.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 decoration-border hover:decoration-primary"
          >
            Mem0
          </a>
          . Building the memory layer for AI applications.
        </p>
        <p className="text-muted leading-relaxed mt-4 max-w-xl">
          Previously Senior Autopilot Engineer at Tesla, where I led the
          AI Platform for tracking large-scale training experiments and
          model evaluation. Created{" "}
          <a
            href="https://eval.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline underline-offset-4 decoration-border hover:decoration-primary"
          >
            EvalAI
          </a>
          , an open-source platform for evaluating ML algorithms at scale.
        </p>
        <p className="text-muted leading-relaxed mt-4 max-w-xl">
          Outside of work, I play cricket in two leagues in the SF Bay Area.
        </p>
        <p className="text-muted text-sm mt-6">
          deshraj at mem0 dot ai
        </p>
      </section>

      {/* At a glance */}
      <Section title="At a Glance">
        <div className="space-y-4">
          {highlights.map((item) => (
            <div key={item.org} className="flex items-baseline justify-between gap-4">
              <div>
                <span className="font-medium">{item.role}</span>
                <span className="text-muted ml-1">
                  at{" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 decoration-border hover:decoration-primary"
                  >
                    {item.org}
                  </a>
                </span>
              </div>
              <span className="text-sm text-muted whitespace-nowrap">{item.period}</span>
            </div>
          ))}
        </div>
        <div className="mt-6">
          <Link
            href="/experience"
            className="text-sm text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
          >
            View full experience →
          </Link>
        </div>
      </Section>

      {/* News */}
      <Section title="News">
        <div className="space-y-4">
          {news.map((item, i) => (
            <div key={i} className="flex gap-4">
              <span className="text-sm text-muted whitespace-nowrap w-20 shrink-0 pt-0.5">
                {item.date}
              </span>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Selected Work */}
      <Section title="Selected Work">
        <div className="space-y-6">
          <div>
            <h3 className="font-medium">
              <a
                href="https://mem0.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-border hover:decoration-primary"
              >
                Mem0
              </a>
            </h3>
            <p className="text-sm text-muted mt-1">
              The memory layer for AI agents. Open-source infrastructure that
              gives LLM agents persistent, scalable long-term memory across
              sessions.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              <a
                href="https://eval.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-border hover:decoration-primary"
              >
                EvalAI
              </a>
            </h3>
            <p className="text-sm text-muted mt-1">
              Open-source platform for evaluating and comparing ML & AI
              algorithms at scale. Built as Masters thesis at Georgia Tech.
            </p>
          </div>
          <div>
            <h3 className="font-medium">
              <a
                href="https://visualdialog.org"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-border hover:decoration-primary"
              >
                Visual Dialog
              </a>
            </h3>
            <p className="text-sm text-muted mt-1">
              Research on visual conversational agents. CVPR 2017 Spotlight paper.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <Link
            href="/projects"
            className="text-sm text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
          >
            View all projects →
          </Link>
        </div>
      </Section>

      {/* Honors */}
      <Section title="Honors">
        <ul className="space-y-3 text-sm">
          <li className="flex gap-2">
            <span className="text-muted">·</span>
            <span>
              <a
                href="https://snapresearchscholarship.splashthat.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 decoration-border hover:decoration-primary"
              >
                Snap Research Scholarship
              </a>{" "}
              recipient, 2017 — one of 8 awardees worldwide
            </span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted">·</span>
            <span>Travel Scholarship for Google Summer of Code Mentor Summit, 2016 & 2017</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted">·</span>
            <span>National Means Cum-Merit Scholarship — State Rank 13 (Ministry of HRD, India)</span>
          </li>
          <li className="flex gap-2">
            <span className="text-muted">·</span>
            <span>Prime Minister Scholarship Scheme (Ministry of Defence, India)</span>
          </li>
        </ul>
      </Section>
    </div>
  );
}
