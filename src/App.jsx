import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import News from "./components/News/News";
import Copy from "./components/Copy/Copy";
import Team from "./components/Team/Team";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <News />
      <Copy />
      <Team />
      <Footer />
    </div>
  )
}

export default App