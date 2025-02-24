import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getMonth = (month: number): string | null => {
  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month >= 1 && month <= 12) {
    return months[month - 1];
  } else if (month >= 0 && month <= 11) {
    return months[month];
  }

  return null; // Return null for invalid input
};

export const duplicatationsValidations = (arr: string[], el: string) => {
  if (!arr.find((t) => t == el)) {
    arr.push(el);
    return arr;
  } else {
    arr = arr.filter((t) => t != el);
    return arr;
  }
};
