import type { Paginated } from "@/types/Paginated";
import type { SupportType } from "@/types/SupportType";
import axios from "axios";

export const getAllSupportTypes = async () => {
  const { data: result } = await axios.get<Paginated<SupportType>>(
    `${process.env.NEXT_PUBLIC_API_URL}/support-types`
  );

  return result;
};

export const addSupportType = async (dto: Pick<SupportType, "name" | "description">) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/support-types`, dto);
};
