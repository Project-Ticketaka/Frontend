import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import logo from "../../../assets/images/favicon.png";
import { IEmptyContainerProps, IEmptyProps } from "../types";

const Container = styled.div<IEmptyContainerProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: ${({ containerHeight }) =>
    containerHeight ? containerHeight : "50vh"};
`;

const StyledImg = styled.img`
    margin-bottom: 30px;
`;

const EmptyView = ({ text, btn, containerHeight }: IEmptyProps) => {
    return (
    <Container containerHeight={containerHeight}>
        <StyledImg src={logo} alt="empty page" />
        <Typography fontWeight={700} fontFamily='Nanum Square Round'>{text}</Typography>
        {btn}
    </Container>
    );
};

export default EmptyView;

