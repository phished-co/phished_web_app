import styled from "styled-components"
import { ProgressBar } from "../components/mantine/progressbar/ProgressBar"
import { createStyles, Container, Text, Divider, Button, Radio, NumberInput } from '@mantine/core';
import OnboardStep from "../components/onboarding/OnboardStep";


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
  
export default function Onboarding({

}) {
    

    return (
      <Wrapper size={700}>
        <ProgressBar />
        <OnboardStep />
      </Wrapper>
    )
  }
  