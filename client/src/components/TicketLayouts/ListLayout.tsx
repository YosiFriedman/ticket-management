import React from "react";
import { Ticket } from "../../types/Ticket";

interface Props {
  tickets: Ticket[];
}

const ListLayout: React.FC<Props> = ({ tickets }) => {
  return (
    <ul className="space-y-4 p-4">
      {tickets.map((ticket) => (
        <li
          key={ticket.id}
          className="flex items-center bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 p-4"
        >
          {ticket.image && (
            <img
              src={ticket.image}
              alt={ticket.title}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
          )}
          <div>
            <h3 className="text-lg font-bold text-gray-800">{ticket.title}</h3>
            <p className="text-sm text-gray-600 mt-1 truncate w-64">{ticket.description}</p>
            <div className="mt-2 text-sm text-gray-500">
              📍 {ticket.location} | 📅 {ticket.date}
            </div>
            <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition">
              Buy Ticket
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListLayout;
