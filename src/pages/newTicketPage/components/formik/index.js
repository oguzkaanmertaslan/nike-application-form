import React, { useState } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import { createTicket } from "../../../../services";
import { saveUserTicket } from "../../../../redux/features/userTicketSlice";
import "./style.css";

const Form = () => {
  const [baseImage, setBaseImage] = useState("");
  const [ticketNumber] = useState(
    `TCKT-${Math.floor(Math.random() * 90000) + 10000}`
  );
  const history = useHistory();
  const dispatch = useDispatch();

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "En Az 3 Karakter Girmelisiniz")
      .required("Bu Alan Boş Bırakılamaz!"),
    surname: Yup.string()
      .min(3, "En Az 3 Karakter Girmelisiniz")
      .required("Bu Alan Boş Bırakılamaz!"),
    age: Yup.number()
      .min(18, "18-20 Yaş Arası Olmalısınız")
      .max(120, "18-20 Yaş Arası Olmalısınız")
      .required("Bu Alan Boş Bırakılamaz!"),
    tc: Yup.number()
      .min(10000000000, "Tc Kimlik Numaranız 11 Haneli Olmalıdır")
      .max(99999999999, "Tc Kimlik Numaranız 11 Haneli Olmalıdır")
      .required("Bu Alan Boş Bırakılamaz!"),
    problem: Yup.string()
      .min(10, "En Az 10 Karakter Girmelisiniz")
      .required("Bu Alan Boş Bırakılamaz!"),
    address: Yup.string()
      .min(10, "En Az 10 Karakter Girmelisiniz")
      .required("Bu Alan Boş Bırakılamaz!"),
  });

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const newDate = `${year}-${month}-${day}`;
  return (
    <Formik
      initialValues={{
        name: "",
        surname: "",
        age: "",
        tc: "",
        problem: "",
        address: "",
        file: baseImage,
        status: "Bekliyor",
        code: ticketNumber,
        description: "",
        date: newDate,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log("ss",baseImage);
        createTicket(values);
        dispatch(
          saveUserTicket({
            item: values,
          })
        );
        history.push(`/basvuru-basarili`);
      }}
      
    >
      {({ onInput,handleSubmit, handleChange, values, errors, touched }) => (
        <div className="form-page">
          <div className="form-area-title">
            <h1>Başvuru Süreci Başlatın</h1>
          </div>
          <form className="form-area" onSubmit={handleSubmit}>
            <div className="form-left">
              {errors.name && touched.name ? (
                <div className="error-message">{errors.name}</div>
              ) : null}
              <Field
                type="text"
                name="name"
                placeholder="Adınız"
                onChange={handleChange}
                value={values.name}
              />
              {errors.surname && touched.surname ? (
                <div className="error-message">{errors.surname}</div>
              ) : null}
              <Field
                type="text"
                name="surname"
                placeholder="Soyadınız"
                onChange={handleChange}
                value={values.surname}
              />
              {errors.age && touched.age ? (
                <div className="error-message">{errors.age}</div>
              ) : null}
              <Field
                type="text"
                name="age"
                placeholder="Yaşınız"
                onChange={handleChange}
                value={values.age}
              />
              {errors.tc && touched.tc ? (
                <div className="error-message">{errors.tc}</div>
              ) : null}
              <Field
                type="text"
                name="tc"
                placeholder="TC Kimlik Numaranız"
                onChange={handleChange}
                value={values.tc}
              />
            </div>
            <div className="form-right">
              {errors.problem && touched.problem ? (
                <div className="error-message">{errors.problem}</div>
              ) : null}
              <Field
                type="text"
                name="problem"
                placeholder="Başvuru Nedeni"
                onChange={handleChange}
                value={values.problem}
              />
              {errors.address && touched.address ? (
                <div className="error-message">{errors.address}</div>
              ) : null}
              <Field
                type="text"
                name="address"
                placeholder="Adres Bilgisi"
                onChange={handleChange}
                value={values.address}
              />
              <Field
                className="file-input"
                type="file"
                name="file"
                value={values.file}
                onChange={ e => { onInput;  uploadImage(e); }}
              />
           
              <input type="hidden" name="status" value={values.status} />
              <input type="hidden" name="code" value={values.code} />
              <input
                type="hidden"
                name="description"
                value={values.description}
              />
              <input type="hidden" name="date" value={values.date} />
              <div className="form-buton-2">
                <button className="form-buttons-2" type="submit">
                  Süreç Başlat
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default Form;
