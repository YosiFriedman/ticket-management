import express from "express";
import cors from "cors";
import ticketRoutes from "./routes/ticketRoutes";

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Ticket routes
app.use("/api/tickets", ticketRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
