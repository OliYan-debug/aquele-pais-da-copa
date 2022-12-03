import "./assets/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nation from "./components/Nation"
import NationsIndex from "./components/NationsIndex"
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <NationsIndex />,
    },
    {
      path: "/:nation",
      element: <Nation/>
    }
  ]);
  
  return <>
  
  <RouterProvider router={router} />
  </>;
}

export default App;
