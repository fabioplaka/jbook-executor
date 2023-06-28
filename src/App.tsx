import { FC } from "react";
import { CodeCell } from "./components/CodeCell";
import { TextEditor } from "./components/TextEditor";
import { CellList } from "./components/CellList";

const App: FC = (): JSX.Element => {
  return (
    <div>
      <CellList />
    </div>
  );
};

export default App;
