import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeExample = ({ code }: { code: string }) => {
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {code}
    </SyntaxHighlighter>
  );
};
