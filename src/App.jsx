import React from "react";
import "bootswatch/dist/lux/bootstrap.min.css"; // Added this :boom:
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home/Home";
import Signin from "./screens/Signin/SigninScreen";
import Signup from "./screens/Signup/SignupScreen";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
