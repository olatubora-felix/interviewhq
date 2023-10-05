import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// import { Suspense } from "react";
// import { Toaster } from "react-hot-toast";

import BaseRoutes from "./constants/baseRoutes";
// import PrivateRoute from "routes/privateRoute";
// import Loader from "shared/Loader";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        {BaseRoutes.map(
          ({ path, Layout, component: Component }) =>
            Layout && (
              <Route
                key={path}
                path={path}
                element={
                  <Layout key={path}>
                    <Component />
                  </Layout>
                }
              />
            )
        )}

        <Route path="pageNotFound" element={<>Not found</>} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
