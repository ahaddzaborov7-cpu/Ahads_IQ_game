import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Game from "./components/game";

const App = () => {
  return (
    <div className="min-w-100 w-full  ">
      <Header url={"logo.png"} />
      <Game/>
      <Footer />
    </div>
  );
};

export default App;
