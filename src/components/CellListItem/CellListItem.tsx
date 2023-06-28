import "./CellListItem.css";
import { FC } from "react";
import { CellType } from "../../types/CellTypes";
import { CodeCell } from "../CodeCell";
import { TextEditor } from "../TextEditor";
import { ActionBar } from "../ActionBar";

type CellListItemProps = {
  cell: CellType;
};

const CellListItem: FC<CellListItemProps> = ({ cell }): JSX.Element => {
  let child: JSX.Element;
  if (cell.type === "code") {
    child = (
      <>
        <div className="action-bar-wrapper">
          <ActionBar id={cell.id} />
        </div>
        <CodeCell cell={cell} />
      </>
    );
  } else {
    child = (
      <>
        <TextEditor cell={cell} />
        <ActionBar id={cell.id} />
      </>
    );
  }
  return <div className="cell-list-item">{child}</div>;
};

export default CellListItem;
