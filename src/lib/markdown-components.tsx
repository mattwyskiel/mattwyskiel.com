import dynamic from "next/dynamic";
import type { Components } from "react-markdown";

const CodeBlock = dynamic(
  () => import("@/components/code-block").then((mod) => mod.CodeBlock),
  {
    loading: () => <div className="animate-pulse bg-muted rounded h-20" />,
  },
);

export const markdownComponents: Components = {
  p: ({ node, ...props }) => (
    <p className="text-muted-foreground py-2" {...props} />
  ),
  a: ({ node, ...props }) => (
    <a className="text-brand hover:text-brand-hover font-medium" {...props} />
  ),
  h1: ({ node, ...props }) => <h1 className="text-3xl font-bold" {...props} />,
  h2: ({ node, ...props }) => (
    <h2 className="text-2xl font-semibold" {...props} />
  ),
  h3: ({ node, ...props }) => (
    <h3 className="text-xl font-semibold" {...props} />
  ),
  h4: ({ node, ...props }) => (
    <h4 className="text-lg font-semibold" {...props} />
  ),
  h5: ({ node, ...props }) => (
    <h5 className="text-md font-semibold" {...props} />
  ),
  h6: ({ node, ...props }) => (
    <h6 className="text-sm font-semibold" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-decimal list-inside text-muted-foreground" {...props} />
  ),
  ul: ({ node, ...props }) => (
    <ul className="list-disc list-inside text-muted-foreground" {...props} />
  ),
  li: ({ node, ...props }) => (
    <li className="text-muted-foreground" {...props} />
  ),
  blockquote: ({ node, ...props }) => (
    <blockquote
      className="border-l-4 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  img: ({ node, ...props }) => <img className="rounded-lg my-4" {...props} />,
  code({ children, className, node, ...rest }) {
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
};
