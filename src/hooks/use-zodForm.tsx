"use client";
import { UseMutateFunction } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ZodSchema } from "zod";

type Props = {
  schema: ZodSchema;
  mutation: UseMutateFunction<any, any, any, any>;
  defaultValues?: Record<string, any>;
};

const useZodForm = ({ schema, mutation, defaultValues = {} }: Props) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues,
  });

  const onFormSubmit = handleSubmit(async (values) => mutation(values));

  return {
    register,
    errors,
    onFormSubmit,
    watch,
    reset,
  };
};

export default useZodForm;
