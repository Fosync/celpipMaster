import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatXP(xp: number): string {
  if (xp >= 1000) {
    return `${(xp / 1000).toFixed(1)}K`;
  }
  return xp.toString();
}

export function calculateLevel(xp: number): number {
  return Math.floor(xp / 500) + 1;
}
