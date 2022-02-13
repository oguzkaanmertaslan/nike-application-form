import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { saveTicket } from "../../../../redux/features/ticketsSlice";
import { getTicketsByStatus } from "../../../../services"

const TicketCard = ({ item }) => {

  const [tickets, setTickets] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  const getTickets = useCallback(async () => {
    const data = await getTicketsByStatus("all");
    setTickets(data);
  }, []);

  useEffect(() => {
    getTickets();
  }, []);

  let statusStyle = "";
  switch (item.status) {
    case "Bekliyor":
      statusStyle = "ticket-status-blue";
      break;
    case "Reddedildi":
      statusStyle = "ticket-status-red";
      break;
    case "Kabuledildi":
      statusStyle = "ticket-status-green";
      break;
  }
  const handleTicket = () => {
    const ticketCode = tickets.find((value) => value.code === item.code);
    if (ticketCode) {
      dispatch(saveTicket(ticketCode));
      history.push(`/basvuru/${item.code}`);
    } else {
      console.log("başarısız");
    }
  };
  return (
    <div onClick={handleTicket} className="tickets" key={item.code}>
      <p>{item.code}</p>
      <p>{item.name}</p>
      <p>{item.surname}</p>
      <p>{item.problem}</p>
      <p className={statusStyle}>{item.status}</p>
    </div>
  );
};

export default TicketCard;
