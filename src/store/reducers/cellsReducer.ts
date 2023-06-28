import { CellType, CellTypes } from "../../types/CellTypes";
import { createReducer, nanoid } from "@reduxjs/toolkit";
import {
  actionDeleteCell,
  actionInsertCell,
  actionMoveCell,
  actionUpdateCell,
} from "../actions";
import {
  InsertActionType,
  MoveActionType,
  UpdateActionType,
} from "../../types/ActionTypes";

interface CellsState {
  loading: boolean;
  error: string | null;
  order: string[];
  data: {
    [key: string]: CellType;
  };
}

const initialState: CellsState = {
  loading: false,
  error: null,
  order: [],
  data: {},
};

const reducer = createReducer<CellsState>(initialState, (builder) => {
  builder
    .addCase(actionMoveCell, (state: CellsState, action: MoveActionType) => {
      const { direction } = action.payload;
      const index = state.order.findIndex(
        (id: string) => id === action.payload.id
      );
      const targetIndex = direction === "up" ? index - 1 : index + 1;

      if (targetIndex < 0 || targetIndex > state.order.length - 1) {
        return state;
      }

      state.order[index] = state.order[targetIndex];
      state.order[targetIndex] = action.payload.id;

      return state;
    })
    .addCase(actionDeleteCell, (state: CellsState, action) => {
      delete state.data[action.payload];
      state.order = state.order.filter((id: string) => id !== action.payload);
      return state;
    })

    .addCase(
      actionInsertCell,
      (state: CellsState, action: InsertActionType) => {
        const cell: CellType = {
          content: "",
          type: action.payload.type as CellTypes,
          id: nanoid(),
        };

        state.data[cell.id] = cell;

        const foundIndex = state.order.findIndex(
          (id: string) => id === action.payload.id
        );

        if (foundIndex < 0) {
          state.order.push(cell.id);
        } else {
          state.order.splice(foundIndex, 0, cell.id);
        }
        return state;
      }
    )

    .addCase(
      actionUpdateCell,
      (state: CellsState, action: UpdateActionType) => {
        const { id, content } = action.payload;
        state.data[id].content = content;
        return state;
      }
    );
});

export default reducer;
