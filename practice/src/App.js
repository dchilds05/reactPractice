import './App.css';
import Header from "./components/Header";
import BenefitsSection from "./components/BenefitsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <BenefitsSection />
      <TestimonialsSection />
      <Aside />
      <Footer />
    </div>
  )
}

export default App;
