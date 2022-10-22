
import styled from "styled-components"
import { ProgressBar } from "../components/mantine/progressbar/ProgressBar"
import { createStyles, Container, Text, Button, Divider } from '@mantine/core';


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
    },

}));

const Wrapper = styled(Container) `
    .section {
        max-width: 1140px;
        margin: 0 auto;
        margin-top: 1.5rem;
        margin-bottom: 2rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
`
  
export default function Onboarding() {
    const { classes } = useStyles();

  return (
    <Wrapper size={700}>
      <ProgressBar />
        <div className='section'>
            <h2 className={classes.title}>
                I want to phish{' '}
                <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'blue' }} inherit>
                    someone else
                </Text>
            </h2>
            <h2 className={classes.description}>
                Help your friends and family stay safe
            </h2>
            <Button
            variant="fill"
            type='null'>
                Continue
            </Button>
        </div>
        
        <Divider />

        <div className='section'>
            <h2 className={classes.title}>
                I want to phish{' '}
                <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'blue' }} inherit>
                    myself
                </Text>
            </h2>
            <h2 className={classes.description}>
                Start testing yourself now
            </h2>
            <Button
            variant="fill"
            type='null'>
                Continue
            </Button>
        </div>
        

   
    </Wrapper>
  )
}
