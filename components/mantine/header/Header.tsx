import { useState } from 'react';
import {
  Button,
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  Paper,
  Transition,
  Image,
  Avatar,
  Menu,
  UnstyledButton,
  Text,
} from '@mantine/core';
import { MantineModal } from '../modal/Modal';
import { useDisclosure } from '@mantine/hooks';
import { GiFishingHook } from 'react-icons/gi';
import { useRouter } from 'next/router';
import ColorToggle from '../../colorToggle/ColorToggle';
import { signIn, signOut, useSession } from 'next-auth/react';
import {
  IconLogout,
  IconStar,
  IconMessage,
  IconChevronDown,
  IconChartBar
} from '@tabler/icons';

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

  logo: {
    marginRight: '8px',
    cursor: 'pointer',
  },

  avatar: {
    cursor: 'pointer',
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },

    [theme.fn.smallerThan('sm')]: {
      borderRadius: 0,
      padding: theme.spacing.md,
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },

  user: {
    color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
    padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
    borderRadius: theme.radius.sm,
    transition: 'background-color 100ms ease',

    '&:hover': {
      backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    },

    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  userActive: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },
}));

interface HeaderResponsiveProps {
  links: { link: string; label: string }[];
  user: { name: string; image: string };
}

export function HeaderResponsive({ links, user }: HeaderResponsiveProps) {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState('');
  const { classes, cx, theme } = useStyles();
  const r = useRouter();
  const { data: session } = useSession();
  const [userMenuOpened, setUserMenuOpened] = useState(false);
  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={cx(classes.link, {
        [classes.linkActive]: active === link.link,
      })}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
        r.push({
          pathname: `${link.link}`,
        });
        close();
      }}
    >
      {link.label}
    </a>
  ));
  console.log(session);
  return (
    <Header height={HEADER_HEIGHT} className={classes.root}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          <span
            className={classes.logo}
            onClick={() => {
              r.push({ pathname: '/' });
            }}
          >
            <Image src="../../../../icon-logo-coloured.png" width={28} />
          </span>
          {items}
        </Group>
        <Group spacing={12} className={classes.links}>
          <MantineModal />
          {/* <Button variant="default">Log in</Button> */}
          {session ? (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  r.push({ pathname: '/account' });
                }}
              >
                Send Email
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              onClick={() => {
                r.push({ pathname: '/onboarding' });
              }}
            >
              Sign Up
            </Button>
          )}
          {session ? (
            <span className={classes.avatar}>

              {/* User drop down */}
              <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar radius="xl" size={20} src={session.user.image} onClick={() => {signOut()}} alt="your profile picture" />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {session.user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => {r.push({pathname: '/dashboard'})}} icon={<IconChartBar size={14} color={theme.colors.blue[6]} stroke={1.5} />}>
                Dashboard
              </Menu.Item>
              <Menu.Item onClick={() => {r.push({pathname: '/scheduleEmail'})}} icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                Saved emails
              </Menu.Item>

              <Menu.Divider />

              <Menu.Item onClick={() => {signOut()}} icon={<IconLogout size={14} stroke={1.5} color={theme.colors.red[6]}/>}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
            </span>
          ) : (
            <></>
          )}
          <ColorToggle />
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.burger}
          size="sm"
        />

        {/* Burger content */}
        <Transition transition="pop-top-right" duration={200} mounted={opened}>
          {(styles) => (
            <Paper className={classes.dropdown} withBorder style={styles}>
              <span
                onClick={() => {
                  r.push({ pathname: '/' });
                }}
              ></span>
              {items}
              <Group position="left" pb="xl" px="md">
                <MantineModal />
                {/* <Button variant="default">Log in</Button> */}
                {session ? (
                  <Button
                    variant="outline"
                    onClick={() => {
                      r.push({ pathname: '/account' });
                    }}
                  >
                    Send Email
                  </Button>
                ) : (
                  <Button
                    variant="outline"
                    onClick={() => {
                      r.push({ pathname: '/onboarding' });
                    }}
                  >
                    Sign Up
                  </Button>
                )}
                <Menu
            width={260}
            position="bottom-end"
            transition="pop-top-right"
            onClose={() => setUserMenuOpened(false)}
            onOpen={() => setUserMenuOpened(true)}
          >
            <Menu.Target>
              <UnstyledButton
                className={cx(classes.user, { [classes.userActive]: userMenuOpened })}
              >
                <Group spacing={7}>
                  <Avatar radius="xl" size={20} src={session.user.image} onClick={() => {signOut()}} alt="your profile picture" />
                  <Text weight={500} size="sm" sx={{ lineHeight: 1 }} mr={3}>
                    {session.user.name}
                  </Text>
                  <IconChevronDown size={12} stroke={1.5} />
                </Group>
              </UnstyledButton>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item onClick={() => {r.push({pathname: '/dashboard'})}} icon={<IconChartBar size={14} color={theme.colors.blue[6]} stroke={1.5} />}>
                Dashboard
              </Menu.Item>
              <Menu.Item onClick={() => {r.push({pathname: '/scheduleEmail'})}} icon={<IconStar size={14} color={theme.colors.yellow[6]} stroke={1.5} />}>
                Saved emails
              </Menu.Item>

              <Menu.Divider />

              <Menu.Item onClick={() => {signOut()}} icon={<IconLogout size={14} stroke={1.5} color={theme.colors.red[6]}/>}>Logout</Menu.Item>
            </Menu.Dropdown>
          </Menu>
                <ColorToggle />

              </Group>
            </Paper>
          )}
        </Transition>
      </Container>
    </Header>
  );
}

// tsconfig strictNullCheck = false does get rid of type error
