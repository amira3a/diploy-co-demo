import './App.css'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import { useState } from "react";


function App() {
  
const [showVideo, setShowVideo] = useState(false);





  return (
    <>
      <div
        className={`"appContainer" ${
          showVideo ? "backgroundDim" : ""
        }`}
      >
        <Header />
        <Hero showVideo={showVideo}  setShowVideo={setShowVideo} />
        {/* <Features />
        <HowItWorks />
        <ConnectStore />
        <TalkToSales />
        <Social />
        <Financials /> */}
        <Footer />
      </div>
    </>
  );
}

export default App
