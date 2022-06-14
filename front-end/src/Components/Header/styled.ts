import { Link } from "react-router-dom";
import styled from "styled-components";



export const MenuLink = styled(Link)`
    display: block;
    padding: 0 55px;
    text-decoration: none;
    color:#76BB4C;
    font-size: 20px;
    line-height: 24.38px;
    font-weight: bold;
    text-align: center;

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

`
export const StylesImg = styled.img`
    width: 325px;
    height: 85px;
    max-width: 100%;
    max-height: 100%;
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
`

export const StylesLi = styled.li`
   display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

`

export const StylesA = styled.a`
    display: block;
    padding: 0 2px;
    text-decoration: none;
    color: #76BB4C;
    font-family: Montserrat;
    font-size: 20px;
    line-height: 24.38px;
    font-weight: bold;
    text-align: center;
    transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
    &:hover{color: #6033AA; } 
`
