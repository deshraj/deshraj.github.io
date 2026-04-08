import type { Metadata } from "next";
import { Section } from "@/components/section";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Deshraj Yadav — Mem0, EvalAI, Visual Dialog, Fabrik, Origami, and more.",
};

const projects = [
  {
    name: "Mem0",
    url: "https://mem0.ai",
    github: "https://github.com/mem0ai/mem0",
    description:
      "The memory layer for AI applications. Open-source framework for building personalized AI with long-term memory capabilities.",
  },
  {
    name: "EvalAI",
    url: "https://eval.ai",
    github: "https://github.com/Cloud-CV/EvalAI",
    description:
      "Open-source platform to create, collaborate, and participate in AI challenges organized around the globe. Built as Masters thesis at Georgia Tech.",
  },
  {
    name: "Visual Dialog",
    url: "https://visualdialog.org",
    github: "https://github.com/Cloud-CV/visual-chatbot",
    description:
      "A visual chatbot that can hold meaningful dialog with humans in natural language about visual content. CVPR 2017 Spotlight paper.",
  },
  {
    name: "HIEME",
    url: "",
    github: "",
    description:
      "Human-Interactive Evaluation Made Easy — a centralized open-source platform for human-in-the-loop evaluation of AI agents. Developed infrastructure to pair AMT users with visual dialog agents in real-time.",
  },
  {
    name: "Fabrik",
    url: "http://fabrik.cloudcv.org",
    github: "https://github.com/Cloud-CV/Fabrik",
    description:
      "Online collaborative platform to build, visualize, and train deep learning models via a simple drag-and-drop interface.",
  },
  {
    name: "Grad-CAM Demo",
    url: "http://gradcam.cloudcv.org",
    github: "https://github.com/Cloud-CV/grad-cam",
    description:
      "Interactive demo for Gradient-weighted Class Activation Mapping — making CNN-based models interpretable by highlighting regions the model looks at during predictions.",
  },
  {
    name: "VQA Demo",
    url: "http://vqa.cloudcv.org",
    github: "https://github.com/Cloud-CV/vqa",
    description:
      "Visual Question Answering demo — given an image and a free-form natural language question, the model produces accurate answers.",
  },
  {
    name: "Origami",
    url: "http://origami.cloudcv.org",
    github: "https://github.com/Cloud-CV/origami",
    description:
      "AI-as-a-service platform enabling researchers to convert deep learning models into accessible online services without infrastructure setup.",
  },
  {
    name: "Diverse Beam Search",
    url: "http://dbs.cloudcv.org",
    github: "https://github.com/Cloud-CV/diverse-beam-search",
    description:
      "A diversity-promoting decoding method for neural sequence models, producing significantly different output sequences with comparable runtime to standard beam search.",
  },
];

export default function ProjectsPage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold tracking-tight mb-12">
        Projects
      </h1>

      <Section title="Selected Projects">
        <div className="space-y-10">
          {projects.map((project) => (
            <article key={project.name}>
              <div className="flex items-baseline gap-3">
                <h3 className="font-medium">{project.name}</h3>
                <div className="flex gap-3">
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
                    >
                      Website
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-muted underline underline-offset-4 decoration-border hover:decoration-primary hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm text-muted mt-1.5 leading-relaxed">
                {project.description}
              </p>
            </article>
          ))}
        </div>
      </Section>
    </div>
  );
}
