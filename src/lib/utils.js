// src/lib/utils.js
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// cn() รวม classnames + merge tailwind class ที่ซ้ำกัน
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
