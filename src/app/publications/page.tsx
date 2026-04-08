import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research publications by Deshraj Yadav in AI, computer vision, visual dialog, and evaluation systems.",
};

const publications = [
  {
    title:
      "Mem0: Building Production-Ready AI Agents with Scalable Long-Term Memory",
    authors:
      "Prateek Chhikara, Dev Khant, Saket Aryan, Taranjeet Singh, Deshraj Yadav",
    venue: "ECAI 2025",
    year: "2025",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/2504.19413" },
      { label: "Project", url: "https://mem0.ai" },
      { label: "Code", url: "https://github.com/mem0ai/mem0" },
    ],
  },
  {
    title: "EvalAI: Towards Better Evaluation Systems for AI Agents",
    authors:
      "Deshraj Yadav, Rishabh Jain, Harsh Agrawal, Prithvijit Chattopadhyay, Taranjeet Singh, Akash Jain, Shiv Baran Singh, Stefan Lee, Dhruv Batra",
    venue: "arXiv preprint",
    year: "2019",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/1902.03570" },
      { label: "Project", url: "https://evalai.cloudcv.org" },
      { label: "Code", url: "https://github.com/Cloud-CV/EvalAI" },
    ],
  },
  {
    title: "Fabrik: An Online Collaborative Neural Network Editor",
    authors:
      "Utsav Garg, Viraj Prabhu, Deshraj Yadav, Ram Ramrakhya, Harsh Agrawal, Dhruv Batra",
    venue: "arXiv preprint",
    year: "2018",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/1810.11649" },
      { label: "Code", url: "https://github.com/Cloud-CV/Fabrik" },
    ],
  },
  {
    title:
      "Do Explanation Modalities Make VQA Models More Predictable to a Human?",
    authors:
      "Arjun Chandrasekaran*, Viraj Prabhu*, Deshraj Yadav*, Prithvijit Chattopadhyay*, Devi Parikh",
    venue: "EMNLP 2018",
    year: "2018",
    links: [{ label: "Paper", url: "https://arxiv.org/abs/1810.12366" }],
  },
  {
    title:
      "Evaluating Visual Conversational Agents via Cooperative Human-AI Games",
    authors:
      "Prithvijit Chattopadhyay*, Deshraj Yadav*, Viraj Prabhu, Arjun Chandrasekaran, Abhishek Das, Stefan Lee, Dhruv Batra, Devi Parikh",
    venue: "HCOMP 2017",
    year: "2017",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/1708.05122" },
      { label: "Code", url: "https://github.com/VT-VISION-LAB/GuessWhich" },
    ],
  },
  {
    title: "It Takes Two to Tango: Towards Theory of AI's Mind",
    authors:
      "Arjun Chandrasekaran*, Deshraj Yadav*, Prithvijit Chattopadhyay*, Viraj Prabhu*, Devi Parikh",
    venue: "ChaLearn Looking at People Workshop, CVPR 2017",
    year: "2017",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/1704.00717" },
      { label: "Demo", url: "https://deshraj.github.io/TOAIM" },
      { label: "Code", url: "https://github.com/deshraj/TOAIM" },
    ],
  },
  {
    title: "Visual Dialog",
    authors:
      "Abhishek Das, Satwik Kottur, Khushi Gupta, Avi Singh, Deshraj Yadav, José M.F. Moura, Devi Parikh, Dhruv Batra",
    venue: "CVPR 2017 — Spotlight",
    year: "2017",
    links: [
      { label: "Paper", url: "https://arxiv.org/abs/1611.08669" },
      { label: "Project", url: "https://visualdialog.org" },
      { label: "Code", url: "https://github.com/Cloud-CV/visual-chatbot" },
    ],
  },
];

function highlightName(authors: string) {
  return authors.split(/(Deshraj Yadav)/).map((part, i) =>
    part === "Deshraj Yadav" ? (
      <strong key={i} className="font-medium text-primary">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
}

export default function PublicationsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-12">
        Publications
      </h1>

      <Section title="Papers">
        <div className="space-y-10">
          {publications.map((pub) => (
            <article key={pub.title}>
              <h3 className="font-medium leading-snug">{pub.title}</h3>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                {highlightName(pub.authors)}
              </p>
              <p className="text-sm mt-1">
                <span className="text-muted">{pub.venue}</span>
                <span className="text-muted ml-2">· {pub.year}</span>
              </p>
              <div className="flex gap-4 mt-2">
                {pub.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
