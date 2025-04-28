import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import ArticleSection from './components/ArticleSection';
import FooterSection from './components/FooterSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar />
      <div className="flex-grow">
        <HeroSection />
        <ArticleSection />
      </div>
        <FooterSection />
      </div>
    </>
  );
}

export default App
