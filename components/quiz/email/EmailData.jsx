import React, { useState } from "react"
import { Button, Divider, Text, Title, Container } from "@mantine/core";
import styled from "styled-components";
import { useRouter } from 'next/router'


// Quiz data
export const questions = [
  {
      questionsText: "Personal Contact with External Link",
      questionsTip: "Check link URLs by hovering over them! Don't worry about clicking anything malicious – the links are non-functional and for demonstrative purposes only.",
      sname: "Logan MacDougall",
      semail: "l.macdougall@gmail.com",
      answerOptions: [
        { answerText: "Phishing", isCorrect: true },
        { answerText: "Legitimate", isCorrect: false }
      ],
      content: `Here are the photos from `,
      content2: `last vacation!`,
      content3: ``,
      urldesc: "https://googlephotos.com",
      src: "",
      alt: "",
  },
  {
    questionsText: "Email with attachment",
    questionsTip: "This example contains the attachment. Do you want to check the file?",
    sname: "Natasha Gisman",
    semail: "gis.nas.man@gmail.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `2022 Budget Plan`,
    content2: `Hey, please double check the attachment to confirm your order`,
    content3: ` to see what I've been working on!`,
    urldesc: "shorturl.at/aqBCD",
    src: "../../../docimg.png",
    alt: "google doc icon",
  },
  {
    questionsText: "Security Alert",
    questionsTip: "It looks like you got a security alert ",
    sname: "Google",
    semail: "security@googl.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `Hey, we have noticed some unusul activity `,
    content2: `Was this you?`,
    content3: `Click the link to confirm this activity `,
    urldesc: "https://googlephotos.com",
    src: "../../../githublogo.png",
    alt: "github logo",
  },
  {
      questionsText: "Personal Contact with External Link",
      questionsTip: "This question is similiar to the previous question. Try to see if the URL link is credible. ",
      sname: "Trevor Tyler Lee",
      semail: "t.tylee@gmail.com",
      answerOptions: [
        { answerText: "Phishing", isCorrect: true },
        { answerText: "Legitimate", isCorrect: false }
      ],
      content: `Hey, do you wanna see what I've changed? `,
      content2: `click here`,
      content3: ` to see what I've been working on!`,
      urldesc: "shorturl.at/aqBCD",
      src: "",
      alt: "",
  },

  {
    questionsText: "Another example with an attachment",
    questionsTip: "This example contains the attachment. Check if you",
    sname: "La Boutique de Jeanne ",
    semail: "j.ane@gmail.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `Order Confirmation`,
    content2: `Thank you for your purchase. Here's the confirmation of your order.`,
    content3: ``,
    urldesc: "shorturl.at/aqBCD",
    src: "../../../pdfimg.png",
    alt: "pdf icon",
  },
  {
    questionsText: "New Email from Unknown Sender ",
    questionsTip: "You received the email from a sender that you don't recognize.",
    sname: "Ivan Gartner",
    semail: "gartner.ii@gmail.com",
    answerOptions: [
      { answerText: "Phishing", isCorrect: true },
      { answerText: "Legitimate", isCorrect: false }
    ],
    content: `Security Alert `,
    content2: `Was this you?`,
    content3: `Confirm this login activity`,
    urldesc: "shorturl.at/aqBCD",
    src: "",
    alt: "",
  },

];


// Styled-comp
const AnswerSection = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
gap: 1rem;
margin-top: 20px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .sender {
    display: inline-block;
    align-items: center;
  }

  .header {
    display: flex;
    align-items: center;
    
    p {
      margin: 0;
    }
  }
`
const SurroundingBox = styled.div`
  width: 100%;
  min-height: 4rem;
  background: lightgray;
  padding: 2rem;
  }
`

const HoverLink = styled.span`
    color: blue;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
`

const IconImg = styled.img`
    width: 40px;
    height: 40px;
`

const Wrapper = styled(Container)`
  margin-top: 3rem;
  ${'' /* outline: 2px solid red; */}
  padding: 1rem 4vw;
`
const URLContainer = styled.div`
  background: gray;
  color: white;
  max-width: 32rem;
  margin-top: 8rem;
  padding-left: 0.5rem;
  opacity: 0;

  ${Container}:hover & {
    opacity: 1;
  }
`

const EmailContainer = styled.div`
  width: 100%;
  min-height: 8rem;
  background: white;
  padding: 1rem;
  color: black;
`

const Circle = styled.div`
  height: 4rem;
  width: 4rem;
  background: purple;
  border-radius: 8rem;
  display: block;
  margin-right: 2rem;
`

const BodyCont = styled.div`
margin-top: 3rem;
${'' /* outline: 2px solid red; */}
padding: 1rem 4vw;`


const ResultCont = styled.div`
display: flex;
flex-direction: column;
justfiy-content: center;
align-items: center;
margin: 2rem;
padding: 2rem;
gap: 2rem;
`


// Actual Body
export default function EmailBody(){

const [currentQuestion, setCurrentQuestion] = useState(0);

const [showScore, setShowScore] = useState(false);

const [score, setScore] = useState(0);


// QUIZ HEADER
const QuizTitle = ()=> {
  return<>
      <Text color='dimmed'>Question {currentQuestion + 1} / {questions.length}</Text>
      <Title>{questions[currentQuestion].questionsText}</Title>
      <Text>{questions[currentQuestion].questionsTip}</Text>
      <Divider mt={32} />
  </>
};

const ResultPage = () =>{
  return <>
    <Title> Your Result</Title>
    <Divider mt= {32} />
    <ResultCont>
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta="center"
        fz="xl"
        fw={700}
      ></Text>
    </ResultCont>
  </>
}

// EMAIL SENDER
const SenderEmail = ()=> {
  return<>
      <div className='sender'>
          <Text weight={700}>{questions[currentQuestion].sname}</Text>
          <Text color='dimmed' weight={400}>{questions[currentQuestion].semail}</Text>
      </div>
  </>
};


const handleAnswerButtonClick = (isCorrect) => {
  if(isCorrect === true){
    setScore(score + 1);
  }

  const nextQuestion = currentQuestion + 1;
  if(nextQuestion < questions.length){
    setCurrentQuestion(nextQuestion)
  } else {
    setShowScore(true)
  }
}


const r = useRouter();

const resetQuestion = () => {
  setCurrentQuestion(0);
  setShowScore(false);
  setScore(0);
  
  r.push = () => { r.push("/quiz") }
}




return (
  <>
    {showScore ? (
      <Wrapper>
        <Title>Nice Try!</Title>
        <Divider mt= {32} />
          <ResultCont>
            <Text
              size={30}
              weight={700}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
            >You got {score} out of {questions.length} correct!
            </Text>
            <Text>
              Try until you get it all right! The more you practice, the safer you are from phishing attacks.
              <br />
              Learn more about how to protect yourself and loved ones.
              <br />
              <HoverLink><a href="https://www.phished.app/learn">Click Here</a></HoverLink>
            </Text>
            
            <Button type='null' onClick={resetQuestion}>Try Again</Button>
        
          </ResultCont>
      </Wrapper>

    ) : (
    <>
      <Wrapper>

        {/* Header */}
          <QuizTitle />
          <AnswerSection>
              {questions[currentQuestion].answerOptions.map((answerOptions)=>
                <Button fullWidth type='null' onClick={()=>handleAnswerButtonClick(answerOptions.isCorrect)}>{answerOptions.answerText}</Button>)}
          </AnswerSection>

        {/* Body */}
      
      
          <BodyCont>
            <Header>
              <div className='header'>
                <Circle />
                <SenderEmail />
              </div>
            </Header>
            
            <SurroundingBox>
              {currentQuestion === 1 || currentQuestion === 4? (
                <EmailContainer>
                  <a href="https://google.com">
                    <IconImg src={questions[currentQuestion].src} alt={questions[currentQuestion].alt} />
                    <HoverLink>{questions[currentQuestion].content}</HoverLink>
                  </a>
                  <p>{questions[currentQuestion].content2}</p>
                </EmailContainer>
        
              ) : (   
              
                <EmailContainer>
                <p>{questions[currentQuestion].content}<HoverLink>{questions[currentQuestion].content2}</HoverLink>{questions[currentQuestion].content3}</p>
                <img width= "100" height= "auto" src={questions[currentQuestion].src} alt={questions[currentQuestion].alt} />
                </EmailContainer>)}
              </SurroundingBox>
      
            <URLContainer>
              {questions[currentQuestion].urldesc}
            </URLContainer>
          </BodyCont>
      </Wrapper>
    </>
    )}
  
  
  </> 
)
};