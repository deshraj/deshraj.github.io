import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional experience of Deshraj Yadav — Mem0, Tesla Autopilot, Snap Inc., and more.",
};

const experiences = [
  {
    role: "Co-founder & CTO",
    company: "Mem0",
    companyUrl: "https://mem0.ai",
    period: "Sep 2023 — Present",
    description:
      "Building Mem0 (f.k.a Embedchain), the memory layer for AI applications. Open-source RAG framework that makes it easy to create and deploy personalized AI apps.",
  },
  {
    role: "Senior Autopilot Engineer",
    company: "Tesla",
    companyUrl: "https://tesla.com/autopilot",
    period: "Jul 2019 — Sep 2023",
    description:
      "Led the Autopilot AI Platform — tracking large-scale training and model evaluation experiments, monitoring and observability for jobs and training cluster issues, automating ML workflows. Previously worked on AI Tooling: 3D labelling platform, model versioning, and active learning-based label boosting.",
  },
  {
    role: "Co-founder",
    company: "Caliper",
    companyUrl: "https://www.f6s.com/caliper.ai",
    period: "Mar 2019 — Mar 2020",
    description:
      "Built a platform enabling recruiters to evaluate practical AI skills at scale through automated challenges on real-world problems.",
  },
  {
    role: "Research Intern",
    company: "Snap Inc.",
    companyUrl: "https://snap.com",
    period: "May 2018 — Aug 2018",
    description:
      "Built scalable end-to-end platform to train, test, and visualize machine learning algorithms on massive amounts of visual data.",
  },
  {
    role: "Research Assistant",
    company: "Virginia Tech — ML & Perception Lab",
    companyUrl: "http://mlp.ece.vt.edu",
    period: "Jun 2016 — May 2017",
    description:
      "Worked on Visual Dialog (CVPR 2017 Spotlight). Also served as Teaching Assistant for Intro to Machine Learning.",
  },
  {
    role: "Organization Administrator",
    company: "CloudCV — Google Summer of Code",
    companyUrl: "http://cloudcv.org",
    period: "Mar 2016 — 2020",
    description:
      "Served as Organization Mentor (GSoC 2016) and Organization Administrator (GSoC 2017–2020).",
  },
  {
    role: "Student Developer",
    company: "CloudCV — Google Summer of Code 2015",
    companyUrl: "http://cloudcv.org",
    period: "Apr 2015 — Aug 2015",
    description:
      "Integrated NVIDIA's DIGITS deep learning framework to provide workspaces for researchers and computer vision developers.",
  },
];

const education = [
  {
    degree: "MS Computer Science",
    school: "Georgia Institute of Technology",
    schoolUrl: "https://gatech.edu",
    period: "Aug 2017 — Dec 2018",
    detail: "Specialization in Machine Learning · GPA: 3.7/4.0",
  },
  {
    degree: "B.Tech Computer Science & Engineering",
    school: "JSS Academy of Technical Education, Noida",
    schoolUrl: "",
    period: "Aug 2012 — Jun 2016",
    detail: "78% aggregate with Honors · Top 6% of class",
  },
];

export default function ExperiencePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-12">
        Experience
      </h1>

      <Section title="Work">
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company + exp.role}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-medium">{exp.role}</h3>
                <span className="text-sm text-muted whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <a
                href={exp.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
              >
                {exp.company}
              </a>
              <p className="text-sm text-muted mt-2 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="space-y-8">
          {education.map((edu) => (
            <div key={edu.school}>
              <div className="flex items-baseline justify-between gap-4 mb-1">
                <h3 className="font-medium">{edu.degree}</h3>
                <span className="text-sm text-muted whitespace-nowrap">
                  {edu.period}
                </span>
              </div>
              {edu.schoolUrl ? (
                <a
                  href={edu.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
                >
                  {edu.school}
                </a>
              ) : (
                <span className="text-sm text-muted">{edu.school}</span>
              )}
              <p className="text-sm text-muted mt-1">{edu.detail}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
