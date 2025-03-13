import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketPage from "./TicketPage";

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-4">
        <h1 className="text-2xl font-bold text-center mb-6">Ticket Management System</h1>

        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<TicketPage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
