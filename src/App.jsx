import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import { Residencies } from "./Components/Residencies/Residencies";
import { Value } from "./Components/Value/Value";


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
    </div>
  );
}

export default App;
