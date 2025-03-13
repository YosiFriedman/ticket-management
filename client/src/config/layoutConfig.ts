import { lazy } from "react";
import { Ticket } from "../types/Ticket";

interface TicketLayoutProps {
  tickets: Ticket[];
}

// Function to dynamically import layouts based on userType
const getLazyLayout = (userType: string) => {
  switch (userType) {
    case "local":
      return lazy(() => import("../components/TicketLayouts/GridLayout"));
    case "tourist":
      return lazy(() => import("../components/TicketLayouts/ListLayout"));
    default:
      return lazy(() => import("../components/TicketLayouts/GridLayout")); // Default to Grid
  }
};

// Function to get the correct layout component
export const getLayoutComponent = (userType: string): React.ComponentType<TicketLayoutProps> => {
  return getLazyLayout(userType);
};
