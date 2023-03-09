import { createBrowserRouter } from "react-router-dom";
import * as Sentry from "@sentry/react";
import { RootRoute } from "./routes/Root";

const sentryCreateBrowserRouter =
  Sentry.wrapCreateBrowserRouter(createBrowserRouter);
  
export const router = sentryCreateBrowserRouter([
    {
      path: "/",
      element: <RootRoute />,
    }
])