import { Link } from "react-router-dom";
import styled from "styled-components";



export const MenuLink = styled(Link)`
    display: block;
    margin: 0 0px;
    text-decoration: none;
    color:#76BB4C;
    font-size: 20px;
    line-height: 24.38px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover{color: #6033AA; } 

`
export const MenuLinkS = styled(Link)`
    display: block;
    padding: 0 5px;
    text-decoration: none;
    color :#6033AA;
    font-size: 20px;
    line-height: 24.38px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;
    &:hover{color:#76BB4C ; } 

`
export const MenuButton = styled.button`
    display: block;
    padding: 0 5px;
    text-decoration: none;
    color :#6033AA;
    font-size: 20px;
    line-height: 24.38px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;
    background-color: transparent;
    border: none;
    &:hover{color:#76BB4C ; } 

`

export const StylesNav = styled.nav`
    display: flex;
    justify-content: space-between;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    align-items: center;


`

export const StylesHeader = styled.header`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    z-index: 999;
    background-color: white;

`
export const StylesImg = styled.img`
    width: 325px;
    height: 85px;
    max-width: 100%;
    max-height: 100%;
    @media (max-width: 450px) {
        align-items: center;
        width: 150px;
        height: auto;
    }
`

export const StylesUl = styled.ul`
    list-style-type: none;
    height: 45px;
    margin: 0;
    padding-right: 20px;
    overflow: hidden;
    list-style-type: none;
    display: flex;
    justify-content: center;
    align-items: center;
@media (max-width: 900px) {
        height: auto;
    }
`

export const StylesLi = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    @media (max-width: 900px) {
        padding: 0;
        font-size: 18px;
        line-height: 22px;
    }
`



