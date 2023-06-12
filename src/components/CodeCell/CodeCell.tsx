import { useState } from "react";
import { bundle } from "../../bundler";
import { CodeEditor } from "../CodeEditor";
import { Preview } from "../Preview";
import { Button } from "../Button";
import { Resizable } from "../Resizable";

const CodeCell: React.FC = (): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [input, setInput] = useState<string>("");

  const onClick = async () => {
    const output = await bundle(input);
    setCode(output);
  };

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue="const a = 1;"
            onChange={(value) => setInput(value)}
          />
        </Resizable>
        {/* <div>
          <Button onClick={onClick}>Submit</Button>
        </div> */}
        <Preview code={code} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
