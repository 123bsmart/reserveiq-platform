import { cn } from '@/shared/utils';
import React, { useImperativeHandle, useRef, useState } from 'react';
import { ControllerRenderProps, FieldValues } from 'react-hook-form';

type FormUploadProps = {
  label?: string;
  accept?: string;
  optional?: boolean;
} & ControllerRenderProps<FieldValues, string>;

export const FormUploadInput = React.forwardRef<HTMLInputElement, FormUploadProps>(
  ({ accept = '.pdf,.xlsx,.xls,.docx,.doc', ...props }, ref): React.ReactElement => {
    const internalRef = useRef<HTMLInputElement>(null);
    const [dragOver, setDragOver] = useState(false);
    const file = props.value as File | null;

    useImperativeHandle(ref, () => internalRef.current as HTMLInputElement);

    const handleFileChange = (newFile: File): void => {
      if (newFile.size > 10 * 1024 * 1024) {
        alert('File must be under 10MB.');
        return;
      }
      props.onChange(newFile);
    };

    return (
      <>
        <div
          className={cn(
            'border-2 border-dashed border-gray-300 rounded-lg bg-gray-50 p-10 text-center transition-all cursor-pointer',
            'hover:border-blue-500 hover:bg-blue-50',
            dragOver && 'border-green-500 bg-green-50'
          )}
          onClick={() => internalRef.current?.click()}
          onDragOver={(e) => {
            e.preventDefault();
            setDragOver(true);
          }}
          onDragLeave={(e) => {
            e.preventDefault();
            setDragOver(false);
          }}
          onDrop={(e) => {
            e.preventDefault();
            setDragOver(false);
            const droppedFile = e.dataTransfer.files?.[0];
            if (droppedFile) handleFileChange(droppedFile);
          }}
        >
          <div className="text-3xl text-gray-400 mb-2">📁</div>
          <div className="text-gray-700 font-semibold">Click to upload or drag and drop</div>
          <div className="text-sm text-gray-500">PDF, Excel, or Word files (max 10MB)</div>
          <input
            type="file"
            ref={internalRef}
            accept={accept}
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleFileChange(file);
            }}
            className="hidden"
          />
        </div>

        {file && (
          <div className="file-info mt-3 p-3 bg-blue-50 border border-blue-200 rounded text-base/[1.2]">
              <strong>Selected file:</strong> {file.name}
              <br />
              <strong>Size:</strong> {(file.size / 1024 / 1024).toFixed(2)} MB
              <br />
              <strong>Type:</strong> {file.type || 'Unknown'}
          </div>
        )}
      </>
    );
  }
);
