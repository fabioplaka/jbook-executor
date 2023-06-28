import { useEffect, useState } from "react";
import { bundle } from "../../bundler";
import { CodeEditor } from "../CodeEditor";
import { Preview } from "../Preview";
import { Resizable } from "../Resizable";
import { CellType } from "../../types/CellTypes";
import { actionUpdateCell } from "../../store/actions";

interface CodeCellProps {
  cell: CellType;
}

const CodeCell: React.FC<CodeCellProps> = ({ cell }): JSX.Element => {
  const [code, setCode] = useState<string>("");
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const timer = setTimeout(async () => {
      const output = await bundle(cell.content);
      setCode(output.code);
      setError(output.error);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [cell.content]);

  return (
    <Resizable direction="vertical">
      <div style={{ height: "100%", display: "flex", flexDirection: "row" }}>
        <Resizable direction="horizontal">
          <CodeEditor
            initialValue={cell.content}
            onChange={(value) => actionUpdateCell(cell.id, value)}
          />
        </Resizable>
        <Preview code={code} err={error} />
      </div>
    </Resizable>
  );
};

export default CodeCell;
