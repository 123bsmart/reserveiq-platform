import { useCallback } from 'react';
import jsPDF from 'jspdf';

export const usePdf = (): ((content: string, filename?: string) => void) => {
  /**
   * Generates and downloads a PDF from plain text content
   * @param content - Text content to include in the PDF
   * @param filename - Optional filename for the downloaded PDF
   */
  const generatePdf = useCallback((content: string, filename = 'document.pdf'): void => {
    const doc = new jsPDF();

    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 10;
    const maxLineWidth = pageWidth - margin * 2;

    // Split text into lines that fit the page width
    const splitText = doc.splitTextToSize(content, maxLineWidth);

    // Set font size to 14px
    doc.setFontSize(14);

    // Add text starting at x=margin, y=20
    doc.text(splitText, margin, 20);

    // Save/download the PDF
    doc.save(filename);
  }, []);

  return generatePdf;
};
