import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Components/Header";
import Body from "./Components/Body";
import { Provider } from "react-redux";
import store from "./Components/Utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Watchpage from "./Components/Watchpage";
import MainContainer from "./Components/MainContainer";
import { SearchProvider } from "./Components/SearchContext";

const AppRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <div className="flex flex-col min-h-screen ">
          {/* Apply flex-col for stacking components */}
          <Header />
          <Body />
        </div>
      ),
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <Watchpage />,
        },
      ],
    },
  ],
  {
    future: {
      v7_startTransition: true,
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);

const root = createRoot(document.getElementById("root"));
root.render(
  <SearchProvider>
    <Provider store={store}>
      <RouterProvider router={AppRouter}></RouterProvider>
    </Provider>
  </SearchProvider>
);
