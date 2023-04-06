import ReservationAPI from "../../../api/reservation";
import { useMutation } from "react-query";
import { AxiosResponse } from "axios";
import { TNavigate } from "../../../types/navigate";

const useCancelReservation = (navigate:TNavigate) => {
    return useMutation((rsvId: number) => ReservationAPI.cancelReservation(rsvId), {
        
        onSuccess: (data: AxiosResponse<any>) => {
            // console.log(data);
            navigate('/my/rsv',{state:'rsv'});
            window.location.reload()
        },
        onError: ((error: unknown, variables: number, context: unknown) =>{
            alert('예약 취소 실패!');
            // console.log(error);
            
        })
    });
};

export default useCancelReservation;