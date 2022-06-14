import styled from "styled-components";


export const StyledMain = styled.main`
    width: 40%;
    height: 90%;
    background-color: white;
    border: 1px #C5C5C5 solid;
    @media screen and (max-width: 800px) {
        width: 98%;
        height: 98%;
    }
    @media screen and (max-width: 1000px) {
        width: 88%;
        height: 98%;
    }

    @media screen and(min-width: 800px) and (max-width: 1200px) {
        width: 68%;
        height: 98%;
    }
`