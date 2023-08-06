import React from "react";
import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Dest from "./Component/Dest";
import SearchBar from "./Component/SearchBar";
import Selection from "./Component/Selection";
import Crausel from "./Component/Crausel";
import Footer from "./Component/Footer";
function App() {
  return (
    <div className="App">
     <Navbar/>
     <Hero/>
     <Dest/>
     <SearchBar/>
     <Selection/>
     <Crausel/>
     <Footer/>
    </div>
  );
}

export default App;
