import { FC, useCallback } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { CellListItem } from "../CellListItem";

const CellList: FC = () => {
  const cells = useTypedSelector(({ cellsReducers: { order, data } }) =>
    order.map((id: string) => data[id])
  );

  const renderedCells = useCallback(() => {
    return cells.map((cell) => <CellListItem key={cell.id} cell={cell} />);
  }, [cells]);

  return <div>{renderedCells()}</div>;
};

export default CellList;
