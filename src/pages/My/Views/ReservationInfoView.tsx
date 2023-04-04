import { useState } from "react";
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import useCancelReservation from "../../../hooks/mutation/reservation/useCancelResservation";
import { useNavigate } from "react-router-dom";
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
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  }
const ReservationInfoView = ({data}:any) => {

    const [open, setOpen] = useState(false);
    const [detail, setDetail] = useState({
        "reservationId": 0,
        "reservationTicketCount": 0,
        "performanceTitle": "",
        "reservationDate": "0000-00-00",
        "reservationTime": "00:00",
        "reservationPrice": 0,
        "reservationTotalPrice": 0,
        "reservationPoster": "0",
        "reservationDeleted": "N",
        "reservationCreateAt": "0000-00-00T00:00:00"
    });

    const handleClickOpen = (reservationItem:any) => {
        setOpen(true);
        setDetail(reservationItem)
      };
      const handleClose = () => {
        setOpen(false);
      };

      const navigate=useNavigate();
      const { mutate: cancelReservation } = useCancelReservation(navigate);
      
      const onCancelReservation = (reservation_id:number) => {
        if(window.confirm('정말로 취소하시겠습니까?')){
          cancelReservation(reservation_id)
        }
        
      }
    return (
        <ul style={{display:'flex',flexDirection:'column',justifyContent:'center',listStyle:'none',margin:'0',padding:'0',width:'100%',gridColumn:'span 4',gap:'3rem'}}>
        {data.map((item:any)=>{
            return(
                <>
                <li key={item.reservationId} style={{display:'flex',justifyContent:'center',padding:'0 18rem',cursor:'pointer'}} onClick={()=>handleClickOpen(item)}>
                    <div style={{height:'13rem',width:'100%',justifyContent:'center',alignItems:'center',display:'flex',backgroundColor:'#F2F2F2',borderRadius:'1rem'}}>
                        <img src={item.reservationPoster} alt="poster" style={{height:'13rem',borderRadius:'1rem 0 0 1rem'}}/>
                        <div style={{width:'100%',display:'grid',gridTemplateRows: 'repeat(3, 1fr)',margin:'0 3rem',alignItems:'center'}}>
                            <div style={{height:'100%',display:'flex',flexDirection:'row',alignItems:'center',gap:'1rem',borderBottom:'2px solid #C4C4C4'}}>
                                <p style={{margin:'0',padding:'0',fontSize:'1.4rem',fontWeight:'700'}}>{item.performanceTitle}</p>
                            </div>
                            
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderBottom:'2px solid #C4C4C4'}}>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                    <p>일시</p>
                                    <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{item.reservationDate}</p>
                                </div>
                                <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                    <p>회차</p>
                                    <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{item.reservationTime}</p>
                                </div>
                            </div>
                            <div style={{display:'flex',flexDirection:'row',alignItems:'center',gap:'1.5rem'}}>
                                <p>인원</p>
                                <p style={{fontSize:'1.4rem',fontWeight:'500'}}>{item.reservationTicketCount} 명</p>
                            </div>
                        </div>
                    </div>
                    
                </li>
                <BootstrapDialog
                onClose={()=>handleClose()}
                aria-labelledby="customized-dialog-title"
                open={open}
              >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={()=>handleClose()}/>
                <DialogContent>
                    <div style={{display:'flex',flexDirection:'column',gap:'1rem',width:'30rem'}}>
                        <div style={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'row',gap:'2rem'}}>
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
                  <Button onClick={()=>onCancelReservation(detail.reservationId)}>
                    예매 취소
                  </Button>
                </DialogActions>
              </BootstrapDialog>
              </>
            )
        })
        }
    </ul>
    
    
    )
  
}

export default ReservationInfoView