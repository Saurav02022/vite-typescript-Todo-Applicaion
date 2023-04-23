export enum todoType {
  Learned = "Learned",
  Learning = "Learning",
  Pending = "Pending",
  Revision = "Revision",
}
export type Todo = {
  id: number;
  type: todoType;
  message: string;
};

export const ColorMap: Record<todoType, string> = {
  Learned: "#87A16D",
  Learning: "#72CEA0",
  Pending: "#FFCB96",
  Revision: "#C4626B",
};
