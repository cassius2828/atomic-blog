// import { createContext, useEffect, useState } from "react";

import Header from "./layout/header/Header";
import Main from "./layout/main/Main";
import Footer from "./layout/footer/Footer";
import Archive from "./components/Archive/Archive";
import DarkModeBtn from "./components/Buttons/DarkModeBtn";
import PostProvider from "./PostProvider";

function App() {
  return (
    <PostProvider>
      {" "}
      <section>
        <DarkModeBtn />
        <Header />
        <Main />
        <Archive />
        <Footer />
      </section>
    </PostProvider>
  );
}

export default App;
