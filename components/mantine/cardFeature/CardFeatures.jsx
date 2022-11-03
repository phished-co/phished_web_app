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
import { RiLock2Fill, RiSendPlaneFill, RiLineChartLine } from 'react-icons/ri'

const mockdata = [
  {
    title: 'Personalized Sending',
    description:
      'Phished sends phishing emails tailored to emulate common and dangerous emails that real world criminals use. ',
    icon: RiSendPlaneFill,
  },
  {
    title: 'Empowering Privacy',
    description:
      'Empower vulnerable internet users by providing them the education and training they need to avoid online fraud.',
    icon: RiLock2Fill,
  },
  {
    title: 'Dashboards and Metrics and Stats, oh my!',
    description:
      `View how your fish are progressing with our dashboard. Track their progress to ensure they're on the right track.`,
    icon: RiLineChartLine,
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

export function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card key={feature.title} shadow="md" radius="md" className={classes.card} p="xl">
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          Free and Open-Source
        </Badge>
      </Group>

      <Title order={2} className={classes.title} align="center" mt="sm">
        If you really love them, phish 'em
      </Title>

      <Text color="dimmed" className={classes.description} align="center" mt="md">
        Create campaigns, track metrics, and keep your loved ones on their toes – Phished handles it all. Free and open-source, forever.
      </Text>

      <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
        {features}
      </SimpleGrid>
    </Container>
  );
}