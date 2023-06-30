import { Route, Routes, Navigate } from "react-router-dom";
import Contact from "./Routes/Contact"
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import { routes } from "./Components/utils/routes"
import Layout from "./Routes/Layout";
import PageNotFound from "./Routes/PageNotFound";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path={routes.dentist} element={<Detail />} />
        <Route path={routes.contact} element={<Contact />} />
        <Route path={routes.favs} element={<Favs />} />
        <Route path={routes.pageNotFound} element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
