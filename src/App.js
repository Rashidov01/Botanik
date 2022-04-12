import { Routes, Route } from "react-router-dom";
import { Layout, About, Blog, Catalog, Contact, Home, Store } from "./pages";

export default function App() {
  return (
    <Routes>
        <Route index element={<Home />} />
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
        <Route path="Catalog" element={<Catalog />} />
        <Route path="Store" element={<Store />} />
        <Route path="Contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
