import { useQuery } from "@tanstack/react-query";
import { getAccounts } from "./account.api";
import { queryKeys } from "../../../api/query/queryKeys";

//calls function: getAccounts
//store/cache http result in queryKeys.accounts
export const useAccounts = () => {
  return useQuery({
    queryKey: queryKeys.accounts.all,
    queryFn: getAccounts,
  });
};