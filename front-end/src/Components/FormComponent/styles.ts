import styled from 'styled-components';
import { Container, Card, Button } from 'react-bootstrap';
import BabckgroundImage from '../assets/images/background.png';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
    background-image: url(${BabckgroundImage});
    background-size: cover;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledCard = styled(Card)`
    width: 30%;
    padding: 20px 5px;
    @media screen and (max-width: 768px) {
        width: 80%;
    }
    @media screen and (max-width: 1000px) {
        width: 50%;
    }
`

export const StyledLinkImg = styled(Link)`
    text-align: center;

`

export const StyledCardImg = styled(Card.Img)`
    width: 30%;
    margin: auto;
    @media screen and (max-width: 768px) {
        width: 50%;
    }
`

export const StyledCardTitle = styled(Card.Title)`
    text-align: center;
    font-size: 24px;
`

export const StyledButton = styled.button`
    background-color: #76BB4C;
    width: 100%;
    margin-top: 26px;
    border-radius: 10px;
    border: 1px #76BB4C solid;
    padding: 0.375rem 0.75rem;
    &:hover {
        background-color: #ffffff;
        color: #76BB4C;

    }    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: #555555;
    font-size: 18px;
    margin-top: 26px;
    &:hover {
        color: #76BB4C;
    }
`