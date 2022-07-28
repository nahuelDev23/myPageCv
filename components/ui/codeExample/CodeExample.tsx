import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

// import { goodCode } from "./codeExampleText";

export const CodeExample = ({ code }: { code: string }) => {
  // todo poner code
  return (
    <SyntaxHighlighter language="javascript" style={dark}>
      {code}
    </SyntaxHighlighter>
  );
};
