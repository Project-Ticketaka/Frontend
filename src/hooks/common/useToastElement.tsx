
import { toast } from "react-toastify";

const useToastElement = () => {
//   const toastType = {
//     success: (message: Element) => toast.success(message),
//     error: (message: Element) => toast.error(message),
//     warning: (message: Element) => toast.warning(message),
//   };

  const showToastElement = (message: any) => {
    toast.dismiss();
    toast.clearWaitingQueue();
    toast(message,{
        bodyStyle: { fontSize: "14px" },
        closeButton: true,
        closeOnClick: true,
        pauseOnHover: false,
        hideProgressBar: true,
        autoClose: false,
        position: "top-right",
        style: {
            maxWidth: "1000px",
            width: "max-content",
            zIndex: 1000000,
        },
        theme: "light",
    });
};

  return showToastElement;
};

export default useToastElement;