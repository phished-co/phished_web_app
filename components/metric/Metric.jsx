import styles from './Metric.module.css';

import {
  Card,
  ColGrid,
  Metric,
  Text,
} from '@tremor/react';

const categories = [
  {
    title: 'Total Emails Sent',
    metric: '72',
  },
  {
    title: 'Total Times Phished',
    metric: '18',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#3',
  },
];

export default function Metric() {
  return (
    <ColGrid numColsSm={2} numColsLg={4} gapX="gap-x-6" gapY="gap-y-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
        </Card>
      ))}
    </ColGrid>
  );
}
