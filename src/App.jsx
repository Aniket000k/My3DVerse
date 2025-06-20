import Header from "./components/Header";
import Hero from "./components/Hero";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  useEffect(() =>{
    AOS.init({
      duration: 500,
      once:true,
    })
  })
  return (
    <div className="min-h-screen flex flex-col">
      {/* Content Wrapper */}
      <main className="flex-1 flex flex-col">
        {/* gardient image */}
        <img className="absolute top-0 right-0 opacity-60 -z-10 " src="/gradient.png" alt="gradient" />
        <div className="h-0 w-[40rem] absolute top-[40%] right-[-5%] shadow-[0_0_900px_20px_#a21caf] -rotate-[30deg] -z-10  "></div>
        <Header/>
        <Hero/>
      </main>
      <Footer/>
    </div>
  )
}

export default App;

