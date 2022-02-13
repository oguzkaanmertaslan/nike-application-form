import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import "./style.css"
const ErrorPage = () => {
    const history=useHistory();
  return <div className='error-page-container'>
      <div className='error-page-area'>
          <div className='error-title'>
              <h4>
                  Girilen Başvuru Kodu Bulunamadı.
              </h4>
          </div>
          <div className='error-subtitle'>
              Lütfen Geçerli Bir Başvuru Kodu Giriniz
          </div>
          <div className='buton'>
              <button className='buttons' onClick={()=>history.push("/basvuru-sorgula")}>Başvuru Sorgula</button>
          </div>
      </div>
      <div className='error-img-area'>
      <img src="/error-page-img.jpg" alt="404-not-found"/>
      </div>
  </div>;
};

export default ErrorPage;
