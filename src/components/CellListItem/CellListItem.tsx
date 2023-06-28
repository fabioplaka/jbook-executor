import { FC } from "react";
import { CellType } from "../../types/CellTypes";
import { CodeCell } from "../CodeCell";
import { TextEditor } from "../TextEditor";

type CellListItemProps = {
  cell: CellType;
};

const CellListItem: FC<CellListItemProps> = ({ cell }): JSX.Element => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = <CodeCell cell={cell} />;
  } else {
    child = <TextEditor cell={cell} />;
  }
  return <div>{child}</div>;
};

export default CellListItem;
