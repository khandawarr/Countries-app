import { createBrowserRouter, RouterProvider } from "react-router";

import { createRoot } from "react-dom/client";

import App from "./App.jsx";
import Home from "./components/Home.jsx";
import Error from "./components/Error.jsx";
import CountryDetails from "./components/CountryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:country",
        element: <CountryDetails />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
