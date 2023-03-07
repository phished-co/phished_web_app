import React, { useState } from 'react';
import {
  Button,
  Divider,
  Text,
  Title,
  Stepper,
  MantineThemeOverride,
  MantineProvider,
} from '@mantine/core';
import styled from 'styled-components';
import { useRouter } from 'next/router';

// Quiz data
export const questions = [
  {
    questionsText: 'Personal Contact with External Link',
    questionsTip:
      "Check link URLs by hovering over them! Don't worry about clicking anything malicious – the links are non-functional and for demonstrative purposes only.",
    sname: 'Logan MacDougall',
    semail: 'l.macdougall@gmail.com',
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legitimate', isCorrect: false },
    ],
    content: `Here are the photos from `,
    content2: `last vacation!`,
    content3: ``,
    urldesc: 'https://googlephotos.com',
    src: '',
    alt: '',
    bgcolor: 'purple',
  },
  {
    questionsText: 'Email with attachment',
    questionsTip:
      'This example contains the attachment. Do you want to check the file?',
    sname: 'Natasha Gisman',
    semail: 'gis.nas.man@gmail.com',
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legitimate', isCorrect: false },
    ],
    content: `2022 Budget Plan`,
    content2: `Hey, please double check the attachment to confirm your order`,
    content3: ` to see what I've been working on!`,
    urldesc: 'shorturl.at/aqBCD',
    src: '../../docimg.png',
    alt: 'google doc icon',
    bgcolor: 'blue',
  },
  {
    questionsText: 'Security Alert',
    questionsTip: 'It looks like you got a security alert ',
    sname: 'Google',
    semail: 'security@googl.com',
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legitimate', isCorrect: false },
    ],
    content: `Hey, we have noticed some unusul activity `,
    content2: `Was this you?`,
    content3: `Click the link to confirm this activity `,
    urldesc: 'https://googlephotos.com',
    src: '../../githublogo.png',
    alt: 'github logo',
    bgcolor: 'orange',
  },
  {
    questionsText: 'Personal Contact with External Link',
    questionsTip:
      'This question is similiar to the previous question. Try to see if the URL link is credible. ',
    sname: 'Trevor Tyler Lee',
    semail: 't.tylee@gmail.com',
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legitimate', isCorrect: false },
    ],
    content: `Hey, do you wanna see what I've changed? `,
    content2: `click here`,
    content3: ` to see what I've been working on!`,
    urldesc: 'shorturl.at/aqBCD',
    src: '',
    alt: '',
    bgcolor: '#f1f3f4',
  },

  {
    questionsText: 'Another example with an attachment',
    questionsTip: 'This example contains the attachment. Can you verify them?',
    sname: 'La Boutique de Jeanne ',
    semail: 'j.ane@gmail.com',
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legitimate', isCorrect: false },
    ],
    content: `Order Confirmation`,
    content2: `Thank you for your purchase. Here's the confirmation of your order.`,
    content3: ``,
    urldesc: 'shorturl.at/aqBCD',
    src: '../../pdfimg.png',
    alt: 'pdf icon',
    bgcolor: 'yellow',
  },
  {
    questionsText: 'New Email from Unknown Sender ',
    questionsTip:
      "You received the email from a sender that you don't recognize.",
    sname: 'Ivan Gartner',
    semail: 'gartner.ii@gmail.com',
    answerOptions: [
      { answerText: 'Phishing', isCorrect: true },
      { answerText: 'Legitimate', isCorrect: false },
    ],
    content: `Security Alert `,
    content2: `Was this you? `,
    content3: `Confirm this login activity`,
    urldesc: 'shorturl.at/aqBCD',
    src: '',
    alt: '',
    bgcolor: 'green',
  },
];

// Styled-comp

const Wrapper = styled.div`
  margin-top: 3rem;
  padding: 1rem 4vw;

  .email {
    padding: 1rem 4vw 2rem 4vw;
    border: 0.2rem solid #f1f1f1;
    border-radius: 5px;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .header {
    display: flex;
    align-items: center;

    p {
      margin: 0;
    }
  }
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  margin: 20px;
`;

const SurroundingBox = styled.div`
  width: 100%;
  min-height: 4rem;
  background: lightgray;
  padding: 1.5rem;
  }
`;

const HoverLink = styled.span`
  color: blue;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const IconImg = styled.img`
  width: 40px;
  height: 40px;
`;

const EmailContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  background: white;
  padding: 1rem 2rem;
  color: black;
`;

const URLContainer = styled.div`
  background: gray;
  color: white;
  max-width: 32rem;
  padding: 0 0.5rem;
  opacity: 0;
  position: fixed;
  bottom: 0px;
  left: 0px;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const ResultCont = styled.div`
  display: flex;
  flex-direction: column;
  justfiy-content: center;
  align-items: center;
  margin: 2rem;
  padding: 2rem;
  gap: 2rem;
`;

// Email Body
export default function EmailBody() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [showScore, setShowScore] = useState(false);

  const [score, setScore] = useState(0);

  const Circle = styled.div`
    height: 3.5rem;
    width: 3.5rem;
    background: ${questions[currentQuestion].bgcolor};
    border-radius: 8rem;
    display: block;
    margin-right: 2rem;
  `;
  const [active, setActive] = useState(currentQuestion);

  // QUIZ HEADER
  const QuizTitle = () => {
    return (
      <>
        <Stepper active={active} onStepClick={setActive}>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
        </Stepper>
      </>
    );
  };

  // RESULT PAGE
  const ResultPage = () => {
    return (
      <>
        <Stepper active={active} onStepClick={setActive(6)}>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Step allowStepSelect={false}>
            <Title>{questions[currentQuestion].questionsText}</Title>
            <Text color="dimmed">
              {questions[currentQuestion].questionsTip}
            </Text>
          </Stepper.Step>
          <Stepper.Completed allowStepSelect={false}>
            <Title>Nice Try!</Title>
          </Stepper.Completed>
        </Stepper>

        <Divider mt={32} />

        <ResultCont>
          <Text
            size={30}
            weight={700}
            variant="gradient"
            gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
          >
            You got {score} out of {questions.length} correct!
          </Text>
          <Text>
            Try until you get it all right! The more you practice, the safer you
            are from phishing attacks.
            <br />
            Learn more about how to protect yourself and loved ones.{' '}
            <HoverLink>
              <a href="https://www.phished.app/learn">Click Here</a>
            </HoverLink>
          </Text>

          <Button type="null" onClick={resetQuestion}>
            Try Again
          </Button>
        </ResultCont>
      </>
    );
  };

  // EMAIL SENDER
  const SenderEmail = () => {
    return (
      <>
        <div className="sender">
          <Text weight={700}>{questions[currentQuestion].sname}</Text>
          <Text color="dimmed" weight={400}>
            {questions[currentQuestion].semail}
          </Text>
        </div>
      </>
    );
  };

  // CALCULATE THE SCORE
  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setActive(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const r = useRouter();

  const resetQuestion = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
    setActive(0);

    r.push = () => {
      r.push('/quiz');
    };
  };

  return (
    <>
      {showScore ? (
        <Wrapper>
          <ResultPage />
        </Wrapper>
      ) : (
        <>
          <Wrapper>
            {/* Header */}
            <QuizTitle />
            <Divider mt={20} />
            <AnswerSection>
              {questions[currentQuestion].answerOptions.map((answerOptions) => (
                <Button
                  fullWidth
                  type="null"
                  onClick={() =>
                    handleAnswerButtonClick(answerOptions.isCorrect)
                  }
                >
                  {answerOptions.answerText}
                </Button>
              ))}
            </AnswerSection>

            {/* Body */}
            <Wrapper className="email">
              <Header>
                <div className="header">
                  <Circle background={questions[currentQuestion].bgcolor} />
                  <SenderEmail />
                </div>
              </Header>

              <SurroundingBox>
                {currentQuestion === 1 || currentQuestion === 4 ? (
                  <EmailContainer>
                    <a href="https://google.com">
                      <IconImg
                        src={questions[currentQuestion].src}
                        alt={questions[currentQuestion].alt}
                      />
                      <HoverLink>
                        {questions[currentQuestion].content}
                      </HoverLink>
                    </a>
                    <Text>{questions[currentQuestion].content2}</Text>
                  </EmailContainer>
                ) : (
                  <EmailContainer>
                    <Text>
                      {questions[currentQuestion].content}
                      <HoverLink>
                        {questions[currentQuestion].content2}
                      </HoverLink>
                      {questions[currentQuestion].content3}
                    </Text>
                    <img
                      width="100"
                      height="auto"
                      src={questions[currentQuestion].src}
                      alt={questions[currentQuestion].alt}
                    />
                  </EmailContainer>
                )}
              </SurroundingBox>
            </Wrapper>
            <URLContainer>{questions[currentQuestion].urldesc}</URLContainer>
          </Wrapper>
        </>
      )}
    </>
  );
}
