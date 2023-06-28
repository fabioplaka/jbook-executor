import "./ActionBar.css";
import { FC } from "react";
import { Button } from "../Button";
import { actionDeleteCell, actionMoveCell } from "../../store/actions";
import { useDispatch } from "react-redux";

type ActionBarProps = {
  id: string;
};

const ActionBar: FC<ActionBarProps> = ({ id }) => {
  const dispatch = useDispatch();
  return (
    <div className="action-bar">
      <Button
        classes="button is-primary is-small"
        onClick={() => dispatch(actionMoveCell(id, "up"))}
      >
        <small className="icon">
          <i className="fas fa-arrow-up"></i>
        </small>
      </Button>
      <Button
        classes="button is-primary is-small"
        onClick={() => dispatch(actionMoveCell(id, "down"))}
      >
        <small className="icon">
          <i className="fas fa-arrow-down"></i>
        </small>
      </Button>
      <Button
        classes="button is-primary is-small"
        onClick={() => dispatch(actionDeleteCell(id))}
      >
        <small className="icon">
          <i className="fas fa-times"></i>
        </small>
      </Button>
    </div>
  );
};

export default ActionBar;
