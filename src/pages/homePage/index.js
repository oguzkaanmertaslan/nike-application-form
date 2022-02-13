import React from "react";
import {  useHistory } from "react-router-dom";

import "./index.css";

const HomePage = () => {
  const history=useHistory();
  const handleTicketForm=()=>{
    history.push("/basvuru-olustur")
  }
  const handleCheckForm=()=>{
    history.push("/basvuru-sorgula")
  }
 
  
  return (
    <div className="main-page">
      <div className="home-page-form-area">
        <div className="main-title">
          <h1>Başvuru / Ticket Oluşturun</h1>
        </div>
        <div className="main-subtitle">
          <h4>
            Yeni başvuru oluşturabilir veya başvuru sürecinizi takip
            edebilirsiniz.
          </h4>
        </div>
        <div className="buton">
          <button className="buttons" onClick={handleTicketForm}>Yeni Başvuru</button>
          <button className="buttons" onClick={handleCheckForm}>Başvuru Sorgula</button>
        </div>
      </div>
      <div className="logo-area">
        <img src="/main-page-logo.png" alt="nike-just-do-it"/>
      </div>
    </div>
  );
};

export default HomePage;
