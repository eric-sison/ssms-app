import type { Paginated } from "@/types/Paginated";
import type { SupportType } from "@/types/SupportType";
import axios from "axios";

export const getAllSupportTypes = async (token?: string) => {
  const { data: result } = await axios.get<Paginated<SupportType>>(
    `${process.env.NEXT_PUBLIC_API_URL}/support-types`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  return result;
};

export const addSupportType = async (
  dto: Pick<SupportType, "name" | "description">,
  token?: string
) => {
  return await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/support-types`, dto, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
