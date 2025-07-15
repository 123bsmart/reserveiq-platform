import { useCallback } from 'react';
import { toast } from 'react-toastify';

/**
 * Custom hook that returns a function to copy text to clipboard with toast feedback
 * @returns copyToClipboard function
 */
export const useCopy = (): ((text: string) => Promise<boolean>) => {
  const copyToClipboard = useCallback(async (text: string): Promise<boolean> => {
    if (!navigator.clipboard) {
      toast.error('Clipboard API not supported', {autoClose: 1500});
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      toast.info('Copied to clipboard', {autoClose: 1500});
      return true;
    } catch {
      toast.error('Failed to copy', {autoClose: 1500});
      return false;
    }
  }, []);

  return copyToClipboard;
};
