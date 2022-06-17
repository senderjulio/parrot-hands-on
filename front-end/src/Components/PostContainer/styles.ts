
import styled from "styled-components";

interface Props{
    margintop?: string;
}


export const StyledDid= styled.div<Props>`
    display: block;
    justify-content: center;
    align-items: center;
    border: 2px solid
    #C5C5C5;
    width: 700px;
    margin: 0 auto;
    margin-top: ${props => props.margintop};

`
