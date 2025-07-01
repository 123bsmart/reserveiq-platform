'use client';

import React from 'react';

export type TableColumn<T> = {
  key: keyof T & string;
  header: React.ReactNode;
  render?: (item: T) => React.ReactNode;
};

export type TableProps<T> = {
  columns: TableColumn<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  className?: string;
  headerClassName?: string;
  rowClassName?: string;
  cellClassName?: string;
};

export function Table<T>({
  columns,
  data,
  onRowClick,
  className = '',
  headerClassName = '',
  rowClassName = '',
  cellClassName = '',
}: TableProps<T>): JSX.Element {
  const defaultCellClassName = 'text-left p-[9px_8px] border-b border-[#e2e8f0] text-[0.95rem]';
  const finalCellClassName = cellClassName || defaultCellClassName;

  return (
    <table className={`w-full border-collapse ${className}`}>
      <thead className={`text-left text-[0.9rem] md:text-[0.95rem] ${headerClassName}`}>
        <tr>
          {columns.map((column) => (
            <th key={column.key} className={finalCellClassName}>
              {column.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={`${onRowClick ? 'cursor-pointer' : ''} ${rowClassName}`}
            onClick={() => onRowClick && onRowClick(item)}
          >
            {columns.map((column) => (
              <td key={`${index}-${column.key}`} className={finalCellClassName}>
                {column.render ? column.render(item) : item[column.key] as React.ReactNode}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
