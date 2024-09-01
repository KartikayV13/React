import "./App.css";
import ChiefSection from "./Components/ChiefSection";
import Footer from "./Components/Footer";
import Herosection from "./Components/Herosection";
import Imporveskills from "./Components/Imporveskills";
import Navbar from "./Components/Navbar";
import Quotesection from "./Components/Quotesection";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <div className="container main">
          <Herosection />
          <Imporveskills />
          <Quotesection />
          <ChiefSection />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
