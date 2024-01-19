import { AccessToken } from "@/types/User";
import axios from "axios";

export const requestToken = async () => {
  const result = await axios.get<AccessToken>("http://localhost:3000/api/auth/get-token", {
    withCredentials: true,
  });

  return result.data;
};
