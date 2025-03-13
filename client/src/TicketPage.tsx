import React, { Suspense } from "react";
import { useUserType } from "./hooks/useUserType";
import { useTickets } from "./hooks/useTickets";
import { getLayoutComponent } from "./config/layoutConfig";



const TicketPage: React.FC = () => {
  const userType = useUserType();
  const LayoutComponent = getLayoutComponent(userType);
  const { tickets, loading, error, page, totalPages, setPage } = useTickets(userType);

  if (loading) return <div className="text-center py-4 text-lg">Loading tickets...</div>;
  if (error) return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6 text-center">Event Tickets</h1>
      
      <Suspense fallback={<div className="text-center">Loading ...</div>}>
        <LayoutComponent tickets={tickets} />
      </Suspense>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="mt-6 flex justify-center gap-4">
          <button
            onClick={() => setPage(prev => Math.max(1, prev - 1))}
            disabled={page === 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Previous
          </button>
          <span className="text-lg">
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage(prev => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default TicketPage;
