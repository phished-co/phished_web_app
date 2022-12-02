import { createStyles, SimpleGrid, Card, Image, Text, Container, AspectRatio, Title, Divider } from '@mantine/core';
import Router, { useRouter } from 'next/router';

const mockdata = [
  // {
  //   image:
  //     '../../ArticleSplash/horrorzontal.png',
  //   title: `Can you spot the phishing email? Take our new quiz!`,
  //   category: 'article',
  //   date: 'October 22 2022',
  //   url: 'quiz'
  // },
  {
    image:
      '../../ArticleSplash/Ocean.png',
    title: 'The most common types of phishing (and how to avoid them)',
    category: 'article',
    date: 'October 5 2022',
    url: 'learn/2'
  },
  {
    image:
      '../../ArticleSplash/Browser.png',
    title: 'How Cyber Threats Work',
    category: 'article',
    date: 'September 21 2022',
    url: 'learn/3'
  },
  {
    image:
      '../../ArticleSplash/Drown.png',
    title: 'How to help the older adults in your life get cyber safe',
    category: 'article',
    date: 'September 14 2022',
    url: 'learn/4'
  },
  {
    image:
      '../../ArticleSplash/Shield.png',
    title: "Senior's guide to staying cyber safe",
    category: 'tourism',
    date: 'September 09 2022',
    url: 'learn/5'
  },
  {
    image:
      '../../ArticleSplash/laptop.png',
    title: 'How anyone can become a confident online shopper',
    date: 'September 07 2022',
    url: 'learn/6'
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

export function QuizCard () {
  const r = useRouter();
  const { classes } = useStyles();

 const card = 
  <Card key="Can you spot the phishing email? Take our new quiz!" p="md" radius="md" component="a" href="#" className={classes.card} onClick={() => r.replace(`/quiz`)}>
    <AspectRatio ratio={1920 / 1080}>
      <Image src='../../ArticleSplash/horrorzontal.png' />
    </AspectRatio>
    <Text color="dimmed" size="xs" transform="uppercase" weight={700} mt="md">
      October 22 2022
    </Text>
    <Text className={classes.title} mt={5}>
      Can you spot the phishing email? Take our new quiz!
    </Text>
  </Card>

 return(
<Container py="xl">
  <Title order={2}>Phishing Quiz</Title>
  <Divider size="xs" mt={5} mb={10}/>
<SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
  {card}
</SimpleGrid>
</Container>
)};

export function ArticleCards() {
  const r = useRouter();
  const { classes } = useStyles();

  const cards = mockdata.map((article) => (
    <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card} onClick={() => r.replace(`/${article.url}`)}>
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
      <Title order={2}>Articles</Title>
      <Divider size="xs" mt={5} mb={10}/>
      <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
        {cards}
      </SimpleGrid>
    </Container>
  );
}

export default ArticleCards