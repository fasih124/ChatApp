import { createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";

import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";

const router = createBrowserRouter([
  // Public Routes
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  // Protected Routes
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  // Catch-all
  { path: "*", element: <NotFound /> },
]);

export default router;
