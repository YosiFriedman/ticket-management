import { useLocation } from "react-router-dom";
import { useMemo } from "react";
import { UserType } from "../types/UserType";

export const useUserType = (): UserType => {
  const location = useLocation();

  return useMemo(() => {
    const query = new URLSearchParams(location.search);
    const userType = query.get("userType")?.toLowerCase();

    return userType === "tourist" ? UserType.TOURIST : UserType.LOCAL;
  }, [location.search]);
};
