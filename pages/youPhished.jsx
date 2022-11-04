import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  height: 1500px;
  margin: 0 auto;
  margin-top: 4rem;
  margin-bottom: 10rem;
  padding: 20px;
  border: green 2px solid;
`;

export const HeadCont = styled.div`
  text-align: center;
`;

export const BlockCont = styled.div`
min-width:400px;
  width: 400px;
  height: 275px;
  margin: 20px;
  padding: 20px;
  border: red 2px solid;
`;

export const RowCont = styled.div`
  display: flex;
  flex-direction: row;
`;

export const BlockHead = styled.text`
    font-size: 20px;
    font-weight: 600;
`

export const BodyText = styled.text`
    font-size: 16px;
    position: relative;
`

export const NumHead = styled.text`
    font-size: 36px;
    font-weight: 600;
    margin-right: 25px;
    border:red solid 2px;
    position: relative;
`

export const StepCont = styled.div`
display:flex;
    position: relative;
    width: 700px;
    height: 150px;
    margin-top: 30px;
    align-items: top;
    border: blue solid 2px;
`

export const StepTextCont = styled.div`
display: flex;
    position: relative;
    max-width: 600px;
    height: 150px;
    border: blue solid 2px;
`



export default function tracktest() {
  return (
    <>
      <Container>
        <HeadCont>
          <h1>Oops! 🎣</h1>
          <h2>
            You’ve accidentally clicked on a potentially dangerous email link.
            <br />
            You’ve been phished [x] time(s) this month.
          </h2>
        </HeadCont>
        <RowCont>
          <BlockCont>
            <BlockHead>What happened?</BlockHead>
            <br/>
            <BodyText>
              [Name] sent you this email using Phished, a non-profit
              organization focused on internet safety and awareness.
              <br />
              <br />
              The link you clicked on is an example of how cybercriminals can
              trick you into revealing personal information.
            </BodyText>
          </BlockCont>
          <BlockCont>
            <BlockHead>What happened?</BlockHead>
            <br/>
            <BodyText>
              Don’t get discouraged or feel embarassed–phishing emails have
              fooled politicians, CEOs, and more. The reason these emails are so
              dangerous is it only takes a split-second to click a malicious
              link.
              <br />
              <br />
              The next time you’re checking your email, keep the following tips
              in mind.
            </BodyText>
          </BlockCont>
        </RowCont>
        <div>
            <StepCont>
                <NumHead>1.</NumHead> 
                <StepTextCont>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </StepTextCont> 
            </StepCont>
            <StepCont>
                <NumHead>2.</NumHead> 
                <StepTextCont>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </StepTextCont> 
            </StepCont>
            <StepCont>
                <NumHead>3.</NumHead> 
                <StepTextCont>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </StepTextCont> 
            </StepCont>
        </div>
      </Container>
    </>
  );
}


