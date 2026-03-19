import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Hero from "./Pages/Hero/Hero";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import ScrollToTop from "./Pages/Footer/Scroll";
import FloatingSocials from "./Pages/Floating/Floating";
import About from "./Pages/About/About";
import Why from "./Pages/Why/Why";
import Mission from "./Pages/Mission/Mission";
import Services from "./Pages/Services/Services";
import Seo from "./Pages/Services/Seo";
import Lead from "./Pages/Services/Lead";
import Website from "./Pages/Services/Website";
import Social from "./Pages/Services/Social";
import Contact from "./Pages/Contact/Contact";
import Casestudy from "./Pages/Casestudy/Casestudy";
import Portfolio from "./Pages/Portfolio/Portfolio";

/* Home page component */
const HomePage = () => {
  return (
    <>
      <Hero />
      <Why />
      <Mission />
    </>
  );
};

/* About page component */
const AboutPage = () => {
  return (
    <>
      <About />
    </>
  );
};

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />

      <main className="flex-1">
        <Routes>
          {/* Home */}
          <Route path="/" element={<HomePage />} />

          {/* About */}
          <Route path="/about" element={<AboutPage />} />

          {/* Main Pages */}
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/case-studies" element={<Casestudy />} />
          <Route path="/contact" element={<Contact />} />

          {/* Individual Service Pages */}
          <Route path="/services/strategic-seo" element={<Seo />} />
          <Route path="/services/lead-generation" element={<Lead />} />
          <Route
            path="/services/website-design-development"
            element={<Website />}
          />
          <Route
            path="/services/social-media-advertising"
            element={<Social />}
          />

          {/* Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <FloatingSocials />
      <Footer />
    </div>
  );
}

export default App;