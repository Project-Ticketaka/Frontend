import { IModalProps } from "./types";
import ModalView from "./Views/ModalView";

const Modal = ({
    open,
    onClose,
    footer,
    children,
}: IModalProps) => {
    
    const ModalProps: IModalProps = {
        children,
        open,
        onClose,
        footer,
    };

  return <ModalView {...ModalProps} />;
};

export default Modal;
