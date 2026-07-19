import dynamic from "next/dynamic";
import type { Components } from "react-markdown";

const CodeBlock = dynamic(
  () => import("@/components/code-block").then((mod) => mod.CodeBlock),
  {
    loading: () => <div className="animate-pulse bg-muted rounded h-20" />,
  },
);

export const markdownComponents: Components = {
  p: ({ node: _node, ref: _ref, ...props }) => (
    <p className="text-muted-foreground py-2" {...props} />
  ),
  a: ({ node: _node, ref: _ref, ...props }) => (
    <a className="text-brand hover:text-brand-hover font-medium" {...props} />
  ),
  h1: ({ node: _node, ref: _ref, ...props }) => (
    <h1 className="text-3xl font-bold" {...props} />
  ),
  h2: ({ node: _node, ref: _ref, ...props }) => (
    <h2 className="text-2xl font-semibold" {...props} />
  ),
  h3: ({ node: _node, ref: _ref, ...props }) => (
    <h3 className="text-xl font-semibold" {...props} />
  ),
  h4: ({ node: _node, ref: _ref, ...props }) => (
    <h4 className="text-lg font-semibold" {...props} />
  ),
  h5: ({ node: _node, ref: _ref, ...props }) => (
    <h5 className="text-md font-semibold" {...props} />
  ),
  h6: ({ node: _node, ref: _ref, ...props }) => (
    <h6 className="text-sm font-semibold" {...props} />
  ),
  ol: ({ node: _node, ref: _ref, ...props }) => (
    <ol className="list-decimal list-inside text-muted-foreground" {...props} />
  ),
  ul: ({ node: _node, ref: _ref, ...props }) => (
    <ul className="list-disc list-inside text-muted-foreground" {...props} />
  ),
  li: ({ node: _node, ref: _ref, ...props }) => (
    <li className="text-muted-foreground" {...props} />
  ),
  blockquote: ({ node: _node, ref: _ref, ...props }) => (
    <blockquote
      className="border-l-4 pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  img: ({ node: _node, ref: _ref, ...props }) => (
    // biome-ignore lint/performance/noImgElement: markdown renderer requires native img for dynamic content
    <img className="rounded-lg my-4" alt="" {...props} />
  ),
  code({ children, className }) {
    return <CodeBlock className={className}>{children}</CodeBlock>;
  },
};
