import React from "react";
import { Wrapper } from "../../components/header/header";
import { ContentWrapper } from "../../components/layout/layout";
import { Button, Carrer, TextHero, Title, ImageHero } from "./hero";
 

const Hero = () => {

    return(
        <Wrapper
        style={{
            height: "80vh",
        }}
        >
            <ContentWrapper
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems:"center",
            }}
            >
                <TextHero>
                    <Title>Sou Vinicius Pereira</Title>
                    <Carrer>Desenvolvedor Front-End React</Carrer>
                    <Button>Projetos</Button>
                    <Button>Contato</Button>
                </TextHero>
                <ImageHero>
                    <img src="#" alt="" />
                </ImageHero>
            </ContentWrapper>
        </Wrapper>
    )
}

export default Hero;