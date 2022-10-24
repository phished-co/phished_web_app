import styles from './CardMetric.module.css';
import { cardmetrics } from "../../data/fake_data"

import {
  Card,
  ColGrid,
  Metric,
  Text,
} from '@tremor/react';

export default function CardMetric(index) {

  const cardmetric = cardmetrics[index.index]

  return (
    <ColGrid numColsSm={2} numColsLg={4} gapX="gap-x-6" gapY="gap-y-6">
      {cardmetric.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
        </Card>
      ))}
    </ColGrid>
  );
}
