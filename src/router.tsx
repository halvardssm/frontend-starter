import { createBrowserRouter } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import { PATH_ROOT } from "./routes/paths";

export const router = createBrowserRouter([
  {
    path: PATH_ROOT,
    element: <Root />,
    errorElement: <ErrorPage />,
  },
]);
