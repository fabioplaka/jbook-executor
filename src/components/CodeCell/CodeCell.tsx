import { useEffect, useState } from "react";
import { bundle } from "../../bundler";
import { CodeEditor } from "../CodeEditor";
import { Preview } from "../Preview";
import { Resizable } from "../Resizable";

const CodeCell: React.FC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(input);
      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
