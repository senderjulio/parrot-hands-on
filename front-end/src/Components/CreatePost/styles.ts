import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledMain  = styled.main `
display: block;
justify-content: end;
align-items: center;
position: relative;


top: 100px;
 `
export const StyledTextarea   = styled.textarea  `
display: inline-block; 
justify-content: center;
resize: none;
border-radius: 20px;
width: 542px;
width: 542px;
border: 1px solid #8BC34A;
border-radius: 10px;
padding:10px;
outline: none;
 `
 export const StyledForm = styled.form`
    display:flex; 
    flex-direction: column;
    justify-content: end;
    align-items: end;
    margin-top: 10px;
    border-bottom: 2px solid #C5C5C5; ;

 `

 export const StyledLink = styled(Link)`
    background-color:#6033AA;
    width: 164px;
    margin: 26px;

    border: 1px #6033AA solid;
    height:30px;
    border-radius: 30px;
    &:hover {
        background-color: #ffffff;
        color: #6033AA ;

    } 
 `
