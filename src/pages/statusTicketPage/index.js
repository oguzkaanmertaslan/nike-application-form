import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectTicket } from "../../redux/features/ticketsSlice";
import Select from "react-select";
import { updateTicket } from "../../services";
import "./style.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const StatusTicketPage = () => {
  const ticket = useSelector(selectTicket);
  const [input, setInput] = useState();
  const [status, setStatus] = useState(ticket.status);
  const history = useHistory();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const options = [
    { value: "Bekliyor", label: "Bekliyor" },
    { value: "Reddedildi", label: "Reddedildi" },
    { value: "Kabuledildi", label: "Kabul Edildi" },
  ];
  const updatedTicket = () => {
    updateTicket(ticket.id, { description: input, status: status.value });
    history.push("/basvuru-listesi");
  };

  let statusStyle = "";
  switch (ticket.status) {
    case "Bekliyor":
      statusStyle = "status-blue";
      break;
    case "Reddedildi":
      statusStyle = "status-red";
      break;
    case "Kabuledildi":
      statusStyle = "status-green";
      break;
  }
  return (
    <div className="status-page-container">
      <div className="status-title">
        <h2>
          Başvuru Durumu: <span className={statusStyle}>{ticket.status}</span>{" "}
        </h2>
      </div>
      <div className="status-page-area">
        <div className="status-ticket-left-area">
          <div>
            <p>Ad: </p>
            <p>{ticket.name}</p>
          </div>
          <div>
            <p>Soyad: </p>
            <p>{ticket.surname}</p>
          </div>
          <div>
            <p>Yaş: </p>
            <p>{ticket.age}</p>
          </div>
          <div>
            <p>Tc: </p>
            <p>{ticket.tc}</p>
          </div>
          <div>
            <p>Problem: </p>
            <p>{ticket.problem}</p>
          </div>
          <div className="admin-area">
            {isLoggedIn ? (
              <>
                <p>Durumu Güncelle: </p>{" "}
                <div className="select-box">
                  <Select
                    options={options}
                    value={status}
                    onChange={setStatus}
                  />
                </div>{" "}
              </>
            ) : null}
          </div>
        </div>
        <div className="status-ticket-right-area">
          <div>
            <p>Adres: </p>
            <p>{ticket.address}</p>
          </div>
          <div>
            <p>Dosya: </p>
            <p>{ticket.file}</p>
          </div>
          <div>
            <p>Başvuru Kodu: </p>
            <p>{ticket.code}</p>
          </div>
          <div>
            <p>Durum: </p>
            <p>{ticket.status}</p>
          </div>
          <div>
            <p>Açıklama: </p>
            <p>{ticket.description}</p>
          </div>
          <div>
            <p>Başvuru Tarih: </p>
            <p>{ticket.date}</p>
          </div>
          <div className="admin-area">
            {isLoggedIn ? (
              <>
                <div className="admin-right-area">
                  <div className="admin-input-area">
                    <p>Açıklamayı Güncelle: </p>{" "}
                  </div>
                </div>
                <div className="input-area">
                  <textarea
                    className="inn"
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                  />
                </div>
                <div className="admin-buton">
                  <button onClick={updatedTicket} className="admin-button-area">
                    Güncelle
                  </button>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatusTicketPage;
