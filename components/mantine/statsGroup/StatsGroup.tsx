import { createStyles, Text } from '@mantine/core';

let data = [
    {
      "title": "6.4 billion emails are sent every day worldwide",
      "description": "Cybercriminals pursue personal information, like a person's identity, to use in later phishing attacks."
    },
    {
      "title": "Victims over 60 years of age lose an average of $34 200",
      "description": "Older adults are significantly more likely to lose money to online fraud."
    },
    {
      "title": "56% of Canadians report being a victim of online fraud",
      "description": "1/10 Canadiens, tech-savvy or not, will unknowingly reply to a phishing email today."
    }
  ]

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `linear-gradient(-60deg, ${theme.colors[theme.primaryColor][4]} 0%, ${
      theme.colors[theme.primaryColor][7]
    } 100%)`,
    padding: theme.spacing.xl * 1.5,
    borderRadius: theme.radius.md,
    maxWidth: '1140px',
    margin: '0 auto',

    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.white,
    textTransform: 'uppercase',
    fontWeight: 700,
    fontSize: theme.fontSizes.sm,
  },

  count: {
    color: theme.white,
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: theme.colors[theme.primaryColor][0],
    fontSize: theme.fontSizes.sm,
    marginTop: 5,
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `1px solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `1px solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}));

interface StatsGroupProps {
  data: { title: string; stats: string; description: string }[];
}

export function StatsGroup() {
  const { classes } = useStyles();
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      {/* <Text className={classes.count}>{stat.stats}</Text> */}
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));
  return <div className={classes.root}>{stats}</div>;
}

export default StatsGroup