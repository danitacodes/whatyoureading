import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css"; // Added this :boom:
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main></main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
