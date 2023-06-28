import { createAction } from "@reduxjs/toolkit";
import { CellTypes } from "../../types/CellTypes";

export enum ActionType {
  MOVE_CELL = "move_cell",
  DELETE_CELL = "delete_cell",
  INSERT_CELL = "insert_cell",
  UPDATE_CELL = "update_cell",
}

export const actionMoveCell = createAction(
  ActionType.MOVE_CELL,
  (id: string, direction: string) => {
    return {
      payload: {
        id,
        direction,
      },
    };
  }
);

export const actionDeleteCell = createAction<string>(ActionType.DELETE_CELL);

export const actionInsertCell = createAction(
  ActionType.INSERT_CELL,
  (id: string, type: CellTypes) => {
    return {
      payload: {
        id,
        type,
      },
    };
  }
);

export const actionUpdateCell = createAction(
  ActionType.UPDATE_CELL,
  (id: string, content: string) => {
    return {
      payload: {
        id,
        content,
      },
    };
  }
);
