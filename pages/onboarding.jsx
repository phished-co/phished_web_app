import styled from 'styled-components';
import { ProgressBar } from '../components/mantine/progressbar/ProgressBar';
import {
  createStyles,
  Text,
  Divider,
  Button,
  Radio,
  NumberInput,
} from '@mantine/core';
import OnboardStep from '../components/onboarding/OnboardStep';


const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 4rem 2rem;
`;

export default function Onboarding() {
  return (
    <Container>
      <ProgressBar />
    </Container>
  );
}

