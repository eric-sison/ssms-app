import { Category } from "./Category";

export type SubCategory = {
  category: Category;
  id: string;
  name: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type FlattenedSubCategory = Omit<SubCategory, "category"> & {
  categoryId: string;
  category: string;
};
