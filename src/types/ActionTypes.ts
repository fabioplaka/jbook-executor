import { CellTypes } from "./CellTypes";

export type InsertActionType = {
  payload: {
    id: string;
    type: CellTypes;
  };
};

export type UpdateActionType = {
  payload: {
    id: string;
    content: string;
  };
};

export type MoveActionType = {
  payload: {
    id: string;
    direction: string;
  };
};
