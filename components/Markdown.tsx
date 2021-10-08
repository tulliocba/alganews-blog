import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

interface MarkdownProps {
  markdown: string;
}

export const Markdown = ({ markdown }: MarkdownProps) => {
  return <ReactMarkdown className="MarkdownRenderer">{markdown}</ReactMarkdown>;
};
