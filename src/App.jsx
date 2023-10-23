import { Contact } from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { Residencies } from "./Components/Residencies/Residencies";
import { Value } from "./Components/Value/Value";
import { GetStarted } from "./Components/GetStarted/GetStarted";
import { Footer } from "./Components/Footer/footer";


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient">
          <Header />
          <Hero />
        </div>
      </div>
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
