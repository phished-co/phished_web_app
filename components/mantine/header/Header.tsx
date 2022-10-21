import { useState } from 'react';
import { Button, createStyles, Header, Container, Group, Burger, Paper, Transition, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {GiFishingHook} from 'react-icons/gi'
import { useRouter } from 'next/router';
import ColorToggle from "../../colorToggle/ColorToggle"

const HEADER_HEIGHT = 60;

const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },

  dropdown: {
    position: 'absolute',
    top: HEADER_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 0,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopWidth: 0,
    overflow: 'hidden',

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  links: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  burger: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).color,
    },
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
}

export function HeaderResponsive({ links }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState('');
  const { classes, cx } = useStyles();
  const r = useRouter()

  const items = links.map((link) => (

    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        r.push({
          pathname: `${link.link}`
        })
        close();
      }}>
      {link.label}
    </a>
  ));

  return (
    <Header height={HEADER_HEIGHT} mb={120} className={classes.root}>
      <Container className={classes.header}>
        <span onClick={() => {r.push({pathname: '/'})}}>
        <GiFishingHook size={28}/>
        </span>
        <Group spacing={5} className={classes.links}>
          {items}

        </Group>
        <Group spacing={5} className={classes.links}>
          <Button variant="default">Log in</Button>
          <Button type='null'>Sign up</Button>
        <ColorToggle />

        </Group>

        <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" />


        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              {items}
              <Group position="center" grow pb="xl" px="md">
            <Button variant="default">Log in</Button>
            <Button type='null'>Sign up</Button>
          </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

// tsconfig strictNullCheck = false does get rid of type error