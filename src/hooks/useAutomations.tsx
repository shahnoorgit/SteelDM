"use client";
import {
  createAutomations,
  deleteKeyword,
  saveKeyword,
  saveListener,
  saveTrigger,
  updateAutomationName,
} from "@/actions/automations";
import { useMutationData } from "./use-mutation-data";
import { useEffect, useRef, useState } from "react";
import { z } from "zod";
import useZodForm from "./use-zodForm";
import { AppDispatch, useAppSelector } from "@/redux/store";
import { useDispatch } from "react-redux";
import { TRIGGER } from "@/redux/slice/automation";

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

export const useListener = (id: string) => {
  const [listener, setListener] = useState<"MESSAGE" | "SMARTAI" | null>(null);
  const promptSchema = z.object({
    prompt: z.string().min(1),
    reply: z.string(),
  });

  const { mutate, isPending } = useMutationData(
    ["create-listner"],
    (data: { prompt: string; reply: string }) =>
      saveListener(id, listener || "MESSAGE", data.prompt, data.reply),
    "automation-info"
  );

  const { register, errors, onFormSubmit, reset, watch } = useZodForm({
    schema: promptSchema,
    mutation: mutate,
  });

  const onsetListener = (type: "MESSAGE" | "SMARTAI") => {
    console.log(type);
    setListener("MESSAGE");
  };

  return {
    isPending,
    onsetListener,
    listener,
    register,
    onFormSubmit,
  };
};

export const useTriggers = (id: string) => {
  const types = useAppSelector(
    (state) => state.AutomationReducer.trigger?.types
  );

  const dispatch: AppDispatch = useDispatch();
  const onSetTrigger = (type: "COMMENT" | "DM") =>
    dispatch(TRIGGER({ trigger: { type } }));

  const { mutate, isPending } = useMutationData(
    ["add-trigger"],
    (data: { types: string[] }) => saveTrigger(id, data.types),
    "automation-info"
  );

  const onSaveTrigger = () => mutate({ types });
  return { types, onSetTrigger, onSaveTrigger, isPending };
};

export const useKeyWords = (id: string) => {
  const [keyword, setKeyword] = useState("");
  const onValueChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(e.target.value);

  const { mutate } = useMutationData(
    ["add-keyword"],
    (data: { keyword: string }) => saveKeyword(id, data.keyword),
    "automation-info",
    () => setKeyword("")
  );

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      mutate({ keyword });
      setKeyword("");
    }
  };

  const { mutate: deleteMutation } = useMutationData(
    ["delete-keyword"],
    (data: { id: string }) => deleteKeyword(data.id),
    "automation-info"
  );

  return { keyword, onValueChange, onKeyPress, deleteMutation };
};
