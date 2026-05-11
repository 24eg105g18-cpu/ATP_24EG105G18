import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/RootLayout";
import Home from "./components/Home";

function App() {
  // Define application routing
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // Main layout wrapper
      children: [
        { path: "", element: <Home /> }, // Home page content
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;