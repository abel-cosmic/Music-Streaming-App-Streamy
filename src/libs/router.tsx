import { Suspense, lazy } from "react";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
const HomePage = lazy(() => import("../page/home"));

//Add your routes here

const LoadingElement = () => {
  return (
    <div className="flex items-center justify-center h-screen ">loading...</div>
  );
};

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        path="/"
        element={
          <Suspense fallback={<LoadingElement />}>{<HomePage />}</Suspense>
        }
      />
    </Route>
  )
);

export default router;
