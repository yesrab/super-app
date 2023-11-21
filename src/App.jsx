import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import UserPage from "./pages/UserPage";
const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/'>
      <Route index element={<Signup />} />
      <Route path='bektor' element={<UserPage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;

