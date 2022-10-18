import styles from './CardMetric.module.css';

import {
  Card,
  ColGrid,
  Metric,
  Text,
} from '@tremor/react';

const categories = [
  [{
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
  {
    title: 'Worldwide Ranking',
    metric: 'Top 64%'
  }],
  [{
    title: 'Total Emails Sent',
    metric: '64',
  },
  {
    title: 'Total Times Phished',
    metric: '21',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#4',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 78%'
  }],
  [{
    title: 'Total Emails Sent',
    metric: '30',
  },
  {
    title: 'Total Times Phished',
    metric: '4',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#2',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 48%'
  }],
  [{
    title: 'Total Emails Sent',
    metric: '47',
  },
  {
    title: 'Total Times Phished',
    metric: '3',
  },
  {
    title: 'Rank Among Your Fish',
    metric: '#1',
  },
  {
    title: 'Worldwide Ranking',
    metric: 'Top 28%'
  }],
];

export default function CardMetric(index) {

  const category = categories[index.index]

  return (
    <ColGrid numColsSm={2} numColsLg={4} gapX="gap-x-6" gapY="gap-y-6">
      {category.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
        </Card>
      ))}
    </ColGrid>
  );
}
