import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./page/HomePage";
import MoviePage from "./page/movie/movie";
import RootPage from "./page/RootPage";
import ActorPage from "./page/actor/ActorPage";

const routers = createBrowserRouter([
  { path: "/", element: <RootPage />, 
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/movie/:id", element: <MoviePage /> },
      { path: "/movie/:mov/actor/:id", element: <ActorPage /> },
      { path: "actor/:id", element: <ActorPage /> },
  ]},
]);

function App() {
  return <RouterProvider router={routers} />;
}

export default App;