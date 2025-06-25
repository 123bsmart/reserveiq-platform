'use client';

import { buildingsData } from '@/shared/constants';
import { Card, Table, TableColumn } from '@/shared/ui';
import {
  getHealthTextByPercent,
  getAlertTextByHealthPercent,
  getAlertColorByHealthPercent,
} from '@/shared/utils/building-health';
import { useRouter } from 'next/navigation';
import React from 'react';

type BuildingData = {
  name: string;
  healthPercent: number;
  link: string;
};

export const Dashboard: React.FC = () => {
  const router = useRouter();

  const handleRowClick = (link: string): void => {
    router.push(link);
  };

  const columns: TableColumn<BuildingData>[] = [
    {
      key: 'name',
      header: 'Buildings Monitored',
      render: (item: BuildingData) => (
        <strong className="font-[600]" onClick={() => handleRowClick(item.link)}>
          {item.name}
        </strong>
      ),
    },
    {
      key: 'healthPercent',
      header: 'Reserve Health',
      render: (item: BuildingData) => `${item.healthPercent}% ${getHealthTextByPercent(item.healthPercent)}`,
    },
    {
      key: 'healthPercent',
      header: 'Alerts',
      render: (item: BuildingData) => (
        <span style={{ color: getAlertColorByHealthPercent(item.healthPercent) }}>
          {getAlertTextByHealthPercent(item.healthPercent)}
        </span>
      ),
    },
  ];

  return (
    <Card animate={false} className="max-w-[600px] mx-auto p-[30px]">
      <Table columns={columns} data={buildingsData} headerClassName="text-[#374151]" />
      <div className="text-center mt-[15px] text-[#6b7280] text-[0.9rem]">
        <strong>👆 Click any building to explore the full dashboard</strong>
      </div>
    </Card>
  );
};

export default Dashboard;
