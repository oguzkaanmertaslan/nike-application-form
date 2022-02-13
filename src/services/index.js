import axios from "axios";

const instance = axios.create({
  baseURL: "https://61e7e8d7e32cd90017acbe8e.mockapi.io",
});

const createTicket = (newTicket) => {
  return instance.post("/tickets/", newTicket);
};

const getUser = async () => {
  const response = await instance.get("/admin");
  return await response.data;
};

const getTicketsByStatus = async (status) => {
  let response;
  if (status === "all") {
    response = await instance.get("/tickets?sortby=id&order=desc");
  } else {
    response = await instance.get(`/tickets?sortby=id&order=desc&status=${status}`);
  }
  return await response.data;
};

const updateTicket = (id, updatedTicket) => {
  return instance.put(`/tickets/${id}`, updatedTicket);
};

const getTicket = (id) => {
  return instance.get(`/tickets/${id}`);
};

export { createTicket, getTicket, getUser, getTicketsByStatus , updateTicket};
