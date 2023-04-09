import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import useCancelReservation from "../../hooks/mutation/reservation/useCancelResservation";
import useToastElement from "../../hooks/common/useToastElement";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));
  
  export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
  }
  
  function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;
    
    return (
      <DialogTitle m={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[100],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }

const ReservationInfoModal = ({open, setOpen, detail}:any) => {
    
    const handleClose = () => {
        setOpen(false);
    };      
      const navigate=useNavigate();


      const { mutate: cancelReservation } = useCancelReservation(navigate);
      const showToastElement = useToastElement();

      const onCancelReservation = (reservation_id:number) => {

        showToastElement(
          <div style={{display:'flex',flexDirection:'column'}}>
              <p>정말로 취소하시겠습니까?</p>
              
              <span style={{color:'#E57583',textAlign:'end'}}
              onClick={()=>{
                cancelReservation(reservation_id);
              }}>확인</span>
          </div>
      
      )}
  return (
    <BootstrapDialog
    onClose={handleClose}
    aria-labelledby="customized-dialog-title"
    open={open}
  >
    <BootstrapDialogTitle id="customized-dialog-title" key={detail.reservationId} onClose={()=>setOpen(false)}/>
    <DialogContent >
        <div style={{display:'flex',flexDirection:'column',gap:'1rem',width:'30rem'}}>
            <div style={{alignItems:'center',display:'flex',flexDirection:'row',gap:'2rem'}}>
            <img src={detail.reservationPoster} alt="poster" style={{height:'13rem',borderRadius:'1rem'}}/>
            <ul  style={{margin:'0',padding:'0',alignItems:'center'}}>
                <li key={`${detail.reservationId}poster`} style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1rem'}}>
                    <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'700'}}>{detail.performanceTitle}</p>
                </li>
                <li key={`${detail.reservationId} date`} style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem',marginTop:'1rem'}}>
                  <p style={{margin:'0',padding:'0'}}>일시</p>
                  <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'500'}}>{detail.reservationDate}</p>
                </li>
                <li key={`${detail.reservationId} session`} style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem',marginTop:'1rem'}}>
                  <p style={{margin:'0',padding:'0'}}>회차</p>
                  <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'500'}}>{detail.reservationTime}</p>
                </li>
                <li key={`${detail.reservationId} people`} style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem',marginTop:'1rem'}}>
                  <p style={{margin:'0',padding:'0'}}>인원</p>
                  <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'500'}}>{detail.reservationTicketCount} 명</p>
                </li>
            </ul>
            
            </div>
            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                <p style={{margin:'0',padding:'0'}}>총 결제 금액</p>
                <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'500'}}>{detail.reservationPrice.toLocaleString('kr-ko')}</p>
            </div>
        </div>
    </DialogContent>
    <DialogActions>
      <Button onClick={()=>setOpen(false)} color="info">
        닫기
      </Button>
      <Button onClick={()=>onCancelReservation(detail.reservationId)}>
        예매 취소
      </Button>
    </DialogActions>
  </BootstrapDialog>
  )
}

export default ReservationInfoModal