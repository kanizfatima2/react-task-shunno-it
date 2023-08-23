import "./app.css";
import About from "./components/About";

import Blogs2 from "./components/Blogs2";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Testimonial from "./components/Testimonial";

function App() {
  return (
    <>
      <Nav></Nav>
      <Header></Header>
      <About></About>
      <Education></Education>
      <Project></Project>
      <Skills></Skills>
      <Testimonial></Testimonial>
      <Blogs2></Blogs2>
      <Footer></Footer>
    </>
  );
}

export default App;
