import { Body } from "./components/Body";
import { Header } from "./components/Header";
import Error from "./components/Error";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";
import { Footer } from "./components/Footer";
import { lazy, Suspense, use, useEffect, useState } from "react";
import UserContext from "./utils/UserContext";

// App layout component
const AppLayout = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = {
      name: "Abhishek",
      email: "abhishek@gmail.com",
    };
    setLoggedInUser(user);
  }, []);

  const shouldRenderFooter = !currentPath.startsWith("/restaurant");
  return (
    <UserContext.Provider value={loggedInUser}>
      <div className="app">
        <Header />
        <Outlet />
        {shouldRenderFooter && <Footer />}
      </div>
    </UserContext.Provider>
  );
};

const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/contact",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "/about-us",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/restaurant/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <RestaurantMenu />
          </Suspense>
        ),
      },
    ],
  },
]);

// Render into the root element
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
