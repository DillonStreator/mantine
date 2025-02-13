import React from 'react';
import { RadarChart } from '@mantine/charts';
import { MantineDemo } from '@mantinex/demo';
import { multiData, multiDataCode } from './_data';

const code = `
import { RadarChart } from '@mantine/charts';

function Wrapper() {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
      {{props}}
    />
  );
}
`;

function Wrapper(props: any) {
  return (
    <RadarChart
      h={300}
      data={multiData}
      dataKey="product"
      withPolarRadiusAxis
      series={[
        { name: 'sales_january', color: 'lime.4', opacity: 0.1 },
        { name: 'sales_february', color: 'cyan.4', opacity: 0.1 },
      ]}
      {...props}
    />
  );
}

export const parts: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  code: [
    { code, language: 'tsx', fileName: 'Demo.tsx' },
    { code: multiDataCode, language: 'tsx', fileName: 'data.ts' },
  ],
  controls: [
    { type: 'boolean', prop: 'withPolarGrid', initialValue: true, libraryValue: null },
    { type: 'boolean', prop: 'withPolarAngleAxis', initialValue: true, libraryValue: null },
    { type: 'boolean', prop: 'withPolarRadiusAxis', initialValue: true, libraryValue: null },
  ],
};
