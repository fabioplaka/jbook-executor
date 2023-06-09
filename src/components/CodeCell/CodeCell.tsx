import { useState } from "react";
import { bundle } from "../../bundler";
import { CodeEditor } from "../CodeEditor";
import { Preview } from "../Preview";
import { Button } from "../Button";

const CodeCell: React.FC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <div>
      <CodeEditor
        initialValue="const a = 1;"
        onChange={(value) => setInput(value)}
      />
      <div>
        <Button onClick={onClick}>Submit</Button>
      </div>
      <Preview code={code} />
    </div>
  );
};

export default CodeCell;
