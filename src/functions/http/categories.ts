import type { Category } from "@/types/Category";
import type { Paginated } from "@/types/Paginated";
import axios from "axios";

export const getAllCategories = async (token?: string) => {
  const { data: result } = await axios.get<Paginated<Category>>(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return result;
};

export const addCategory = async (dto: Pick<Category, "name" | "description">, token?: string) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/categories`, dto, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
