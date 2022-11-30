import { createStyles, Container, Group, Anchor, Image } from '@mantine/core';
import {GiFishingHook} from 'react-icons/gi'
import Link from 'next/link';
import { useRouter } from 'next/router';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 30,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
  logo: {
    marginRight: '8px',
    cursor: 'pointer'
  },
}));

let links = [
    {
      "link": "/about",
      "label": "About"
    },
    {
      "link": "/contact",
      "label": "Contact"
    },
    {
      "link": "/privacy",
      "label": "Privacy Policy"
    },
    {
      "link": "/terms",
      "label": "Terms & Conditions"
    }
  ]

export function FooterSimple() {
  const { classes } = useStyles();
  const r = useRouter()
  const items = links.map((link) => (
    <Link
      color="dimmed"
      key={link.label}
      href={link.link}
      // onClick={(event) => event.preventDefault()}
      font-size='12'
    >
      {link.label}
    </Link>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <span className={classes.logo} onClick={() => {r.push({pathname: '/'})}}>
          <Image src="../../../../icon-wordmark.png" width={100}/>
        </span>
        <Group className={classes.links}>{items}</Group>
      </Container>
    </div>
  );
}

export default FooterSimple
