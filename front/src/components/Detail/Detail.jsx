import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { format } from "date-fns"; 
import { getTicketDetail } from "../../redux/actions/actions";
import styles from "./Detail.module.css";
import TicketResponseForm from "../FormStaff/TicketResponseForm";

const DetailTicket = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
  dispatch(getTicketDetail(id));
  }, [id]);

  const userEmail = useSelector((state)=> state.userEmail)
  const ticketDetail = useSelector((state) => state.ticketDetail);
  console.log(userEmail);
  
  const {
    issueDescription,
    issueType,
    priority,
    issueTitle,
    status,
    createdAt,
    updatedAt,
    userName,
  } = ticketDetail;

  const statusClass =
		status === "Not Started"
			? styles.notStarted
			: status === "In Progress"
			? styles.inProgress
			: status === "Completed"
			? styles.completed
			: styles.closed;
  
  const formatDate = (stringDate) => {
    const date = new Date(stringDate);
    return format(date, "MMMM dd, yyyy HH:mm:ss");
  };

  return (
    <div >

      <div className={`${styles.container}  ${statusClass}`}>
        <h2 className={styles.title}>Ticket Detail</h2>
        
        <div className={styles.info}>
          <p className={styles.heading}>User Name:</p>
          <p>{userName}</p>
        </div>
        
        <div className={styles.info}>
          <p className={styles.heading}>User Email:</p>
          <p>{userEmail}</p>
        </div>

        <div className={styles.info}>
          <p className={styles.heading}>Ticket Id:</p>
          <p>{id}</p>
        </div>
        
        <div className={styles.info}>
          <p className={styles.heading}>Type:</p>
          <p>{issueType}</p>
        </div>
        
        <div className={styles.info}>
          <p className={styles.heading}>Priority:</p>
          <p>{priority}</p>
        </div>
        
        <div className={styles.info}>
          <p className={styles.heading}>Status:</p>
          <p>{status}</p>
        </div>
                
        <div className={styles.info}>
          <p className={styles.heading}>Title:</p>
          <p>{issueTitle}</p>
        </div>
        
        <div className={styles.info}>
          <p className={styles.heading}>Description:</p>
          <p className={styles.info}>{issueDescription}</p>
        </div>

        <div className={styles.info}>
          <p className={styles.heading}>Created At:</p>
          <p>{createdAt && formatDate(createdAt)}</p>
        </div>
        
        <div className={styles.info}>
          <p className={styles.heading}>Updated At:</p>
          <p>{updatedAt && formatDate(updatedAt)}</p> 
        </div>

      </div>

      <TicketResponseForm userEmail={userEmail}/>

    </div>
  );
};

export default DetailTicket;
