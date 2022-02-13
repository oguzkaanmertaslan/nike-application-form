import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import homePage from "../../pages/homePage";
import adminLoginPage from "../../pages/adminLoginPage";
import newTicket from "../../pages/newTicketPage";
import checkTicket from "../../pages/checkTicketPage";
import tickets from "../../pages/ticketsPage";
import userTicket from "../../pages/userTicketPage";
import logOut from "../../pages/logOut";
import statusTicketPage from "../../pages/statusTicketPage";
import errorPage from "../../pages/errorPage";
import { useSelector } from "react-redux";
import { selectAdmin } from "../../redux/features/adminSlice";

const Navbar = () => {
  const admin = useSelector(selectAdmin);
  const isLoggedIn = localStorage.getItem("isLoggedIn") || admin;
  return (
    <div>
      <Router>
        <nav>
          <div className="menu-bar">
            <div className="logo">
              <img src="/logo.png" alt="nike-logo" />
            </div>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Ana Sayfa</Link>
                </li>
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/basvuru-listesi">Yönetim</Link>
                    </li>{" "}
                    <li>
                      <Link to="/logout"> Çıkış Yap</Link>
                    </li>{" "}
                  </>
                ) : (
                  <li>
                    <Link to="/admin">Giriş Yap</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={homePage} />
          <Route path="/admin" component={adminLoginPage} />
          <Route path="/basvuru-listesi" component={tickets} />
          <Route path="/basvuru-olustur" component={newTicket} />
          <Route path="/basvuru-sorgula" component={checkTicket} />
          <Route path="/basvuru-basarili" component={userTicket} />
          <Route path="/basvuru" component={statusTicketPage} />
          <Route path="/logout" component={logOut} />
          <Route path="/basvuru-bulunamadi" component={errorPage} />

        </Switch>
      </Router>
    </div>
  );
};
export default Navbar;
