import { getAllAutomationInfo, getAllAutomations } from "@/actions/automations";
import { onUserInfo } from "@/actions/user";
import { useQuery } from "@tanstack/react-query";

export const useQueryAutomations = () => {
  return useQuery({
    queryKey: ["user-automations"],
    queryFn: getAllAutomations,
  });
};

export const useQueryAutomation = (id: string) => {
  return useQuery({
    queryKey: ["automation info"],
    queryFn: () => getAllAutomationInfo(id),
  });
};

export const useQueryUser = () => {
  return useQuery({ queryKey: ["user-profile"], queryFn: () => onUserInfo() });
};
