import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ErrorPage from "./ErrorPage"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
            children: [
                {
                    errorElement: <ErrorPage />,
                    children: [
                        {
                            index: true,
                            element: <HomePage />
                        },
                        {
                            path: "about",
                            element: <AboutPage />,
                        },
                    ],
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default Router