import Navigation from "./components/Navigation/Navigation";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";
import Courses from "./components/Courses/Courses";
import Contact from "./components/Contact/Contact";
import { Route, Routes } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <Footer />
            </main>
          }
        />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}
