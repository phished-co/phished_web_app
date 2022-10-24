import { Button, createStyles, TextInput, Textarea } from '@mantine/core';
import styled from "styled-components";

const ButtonCont = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`


const useStyles = createStyles((theme) => ({
  root: {
    position: 'relative',
  },

  input: {
    height: 'auto',
    paddingTop: 16,
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  }
}));

const textAreaStyles = createStyles((theme) => ({
  root: {
    position: 'relative'
  },

  input: {
    height: 'auto',
    paddingTop: 16
  },

  label: {
    position: 'absolute',
    pointerEvents: 'none',
    fontSize: theme.fontSizes.xs,
    paddingLeft: theme.spacing.sm,
    paddingTop: theme.spacing.sm / 2,
    zIndex: 1,
  }
}))

export function MidtermForm() {
  // You can add these classes as classNames to any Mantine input, it will work the same
  const { classes } = useStyles();
  const { textarea } = textAreaStyles()

  return (
    <>
      <div>
        <TextInput label="First Name" placeholder="Jane" classNames={classes} mb={12} />
        <TextInput label="Last Name" placeholder="Doe" classNames={classes} mb={12} />
        <TextInput label="Sender Email" placeholder="my.email@gmail.com" classNames={classes} mb={12} />
        <TextInput label="Receiver Email" placeholder="receivers.email@gmail.com" classNames={classes} mb={12} />
        <TextInput label="Subject" placeholder="You won!" classNames={classes} mb={12} />
        <Textarea label="Content" placeholder="Hi Mom..." autosize minRows={4} classNames={textarea} />
      </div>
      <ButtonCont>
        <Button type='null'>Send email</Button>
        <Button variant='outline'>Schedule email for later</Button>
      </ButtonCont>
    </>
  );
}

export default MidtermForm