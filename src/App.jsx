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
import { weatherLoader } from "./pages/Dashboard";
import ErrorBoundary from "./pages/ErrorBoundary";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Signup />} />
      <Route path='catagory' element={<SelectCatagory />} />
      <Route
        path='dashboard'
        errorElement={<ErrorBoundary />}
        loader={weatherLoader}
        element={<Dashboard />}
      />
    </Route>
  )
);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;

