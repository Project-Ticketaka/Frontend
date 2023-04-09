import React, { useRef } from 'react'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import { DialogContentText } from "@mui/material";
import { useState } from "react";

import { styled } from '@mui/material/styles';

import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import { useNavigate } from "react-router-dom";
import cancelimg from "../../../assets/images/cancelReservation.png";
import useToastMessage from "../../hooks/common/useToastMessage";
import useToastElement from "../../hooks/common/useToastElement";
import useCancelReservation from "../../hooks/mutation/reservation/useCancelResservation";
import ReservationInfoModal from "./ReservationInfoModal";

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

const ReservationItem = ({item}:any) => {
    const [open, setOpen] = useState(false);
    const openStatus = useRef(false);
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

    const showToast = useToastMessage();
    const handleClickOpen = (reservationItem:any) => {
        // setOpen(true);
        // setDetail(reservationItem)

      };
      const handleClose = () => {
        alert(!open)
        //setOpen(!open);
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
      )
        
      }
  return (
    <>
    <li id={item.reservationId} key={item.reservationId} style={{display:'flex',justifyContent:'center',padding:'0 18rem',cursor:'pointer'}} onClick={()=>setOpen(true)}>
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
<ReservationInfoModal open={open} setOpen={setOpen} detail={item}/>
    </>
  )
}

export default ReservationItem