import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "./App"
import Home from "./pages/Home"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
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
                            element: <Home />
                        },
                        {
                            path: "about",
                            element: <About />,
                        },
                        {
                            path: "portfolio",
                            element: <Portfolio />,
                        },
                    ],
                },
            ],
        },
    ])

    return <RouterProvider router={router} />
}

export default Router