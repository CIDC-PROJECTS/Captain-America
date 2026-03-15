import { createBrowserRouter } from "react-router";
import { AppLayout } from "./components/Layout";
import { Login } from "./screens/Login";
import { Home } from "./screens/Home";
import { Menu } from "./screens/Menu";
import { FoodDetails } from "./screens/FoodDetails";
import { Cart } from "./screens/Cart";
import { Payment } from "./screens/Payment";
import { Success } from "./screens/Success";
import { Tracking } from "./screens/Tracking";
import { Profile } from "./screens/Profile";
import { History } from "./screens/History";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Home },
      { path: "login", Component: Login },
      { path: "menu", Component: Menu },
      { path: "food/:id", Component: FoodDetails },
      { path: "cart", Component: Cart },
      { path: "payment", Component: Payment },
      { path: "success", Component: Success },
      { path: "tracking", Component: Tracking },
      { path: "profile", Component: Profile },
      { path: "history", Component: History },
    ],
  },
]);
