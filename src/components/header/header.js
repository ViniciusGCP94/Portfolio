import styled from "styled-components";

export const Wrapper = styled.header`
    width: 100vw;
    display: flex;
    justify-content: center;
    background-color: #d9d9d9;
`

export const Logo = styled.figure`
    width: 100px;
    height: 100px;
    border: 1px solid red;
`
export const Navegation = styled.nav`
    width: 400px;
    display: flex;
    align-items: center;
`
export const Menu = styled.ul`
    display: flex;
    width: 100%;
    padding: 5px 0;
    justify-content: space-between;
    align-items: center;
    list-style: none;
`

export const MenuLinks = styled.a`
    padding: 5px 15px;
    color: green;
    text-decoration: none;
    border: 1px solid purple;
    border-radius: 5px;
`