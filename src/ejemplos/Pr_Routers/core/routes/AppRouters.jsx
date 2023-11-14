import { createBrowserRouter } from "react-router-dom";
import HomeView from "../../features/home/views/HomeView";
import LoginView from "../../features/login/views/LoginView";


export const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />,
    },
    {
        path: "/",
        element: <LoginView />,
    }
])