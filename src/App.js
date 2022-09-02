import { Blog, Features, Footer, Header, Possiblity, WhatGPT3 } from './containers'
import { CTA, Brand, Navbar } from './components'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possiblity />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
