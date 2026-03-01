"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  className?: string;
  children?: React.ReactNode;
}

export function CodeBlock({ className, children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "");

  if (!match) {
    return <code className={className}>{children}</code>;
  }

  return (
    <SyntaxHighlighter PreTag="div" language={match[1]} style={materialDark}>
      {String(children).replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}
