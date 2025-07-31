import { emailContent } from '../data';

export const generateTemplateContent = (selected: string): string => {
  return emailContent[selected as keyof typeof emailContent];
};

export const getDatedFilename = (filename: string): string => {
  const date = new Date();
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const dateStr = `${yyyy}-${mm}-${dd}`;

  const dotIndex = filename.lastIndexOf('.');
  if (dotIndex === -1) return `${filename}-${dateStr}`;
  return `${filename.slice(0, dotIndex)}-${dateStr}${filename.slice(dotIndex)}`;
};
