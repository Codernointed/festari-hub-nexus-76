
/**
 * JavaScript version of the utility functions
 */

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility to merge class names with Tailwind classes
 * @param  {...any} inputs - Class names to be merged
 * @returns {string} - Merged class names
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
