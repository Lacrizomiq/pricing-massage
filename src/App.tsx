import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Layout } from "./layout/Layout";
import Home from "./pages/Home";
import RenforcementDetails from "./pages/massage/RenforcementDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />

      <Route path="coaching-massage" element={<RenforcementDetails />} />
    </Route>
  )
);

export const App = () => {
  return <RouterProvider router={router} />;
};
