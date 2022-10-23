import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { createStyles, Paper, Text, Title, Button, useMantineTheme } from '@mantine/core';
import styled from "styled-components";
import { useRouter } from "next/router";

const Container = styled.div`
  maxWidth: 1140px;

  button {
    background: white;
  }
`

const useStyles = createStyles((theme) => ({
  card: {
    height: 440,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    cursor: 'pointer'
  },

  title: {
    fontFamily: `${theme.fontFamily}`,
    fontWeight: 900,
    color: theme.white,
    lineHeight: 1.2,
    fontSize: 32,
    marginTop: theme.spacing.xs,
  },

  category: {
    color: theme.white,
    opacity: 0.8,
    fontWeight: 700,
    textTransform: 'uppercase',
  },
}));

function Card({ image, title, category }) {
  const { classes } = useStyles();
  const r = useRouter()

  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      sx={{ backgroundImage: `url(${image})` }}
      className={classes.card}
      onClick={() => { { category === 'quiz' ? r.push({ pathname: 'quiz' }) : '' } }}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" type='null'>
        Learn more
      </Button>
    </Paper>
  );
}

const data = [
  {
    image:
      'https://i.pinimg.com/564x/e4/50/12/e45012346d6734d6dc0817e7932db723.jpg',
    title: `Can you spot the phishing email? Take our new quiz!`,
    category: 'quiz',
  },
  {
    image:
      'https://i.pinimg.com/564x/75/14/39/75143976f254439cb0b3ed0eae826218.jpg',
    title: 'The most common types of phishing (and how to avoid them)',
    category: 'article',
  },
  {
    image:
      'https://i.pinimg.com/564x/f3/98/f1/f398f16b90dd07689a4df83d1ece2c3a.jpg',
    title: 'How Cyber Threats Work',
    category: 'article',
  },
  {
    image:
      'https://i.pinimg.com/564x/9e/e9/3e/9ee93eb98efcb7e53f91b02a85c11e85.jpg',
    title: 'How to help the older adults in your life get cyber safe',
    category: 'article',
  },
  {
    image:
      'https://i.pinimg.com/564x/64/48/4c/64484c24a197defb114640929d08e473.jpg',
    title: "Senior's guide to staying cyber safe",
    category: 'tourism',
  },
  {
    image:
      'https://i.pinimg.com/564x/5c/18/d3/5c18d33081fb632100884e85383d59e2.jpg',
    title: 'How anyone can become a confident online shopper',
    category: 'article',
  },
];

export function CardCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm}px)`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title}>
      <Card {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container>
      <Carousel
        slideSize="50%"
        breakpoints={[{ maxWidth: 'sm', slideSize: '100%', slideGap: 2 }]}
        slideGap="xl"
        align="start"
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}

export default CardCarousel