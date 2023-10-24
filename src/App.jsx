import { Contact } from "./Components/Contact/Contact";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { Residencies } from "./Components/Residencies/Residencies";
import { Value } from "./Components/Value/Value";
import { GetStarted } from "./Components/GetStarted/GetStarted";
import { Footer } from "./Components/Footer/footer";
import './App.css'

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
          <Header />
          <Hero />
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
