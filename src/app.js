import Home from "./components/home";
import NavBar from "./components/navbar";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Skills from "./components/skills";
import Contact from "./components/contact";
import SocialLinks from "./components/social-links";
import Footer from "./components/footer";

function App() {
  return (
    <div className="text-4xl font-bold font-signature">
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
      <SocialLinks />
      <Footer />
    </div>
  );
}

export default App;