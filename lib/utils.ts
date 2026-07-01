import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Resolves an asset path by prepending the base path configured in the project.
 * Automatically strips the old '/1-year-mba' base path if it exists.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  
  // Strip '/1-year-mba' prefix if present
  let cleanPath = path;
  if (cleanPath.startsWith("/1-year-mba")) {
    cleanPath = cleanPath.slice("/1-year-mba".length);
  }
  
  // Ensure the path starts with a single slash
  if (!cleanPath.startsWith("/")) {
    cleanPath = "/" + cleanPath;
  }
  
  return `${basePath}${cleanPath}`;
}

