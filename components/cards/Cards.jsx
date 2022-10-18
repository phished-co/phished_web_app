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
        <Card key={item.metric}>
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
              handleClick={() => { props.handleClick(item.id) }}
              Icon={ArrowRightIcon}
              iconPosition="right"
            />
          </Footer>
        </Card>
      ))}
    </ColGrid>
  );
}