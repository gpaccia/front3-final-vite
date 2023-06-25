import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact"
import Home from "./Routes/Home"
import Favs from "./Routes/Favs"
import Detail from "./Routes/Detail"
import {routes} from "./Components/utils/routes"
import Layout from "./Routes/Layout";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path={routes.home} element={<Home/>} />
          <Route path={routes.details} element={<Detail />} />
          <Route path={routes.contact} element={<Contact />} />
          <Route path={routes.favs} element={<Favs />} />
        </Route>
      </Routes>
  );
}

export default App;
