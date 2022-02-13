import React, { useState, useCallback, useEffect } from "react";
import { Field, Formik } from "formik";
import * as Yup from "yup";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getUser } from "../../../../services";
import { useDispatch } from "react-redux";
import { saveAdmin } from "../../../../redux/features/adminSlice";
import "./style.css";

const LoginPageForm = () => {
  const [login, setLogin] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();

  const getTickets = useCallback(async () => {
    const data = await getUser();
    setLogin(data);
  }, []);

  useEffect(() => {
    getTickets();
  }, [getTickets]);
  
  const validationSchema = Yup.object({
    username: Yup.string().required("Bu Alan Boş Bırakılamaz"),
    password: Yup.string()
      .min(6, "Paralanız Minimum 6 Karakter İçermelidir")
      .required("Bu Alan Boş Bırakılamaz"),
  });

  return (
    <Formik
      initialValues={{
        username: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const isLoggedIn = login.find(
          (item) =>
            item.username === values.username &&
            item.password === values.password
        );

        if (isLoggedIn) {
          dispatch(saveAdmin(true));
          history.push("/basvuru-listesi");
        } else {
          alert("Kullanıcı Adı veya Şifre Hatalı")
        }
      }}
    >
      {({ handleSubmit, handleChange, values, errors, touched }) => (
        <div className="admin-page-area">
          <div className="admin-page-title">
            <h1>Sisteme Giriş Yapın</h1>
          </div>
          <form className="login-form-area" onSubmit={handleSubmit}>
            <div className="login-inputs">
              {errors.username && touched.username ? (
                <div>{errors.username}</div>
              ) : null}

              <Field
                type="text"
                name="username"
                placeholder="Kullanıcı Adı"
                onChange={handleChange}
                value={values.username}
              />

              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}

              <Field
                type="password"
                name="password"
                placeholder="Şifre"
                onChange={handleChange}
                value={values.password}
              />
              <div className="buton1">
                <button className="buttons1" type="submit">
                  Giriş Yap
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </Formik>
  );
};

export default LoginPageForm;
