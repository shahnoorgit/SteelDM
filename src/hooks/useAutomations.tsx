"use client";
import { createAutomations, updateAutomationName } from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";
import { useEffect, useRef, useState } from "react";

export const useCreateAutomation = (id?: string) => {
  const { isPending, mutate } = useMutationData(
    ["create-automation"],
    () => createAutomations(id),
    "user-automations"
  );
  return { isPending, mutate };
};

export const useEditAutomation = (automationId: string) => {
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef(name); // Ref to hold latest name value for event listener
  const enableEdit = () => setEdit(true);
  const disableEdit = () => setEdit(false);

  // Update nameRef whenever name changes
  useEffect(() => {
    nameRef.current = name;
  }, [name]);

  const { isPending, mutate } = useMutationData(
    ["update-automation"],
    (data: { name: string }) =>
      updateAutomationName(automationId, { name: data.name }),
    "automation-info",
    disableEdit
  );

  function handleClickOutside(event: MouseEvent) {
    console.log("Hi", nameRef);
    if (nameRef.current != "") {
      console.log("Hi2");
      if (nameRef.current !== "") {
        console.log("Hi3");
        mutate({ name: nameRef.current });
      } else {
        console.log("Hi4");
        disableEdit();
      }
    }
  }

  // Add and clean up mousedown event listener
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return {
    edit,
    enableEdit,
    disableEdit,
    inputRef, // Still returned for component to attach to input
    isPending,
    name, // Return name state
    setName, // Return setName to update input value
  };
};
