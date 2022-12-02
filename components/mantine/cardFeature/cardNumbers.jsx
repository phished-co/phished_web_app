import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from '@mantine/core';
import { RiMoneyDollarCircleFill, RiSpyFill, RiEmotionUnhappyFill } from 'react-icons/ri'


const numberdata = [
  {
    title: '~ $2 billion',
    description:
      'Amount that Canadians lost to cybercrime in 2019',
    citation:
      'Statistics Canada, 2022',
      icon: RiMoneyDollarCircleFill,
  },
  {
    title: '~ 70%',
    description:
      'Percentage of cybercrimes that involve identity theft',
    citation:
      'CBC, 2021',
      icon: RiSpyFill,
  },
  {
    title: '+ 260%',
    description:
      'Increase in cybercrimes from 2017 - 2021',
    citation:
      'Statistics Canada, 2022',
      icon: RiEmotionUnhappyFill,
  },

];


const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan('sm')]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: 'auto',

    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },

  citation: {
    fontSize: 15,
  },

  card: {
    border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
  },

  cardTitle: {
    '&::after': {
      content: '""',
      display: 'block',
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function NumbersCards() {
  const { classes, theme } = useStyles();
  const numbers = numberdata.map((numbers) => (
    <Card key={numbers.title} shadow="md" radius="md" className={classes.card} p="lg">
      <Group positon="apart">
        <numbers.icon size={30} stroke={2} color={theme.fn.primaryColor()} />
        <Text size="20px" weight={700}  >
          {numbers.title}
        </Text>
      </Group>
      <Text size="md" color="#5c5b5b" mt="sm">
        {numbers.description}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {numbers.citation}
      </Text>

    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {numbers}
      </SimpleGrid>
    </Container>
  );
}
