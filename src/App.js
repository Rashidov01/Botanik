import { Routes, Route } from "react-router-dom";

//styles
import '../src/assets/sass/main.scss';
import '../src/App.scss'
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}></Route>
        <Route path="Contact" element={<Contact />}></Route>
      </Route>
    </Routes>
  );
};