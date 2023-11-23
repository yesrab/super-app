import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import SelectCatagory from "./pages/SelectCatagory";
import Dashboard from "./pages/Dashboard";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Signup />} />
      <Route path='catagory' element={<SelectCatagory />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;

