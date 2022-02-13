import React from "react";
import { useSelector } from "react-redux";
import { selectUserTicket } from "../../redux/features/userTicketSlice";
import "./style.css";

const UserTicket = () => {
  const userTicket = useSelector(selectUserTicket);
  const ticket = userTicket[0];
  return (
    <div className="user-ticket-container">
      <div className="user-ticket-code-area">
        <div className="user-ticket-header">
          <div className="succsess-logo">
            <img src="/succsess.jpg" alt="nike-just-do-it" />
          </div>
          <h3>Başvurunuz başarılı bir şekilde alınmıştır</h3>
          <h4>Başvuru Kodunuz: {ticket.item.code}</h4>
        </div>
      </div>
      <div className="user-ticket-information-area">
        <div className="user-ticket-left-area">
          <div>
            <p>Ad:</p>
            <span>{ticket.item.name} </span>
          </div>
          <div>
            <p>Soyad:</p>
            <span>{ticket.item.surname} </span>
          </div>
          <div>
            <p>Yaş:</p>
            <span>{ticket.item.age} </span>
          </div>
          <div>
            <p>Tc:</p>
            <span>{ticket.item.tc} </span>
          </div>
          <div>
            <p>Problem:</p>
            <span>{ticket.item.problem} </span>
          </div>
        </div>
        <div className="user-ticket-right-area">
          <div>
            <p>Adres:</p>
            <span>{ticket.item.address} </span>
          </div>
          <div>
            <p>File:</p>
            <span>{ticket.item.file} </span>
          </div>
          <div>
            <p> Başvuru Kodu:</p>
            <span>{ticket.item.code} </span>
          </div>
          <div>
            <p>Durum:</p>
            <span>{ticket.item.status} </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserTicket;
