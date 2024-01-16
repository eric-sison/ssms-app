import type { Category } from "@/types/Category";
import type { Paginated } from "@/types/Paginated";
import type { FlattenedSubCategory, SubCategory } from "@/types/SubCategory";
import axios from "axios";

type SubCategoriesQueryOptions = {
  flatten?: boolean;
};

type AddSubCategory = Pick<Category, "name" | "description"> & {
  category: string;
};

export const getAllSubCategories = async (options?: SubCategoriesQueryOptions) => {
  const url = options?.flatten
    ? `${process.env.NEXT_PUBLIC_API_URL}/sub-categories?flatten=yes`
    : `${process.env.NEXT_PUBLIC_API_URL}/sub-categories`;

  const { data: result } = await axios.get<Paginated<FlattenedSubCategory>>(`${url}`);

  return result;
};

export const addSubCategory = async (dto: AddSubCategory) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/sub-categories`, dto);
};
