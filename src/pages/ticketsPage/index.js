import React, { useCallback, useState, useEffect } from "react";
import { getTicketsByStatus } from "../../services";
import TicketCard from "./components/ticketCard";
import "./styles.css";

const Tickets = () => {
  const [tickets, setTickets] = useState();
  const [status, setStatus] = useState("all");

  const getTickets = useCallback(async () => {
    const data = await getTicketsByStatus(status);
    setTickets(data);
  }, []);

  const updateTickets = async () => {
    const data = await getTicketsByStatus(status);
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  useEffect(() => {
    updateTickets();
  }, [status]);

  const allTickets = () => {
   return  tickets.map((item) => <TicketCard item={item} key={item.code} />);
  };

  return (
    <div className="tickets-page-area">
      <div className="tickets-title">
        <h1>Başvuru Yönetimi</h1>
      </div>
      <div className="status-buttons">
        <span className="all-button" onClick={() => setStatus("all")}>
          TÜMÜ
        </span>
        <span className="waiting-button" onClick={() => setStatus("bekliyor")}>
          BEKLEYEN
        </span>
        <span
          className="accepted-button"
          onClick={() => setStatus("kabuledildi")}
        >
          KABUL EDİLEN
        </span>
        <span
          className="rejected-button"
          onClick={() => setStatus("reddedildi")}
        >
          REDDEDİLEN
        </span>
      </div>
      <div className="tickets-container">
        <div className="tickets-area">
          <div className="tickets-header">
            <span>Ticket Kodu</span>
            <span>Adı</span>
            <span>Soyadı</span>
            <span>Başvuru Nedeni</span>
            <span>Durum</span>
          </div>
        </div>
        {tickets?.length > 0 ? allTickets() : "kayıt bulunamadı"}
      </div>
    </div>
  );
};

export default Tickets;
