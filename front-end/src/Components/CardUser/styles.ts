import styled from "styled-components";

interface props{
    borderEspessura: string;
}

export const StyledUser = styled.div<props>`
    width: 100%;
    height: auto;
    border: 1px #C5C5C5 solid;
    border-bottom: ${props=>props.borderEspessura} #C5C5C5 solid;
    padding: 20px;
    display: flex;
`