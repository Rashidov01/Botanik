import { Routes, Route } from "react-router-dom";
import { Layout, About, Catalog, Contact, Home, Store,BlogOpen } from "./pages";
import { CardOpen } from "./pages";

//general styles
import "./sass/main.scss";


export default function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="Catalog" element={<Catalog />} />
        <Route path="Store" element={<Store />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="CardOpen" element={<CardOpen />} />
        <Route path="BlogOpen" element={<BlogOpen />} />
      </Route>
    </Routes>
  );
}
