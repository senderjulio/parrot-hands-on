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
`

export const StyledCardImg = styled(Card.Img)`
    width: 50%;
    margin: auto;
`

export const StyledCardTitle = styled(Card.Title)`
    text-align: center;
    font-size: 24px;
`

export const StyledButton = styled(Button)`
    background-color: #76BB4C;
    width: 100%;
    margin-top: 26px;
    border-radius: 10px;
    
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    text-align: center;
    color: #555555;
    font-size: 18px;


`