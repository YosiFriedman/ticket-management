import React from "react";
import { Ticket } from "../../types/Ticket";

interface Props {
  tickets: Ticket[];
}

const GridLayout: React.FC<Props> = ({ tickets }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-transform duration-300 p-4"
        >
          <h3 className="text-lg font-semibold text-gray-800">{ticket.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{ticket.description}</p>
          <div className="mt-3 text-sm text-gray-500">
            📍 {ticket.location} | 📅 {ticket.date}
          </div>
          <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
            Buy Ticket
          </button>
        </div>
      ))}
    </div>
  );
};

export default GridLayout;
