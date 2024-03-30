import { Suspense, lazy } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LdrsComponent from "../components/loaders/hatch";
const HomePage = lazy(() => import("../page/home"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Suspense fallback={<LdrsComponent />}>{<HomePage />}</Suspense>
        }
      />
    </Route>
  )
);

export default router;
