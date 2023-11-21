import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
const Router = createBrowserRouter(createRoutesFromElements(<Route index element={<Signup />} />));
function App() {
  return <RouterProvider router={Router} />;
}

export default App;

