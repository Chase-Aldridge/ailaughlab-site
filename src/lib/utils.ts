import { type ClassValue, clsx } from 'clsx'

// Lightweight cn() without tailwind-merge (no conflicts expected)
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}
