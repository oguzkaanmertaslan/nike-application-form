import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./pages/homePage";
import ErrorPage from "./pages/errorPage";
import TicketsPage from "./pages/ticketsPage";

test("Home Page Elements Control", () => {
  const { getByRole, getByText } = render(<HomePage />);
  expect(getByText("Başvuru / Ticket Oluşturun")).toBeInTheDocument();
  expect(getByText("Yeni Başvuru")).toBeInTheDocument();
  expect(getByText("Başvuru Sorgula")).toBeInTheDocument();
  const homePageTitle = getByRole("heading", {
    name: "Başvuru / Ticket Oluşturun",
  });
  expect(HomePage).toMatchSnapshot();
});

test("Home Page Buttons Control", () => {
  const { getByRole } = render(<HomePage />);
  const newTicketButton = getByRole("button", { name: "Yeni Başvuru" });
  const checkTicketButton = getByRole("button", { name: "Başvuru Sorgula" });

  expect(newTicketButton).toHaveTextContent("Yeni Başvuru");
  expect(checkTicketButton).toHaveTextContent("Başvuru Sorgula");
  expect(newTicketButton).toMatchSnapshot();
  expect(HomePage).toMatchSnapshot();
});

test("Error Page Elements control", () => {
  const { getByRole, getByText } = render(<ErrorPage />);

  const checkTicketButton = getByRole("button", { name: "Başvuru Sorgula" });
  const errorPageTitle = getByRole("heading", {
    name: "Girilen Başvuru Kodu Bulunamadı.",
  });

  expect(getByText("Girilen Başvuru Kodu Bulunamadı.")).toBeInTheDocument();
  expect(
    getByText("Lütfen Geçerli Bir Başvuru Kodu Giriniz")
  ).toBeInTheDocument();
  expect(checkTicketButton).toHaveTextContent("Başvuru Sorgula");
  expect(checkTicketButton).toMatchSnapshot();
  expect(errorPageTitle).toMatchSnapshot();
  expect(ErrorPage).toMatchSnapshot();
});
test("Tickets Page Elements Control", () => {
  const { getByRole, getByText } = render(<TicketsPage />);
  const ticketsPageTitle = getByRole("heading", { name: "Başvuru Yönetimi" });
  expect(getByText("TÜMÜ")).toBeInTheDocument();
  expect(getByText("BEKLEYEN")).toBeInTheDocument();
  expect(getByText("KABUL EDİLEN")).toBeInTheDocument();
  expect(getByText("REDDEDİLEN")).toBeInTheDocument();
  expect(getByText("Ticket Kodu")).toBeInTheDocument();
  expect(getByText("Adı")).toBeInTheDocument();
  expect(getByText("Soyadı")).toBeInTheDocument();
  expect(getByText("Başvuru Nedeni")).toBeInTheDocument();
  expect(getByText("Durum")).toBeInTheDocument();
  expect(getByText("kayıt bulunamadı")).toBeInTheDocument();
  expect(ticketsPageTitle).toMatchSnapshot();
  expect(TicketsPage).toMatchSnapshot();
});
