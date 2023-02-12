import React from 'react'
import styled from "styled-components";

const StyledButton = styled.button`
    /*공통 스타일*/
    display: inline-flex;
    align-items: center;
    
    border: 1px #CACACA solid;
    border-radius: 2rem;
    
    color: #CACACA;
    
    font-weight: bold;
    cursor: pointer;
    padding: 0 1rem;
    


    /*크기*/
    height: 2.25rem;
    font-size: 1rem;

    /*색상 
    

    &:hover{
        background: #339af0;
    }
    &:active{
        background: #1c7ed6;
    }
`;

const Button = ({children,...rest}:any) => {
    
    return (
        <StyledButton {...rest}> {children} </StyledButton>
    )
}

export default Button