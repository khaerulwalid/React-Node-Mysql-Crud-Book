import { createBrowserRouter } from "react-router-dom"
import Home from "../page/Home"
import AddBook from "../page/AddBook"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/add",
        element: <AddBook />
    }
])


