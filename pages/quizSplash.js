import styled from "styled-components";
import Lottie from "lottie-react";
import QuizSplash from "/public/QuizSplash.json";
import Router, { useRouter } from 'next/router';
import { Button } from "@mantine/core";
import { Container } from "postcss";


export const Bg = styled.div`
    display: flex;
    align-items: end;
    justify-content: center;
    margin: 0 auto;
    padding: 0px;
    width:100%;
    height:100%;
`;

export const BgCont = styled.div`
display:flex;
  max-width: 1140px;
  margin: 0 auto;
`

export const Start = styled.button`
    position: absolute;
    margin-bottom: 2rem;
    border-radius: 50px;
    z-index: 1;
    width: 100px;
    height: 50px;
    background-color: #3fb7d1;
    color: white;
    font-weight: 600;

    &:hover{
        border: 2px solid #3fb7d1;
        background-color: rgb(206, 225, 245, 0.5);
    }
`


export default function Splash() {
    const r = useRouter();

    return (
        <BgCont>
            <Bg>
            <Start
                onClick={
                    ()=>{r.push("/quiz")
                    }
                }
            >Start</Start>
                <Lottie
                    style={{ width: 3000 }}
                    data-preserve-aspect-ratio="xMidYMid slice"
                    animationData={QuizSplash}
                    loop={true} />
            </Bg>
        </BgCont>
    )
}