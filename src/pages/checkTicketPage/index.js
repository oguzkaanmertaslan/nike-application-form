import React, { useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { saveTicket } from "../../redux/features/ticketsSlice";
import { getTicketsByStatus } from "../../services";

import "./style.css";

const CheckTicket = () => {
  const [input, setInput] = useState("");
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

  const handleStatusPage = () => {
    const ticketCode = tickets.find((item) => item.code === input);
    if (ticketCode) {
      dispatch(saveTicket(ticketCode));
      history.push(`/basvuru/${input}`);
    } else {
      history.push("/basvuru-bulunamadi");
    }
  };

  return (
    <div className="check-page-area">
      <div className="check-title">
        <h1>Başvuru Durumunuzu Sorgulayın</h1>
      </div>
      <div className="check-subtitle">
        <h4>Başvurunuzu size verilen kod ile sorgulayabilirsiniz</h4>
      </div>
      <div className="input-area">
        <input
          className="input1"
          type="text"
          name="code"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Başvuru Takip Kodunuz"
        />
      </div>
      <div className="buton">
        <button className="buttons" onClick={handleStatusPage}>
          Başvuru Sorgula
        </button>
      </div>
    </div>
  );
};

export default CheckTicket;
