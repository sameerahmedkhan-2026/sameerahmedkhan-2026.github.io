import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Courses from "./components/Courses";
import { Route, Routes } from "react-router-dom";

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
      </Routes>
    </>
  );
}
