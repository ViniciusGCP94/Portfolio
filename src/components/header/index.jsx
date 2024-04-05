import React from "react";
import { Wrapper, Logo, Menu, MenuLinks, Navegation } from "./header";
import { ContentWrapper } from "../layout/layout";

const HeaderWrapper = () => {

    return (
        <Wrapper>
            <ContentWrapper
            style={{
                display:"flex",
                justifyContent: "space-between",
            }}
            >
                <Logo>
                    <img src="#" alt="" />
                </Logo>
                <Navegation>
                    <Menu>
                        <li><MenuLinks href="">Sobre</MenuLinks></li>
                        <li><MenuLinks href="">Projetos</MenuLinks></li>
                        <li><MenuLinks href="">Contato</MenuLinks></li>
                    </Menu>
                </Navegation>
            </ContentWrapper>
        </Wrapper>
    )
};

export default HeaderWrapper;