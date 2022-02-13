import React, { useEffect } from "react";
import { saveAdmin } from "../../redux/features/adminSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const LogOut = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(saveAdmin(false));
    localStorage.clear("isLoggedIn");
    history.push("/");
  }, []);

  return <div></div>;
};

export default LogOut;
