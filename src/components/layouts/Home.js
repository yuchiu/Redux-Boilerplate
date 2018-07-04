import React from "react";
import { TextChanger } from "../containers";
import { Logo, NavBar } from "../presentations";

class Home extends React.Component {
  render() {
    return (
      <div>
        <NavBar />
        <Logo />
        <TextChanger />
      </div>
    );
  }
}

export default Home;
