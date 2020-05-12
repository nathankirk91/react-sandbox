import React from "react";
import "./styles.css";
import Card from "./Components/Card/Card";
import Toolbar from "./Components/Toolbar/Toolbar";
import SideDrawer from "./Components/SideDrawer/SideDrawer";
import Backdrop from "./Components/Backdrop/Backdrop";
import FILES from "./FILES";
import { useState } from "react";

export default function App() {
  const [drawerState, setDrawerState] = useState(false);

  const drawerToogleClickHandler = () => {
    setDrawerState(!drawerState);
    console.log(drawerState);
  };

  const backdropClickHandler = () => {
    setDrawerState(false);
  };

  let backdrop;
  if (drawerState) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div className="App">
      <header>
        <Toolbar drawerClickHandler={drawerToogleClickHandler} />
        <SideDrawer show={drawerState} />
        {backdrop}
      </header>
      <main>
        {FILES.map(file => (
          <Card
            key={file._id}
            title={file.title}
            type={file.type}
            address={file.address}
            status={file.status}
            settlementDate={file.settlementDate}
          />
        ))}
      </main>
    </div>
  );
}
