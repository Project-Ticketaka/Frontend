import React from "react";

export interface IEmptyProps {
    text: string;
    containerHeight?: string;
    btn?: React.ReactElement;
}

export interface IEmptyContainerProps {
    containerHeight?: string;
}




export interface IChildrenProps {
  children?: React.ReactNode;
}
export interface IModalProps extends IChildrenProps {
  open: boolean;
  onClose: () => void;
  footer: React.ReactElement;
}

