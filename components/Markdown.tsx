import ReactMarkdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark  as theme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import gfm from "remark-gfm";

interface MarkdownProps {
  markdown: string;
}

const components: Components = {
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <SyntaxHighlighter
        style={theme}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export const Markdown = ({ markdown }: MarkdownProps) => {
  return (
    <ReactMarkdown
      className="MarkdownRenderer"
      plugins={[gfm]}
      components={components}
    >
      {markdown}
    </ReactMarkdown>
  );
};
