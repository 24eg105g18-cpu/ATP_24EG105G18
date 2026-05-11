import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./Components/RootLayout";
import Home from "./Components/Home";
import CreateEmp from "./Components/CreateEmp";
import ListOfEmps from "./Components/ListOfEmps";
import Employee from "./Components/Employee";
import EditEmployee from "./Components/EditEmployee";

function App() {
  // Define application routes
  const routerObj = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />, // Main layout wrapper
      children: [
        { path: "", element: <Home /> },
        { path: "create-emp", element: <CreateEmp /> }, // Page to add new employee
        { path: "list", element: <ListOfEmps /> }, // Display all employees
        { path: "employee", element: <Employee /> }, // View single employee details
        { path: "edit-emp", element: <EditEmployee /> } // Edit employee details
      ],
    },
  ]);

  return <RouterProvider router={routerObj} />;
}

export default App;