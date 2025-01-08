import "./app.scss";
import AboutContent from "./components/about/AboutContent";
import AboutParallex from "./components/about/AboutParallex";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Education from "./components/education/Education";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import Cursor from "./components/cursor/Cursor";
const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home">
        <Navbar />
        <Home />
      </section>

      <section id="About">
        <AboutParallex type="about" />
      </section>

      <section>
        <AboutContent />
      </section>

      <section id="Education">
        <Education />
      </section>
      <section id="Experience">
        <Experience />
      </section>
  
        <div id="Projects">
        <Projects />
        </div>
        
     
      <section id="Contacts">
        <Contacts />
      </section>
    </div>
  );
};

export default App;
