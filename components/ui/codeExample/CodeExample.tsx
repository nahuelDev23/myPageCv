import { Stack } from "@chakra-ui/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeExample = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {code}
    </SyntaxHighlighter>
  );
};
