export type CellTypes = "code" | "text";
export type CellDirectionTypes = "up" | "down";

export interface CellType {
  id: string;
  type: CellTypes;
  content: string;
}
