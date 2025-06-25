import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names and merges Tailwind CSS classes efficiently
 *
 * @example
 * ```tsx
 * // Basic usage
 * <div className={cn('text-red-500', isActive && 'font-bold')}>
 *
 * // With conditional classes
 * <div className={cn(
 *   'base-class',
 *   variant === 'primary' ? 'bg-blue-500' : 'bg-gray-500',
 *   size === 'large' && 'text-lg'
 * )}>
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
