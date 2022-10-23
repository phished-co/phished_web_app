import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio } from '@mantine/core';

const mockdata = [
  {
    image:
      'https://i.pinimg.com/564x/e4/50/12/e45012346d6734d6dc0817e7932db723.jpg',
    title: `Can you spot the phishing email? Take our new quiz!`,
    category: 'article',
    date: 'October 22 2022'
  },
  {
    image:
      'https://i.pinimg.com/564x/75/14/39/75143976f254439cb0b3ed0eae826218.jpg',
    title: 'The most common types of phishing (and how to avoid them)',
    category: 'article',
    date: 'October 5 2022'
  },
  {
    image:
      'https://i.pinimg.com/564x/f3/98/f1/f398f16b90dd07689a4df83d1ece2c3a.jpg',
    title: 'How Cyber Threats Work',
    category: 'article',
    date: 'September 21 2022'
  },
  {
    image:
      'https://i.pinimg.com/564x/9e/e9/3e/9ee93eb98efcb7e53f91b02a85c11e85.jpg',
    title: 'How to help the older adults in your life get cyber safe',
    category: 'article',
    date: 'September 14 2022'
  },
  {
    image:
      'https://i.pinimg.com/564x/64/48/4c/64484c24a197defb114640929d08e473.jpg',
    title: "Senior's guide to staying cyber safe",
    category: 'tourism',
    date: 'September 09 2022'
  },
  {
    image:
      'https://i.pinimg.com/564x/5c/18/d3/5c18d33081fb632100884e85383d59e2.jpg',
    title: 'How anyone can become a confident online shopper',
    date: 'September 07 2022'
  },
];

const useStyles = createStyles((theme) => ({
  card: {
    transition: 'transform 150ms ease, box-shadow 150ms ease',

    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow: theme.shadows.md,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 600,
  },
}));

export function ArticleCards() {
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={1920 / 1080}>
        <Image src={article.image} />
      </AspectRatio>
      <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
        {article.date}
      </Text>
      <Text className={classes.title} mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <Container py="xl">
      <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default ArticleCards