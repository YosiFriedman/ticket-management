import { useState, useEffect } from "react";
import axios from "axios";
import { Ticket } from "../types/Ticket";
import { UserType } from "../types/UserType";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export const useTickets = (userType: UserType) => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 10;

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${API_URL}/api/tickets`, {
          params: { userType, page, limit },
        });

        setTickets(data.tickets);
        setTotalPages(Math.ceil(data.total / limit));
      } catch (err) {
        setError("Failed to fetch tickets");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, [userType, page]);

  return { tickets, loading, error, page, totalPages, setPage };
};
