import { useMutationDataState } from "@/hooks/use-mutation-data";
import { useKeyWords } from "@/hooks/useAutomations";
import { useQueryAutomation } from "@/hooks/user.queries";
import React from "react";

type Props = {
  id: string;
};

const KeyWords = ({ id }: Props) => {
  const { onKeyPress, onValueChange, deleteMutation, keyword } =
    useKeyWords(id);
  const { latestVariable } = useMutationDataState(["add-keyword"]);
  const { data } = useQueryAutomation(id);
  return (
    <div className="bg-background-80 flex flex-col gap-y-3 p-3 rounded-xl">
      <p className="text-sm text-secondary">
        Add words that trigger automations
      </p>
      <div className=" flex flex-wrap justify-start gap-2 items-center">
        {data?.data?.keywords &&
          data?.data?.keywords.length > 0 &&
          data?.data?.keywords.map(
            (word) => word.id !== latestVariable.variables.id && <div></div>
          )}
      </div>
    </div>
  );
};

export default KeyWords;
