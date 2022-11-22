import styled from 'styled-components';

export const TextContainer = styled.div`
  display: flex;
  flex-grow: 3;
  flex-direction: column;
  align-items: start;
  min-width: 50vw;
  max-width: 70vw;
  height: 100%;
  margin: 0 auto;
  margin-top: 3rem;
  padding: 20px;
  ${'' /* border: green 2px solid; */}
`;

export const ImgContainer = styled.div`
  ${'' /* outline: 2px solid green; */}
  margin: 0 auto;

  img {
    margin: 0 auto;
    object-fit: cover;
    width: 100%;
    height: 30rem;
  }
`;

export const Header = styled.div`
    font-weight: 600;
    font-size: 2.5em;
    margin-bottom: 2rem;
`

export const AuthorDate = styled.text`
    font-size: 0.75em;
    margin-bottom: 2rem;
`

export default function Article() {
  return (
    <div>
    <ImgContainer>
      <img src="../../ArticleSplash/Drown.png" />
    </ImgContainer>
    <TextContainer>
        <Header>How to help the older adults in your life get cyber safe'</Header>
            <AuthorDate>
                 Nov 8 2022, 10:32 am
            </AuthorDate>
        <p>
            Magna nostrud proident quis cupidatat et adipisicing voluptate ut non ipsum. Commodo fugiat Lorem consectetur Lorem officia in qui tempor minim. Velit irure dolor minim ullamco laborum aliqua ut incididunt et mollit. Esse exercitation ea esse voluptate deserunt esse. Do nisi occaecat laborum do deserunt esse dolore cillum cupidatat adipisicing nostrud magna ipsum laborum.
        </p>
        <br />
        <p>
            Enim dolore amet eu dolore nulla. Cupidatat est ex Lorem dolore irure aliqua qui minim cupidatat. Labore eu aliqua aliqua nostrud aliqua aliqua. Et nulla sit duis labore fugiat amet proident consectetur eiusmod. Aliqua id ex aliqua anim aute sint culpa velit.

            Reprehenderit officia esse aute aute ex in dolore nisi quis ex sint culpa aliqua esse. In veniam amet laboris ex aute. Aliquip laborum esse minim nisi tempor in adipisicing non sint. Sit aliqua est consectetur reprehenderit nisi officia nostrud duis sunt aute. Magna nulla ullamco laboris nisi. Eiusmod minim duis anim labore minim laboris sunt qui ullamco nulla fugiat anim. Fugiat dolor magna et aute reprehenderit commodo minim commodo laborum.

            Enim esse quis velit irure non duis adipisicing ea. Proident fugiat elit cupidatat est ullamco et incididunt. Sint incididunt reprehenderit quis laboris.
        </p>
        <br />
        <p>
            Enim dolore amet eu dolore nulla. Cupidatat est ex Lorem dolore irure aliqua qui minim cupidatat. Labore eu aliqua aliqua nostrud aliqua aliqua. Et nulla sit duis labore fugiat amet proident consectetur eiusmod. Aliqua id ex aliqua anim aute sint culpa velit.

            Reprehenderit officia esse aute aute ex in dolore nisi quis ex sint culpa aliqua esse. In veniam amet laboris ex aute. Aliquip laborum esse minim nisi tempor in adipisicing non sint. Sit aliqua est consectetur reprehenderit nisi officia nostrud duis sunt aute. Magna nulla ullamco laboris nisi. Eiusmod minim duis anim labore minim laboris sunt qui ullamco nulla fugiat anim. Fugiat dolor magna et aute reprehenderit commodo minim commodo laborum.

            Enim esse quis velit irure non duis adipisicing ea. Proident fugiat elit cupidatat est ullamco et incididunt. Sint incididunt reprehenderit quis laboris.
        </p>
    </TextContainer>
    </div>
  );
}