export interface IModalState {
    onClose: () => void;
    open: boolean;
}

export interface IReservationDetailModalProps {
    onCloseModal: () => void;
    onCancelReservation: () => void;
    open: boolean;
    btnName: { confirm: string };
    data: any;
}