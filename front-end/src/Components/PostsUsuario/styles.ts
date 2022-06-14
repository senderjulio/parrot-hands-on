import styled from "styled-components";

interface Props{
    margin: string,
    font: string,
}

export const StyledContainer = styled.div`
    width: 100%;
    min-height: 100%;
    margin-left: 20px;
`

export const StyledInfPost = styled.div`
    width: 100%;
    background-color: white;
`

export const StyledH1 = styled.h1`
    color: #76BB4C;
    font-size: 16px;
    margin-bottom: 0;
`

export const StyledP = styled.p<Props>`
    margin: 0;
    font-size: ${props => props.font};
    margin-bottom: ${props => props.margin};
`