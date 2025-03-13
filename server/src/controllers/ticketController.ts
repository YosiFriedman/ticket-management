import { Request, Response } from "express";
import { tickets } from "../data/tickets";

export const getTickets = (req: Request, res: Response) => {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const userType = req.query.userType as "local" | "tourist" | undefined;

  let filteredTickets = [...tickets]; // Create a copy to avoid mutating original data
  
  // Apply filters
  if (userType) {
    filteredTickets = filteredTickets.filter(ticket => ticket.userType === userType);
  }

  // Calculate pagination
  const total = filteredTickets.length;
  const totalPages = Math.ceil(total / limit);
  const startIndex = (page - 1) * limit;
  const paginatedTickets = filteredTickets.slice(startIndex, startIndex + limit);

  res.json({
    page,
    limit,
    total,
    totalPages,
    tickets: paginatedTickets
  });
};
