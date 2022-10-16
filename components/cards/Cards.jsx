import {
  BadgeDelta,
  ButtonInline,
  Card,
  Footer,
  Metric,
  Text,
  Flex,
  ProgressBar,
  ColGrid,
} from '@tremor/react';

import { ArrowRightIcon } from '@heroicons/react/20/solid';

// const categories = [
//   {
//     delta: '10.9%',
//     deltaType: 'moderateDecrease',
//     metric: 'Henry Leung',
//     percentageValue: 32,
//     target: '80 days remaining',
//   },
//   {
//     title: 'Profit',
//     metric: '$ 40,598',
//     metricPrev: '$ 45,564',
//     delta: '-10.9%',
//     status: 'Underperforming',
//     color: 'amber',
//     text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
//   },
//   {
//     title: 'Customers',
//     metric: '1,016',
//     metricPrev: '1,001',
//     delta: '+1.3%',
//     status: 'Performing as usual',
//     color: 'blue',
//     text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
//   },
//   {
//     title: 'Test',
//     metric: '1,016',
//     metricPrev: '1,001',
//     delta: '+1.3%',
//     status: 'Performing as usual',
//     color: 'blue',
//     text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
//   }
// ];

const colors = {
  increase: 'emerald',
  moderateIncrease: 'emerald',
  unchanged: 'orange',
  moderateDecrease: 'rose',
  decrease: 'rose',
}

export default function Cards(props) {
  return (
    <ColGrid numColsSm={2} numColsLg={3} gapX="gap-x-6" gapY="gap-y-6">
      {props.categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Flex
            justifyContent="justify-start"
            alignItems="items-baseline"
            spaceX="space-x-3"
            truncate={true}
          >
            <Metric>{item.metric}</Metric>
          </Flex>
          <Flex marginTop="mt-4">
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar percentageValue={item.percentageValue} marginTop="mt-2" />
          <Flex justifyContent="justify-start" spaceX="space-x-2" marginTop="mt-4">
            <BadgeDelta deltaType={item.deltaType} />
            <Flex justifyContent="justify-start" spaceX="space-x-1" truncate={true}>
              <Text color={colors[item.deltaType]}>{item.delta}</Text>
              <Text truncate={true}> from last month</Text>
            </Flex>
          </Flex>
          <Footer>
            <ButtonInline
              size="sm"
              text="View details"
              handleClick={props.handleClick}
              Icon={ArrowRightIcon}
              iconPosition="right"
            />
          </Footer>
        </Card>
      ))}
    </ColGrid>
  );
}