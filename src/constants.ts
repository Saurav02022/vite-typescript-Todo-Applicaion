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
  likes: number;
};

export const ColorMap: Record<todoType, string> = {
  Learned: "lightgreen",
  Learning: "teal",
  Pending: "orange",
  Revision: "lightblue",
};
