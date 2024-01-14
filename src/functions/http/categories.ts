import type { Category } from "@/types/Categories";
import type { Paginated } from "@/types/Paginated";
import axios from "axios";

export const getAllCategories = async () => {
  const { data: result } = await axios.get<Paginated<Category>>(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );

  return result;
};

export const addCategory = async (dto: Pick<Category, "name" | "description">) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, dto);
};
