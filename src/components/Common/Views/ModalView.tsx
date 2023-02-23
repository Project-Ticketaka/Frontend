import styled from "@emotion/styled";
import { Modal, Typography, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { IModalProps } from "../types";

const dafaultStyle = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    maxWidth: "700px",
    width: "90%",
    background: "white",
    boxShadow: 24,
    padding: "8px 20px",
    borderRadius: "11px",
};

const StyledCloseIcon = styled(CloseIcon)`
    cursor: pointer;

    &:hover {
        color: gray;
    }
`;

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    justify-content: end;
    padding-bottom: 8px;
`;

const StyledBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-height: 80vh;
  overflow: auto;
  padding: 20px 0px;
`;

const StyledFooter = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 8px;
`;

const ModalView = ({
  open,
  onClose,
  children,
  footer,
}: IModalProps) => {
    return (
    <Modal open={open} onClose={onClose}>
        <Box sx={dafaultStyle}>
            <StyledHeader>
                <StyledCloseIcon onClick={onClose} />
            </StyledHeader>
            <StyledBody>{children}</StyledBody>
            <StyledFooter>{footer}</StyledFooter>
        </Box>
    </Modal>
    );
};

export default ModalView;
