import styled from "styled-components";
interface props {
    imgWidth: string;
    imgHeight: string;
}

export const StyledImgUser = styled.img<props>`
    width: ${props => props.imgWidth};
    height: ${props => props.imgHeight};
`