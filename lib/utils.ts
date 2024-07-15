import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { AxiosError } from 'axios';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isAxiosError(error: any): error is AxiosError {
  return (error as AxiosError).isAxiosError !== undefined;
}

