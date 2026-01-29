import React from "react";
import Header from "./components/header";
import Contayner from "./components/contayner";
import Container3 from "./components/container3";
import Contatnear2 from "./components/contatnear2";
import Conteynear4 from "./components/conteynear4";
import Contaynear5 from "./components/contaynear5";
import Footer from "./components/footer";
import Conteynear6 from "./components/conteynear6";

const App = () => {
  return (
    <div className="min-w-90 ">
      <Header url={"logo.png"} />
      <Contayner url={"ilustration.png"} />
      <Contatnear2/>
      <Container3/>
      <Conteynear4/>
      <Contaynear5/>
      <Conteynear6/>
      <Footer/>

    </div>
  );
};

export default App;
