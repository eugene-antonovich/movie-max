import "./App.css";
import React, { useState } from "react";
import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
import SignIn from "./pages/sign-in/sign-in";
import Confirmation from "./pages/sign-up/confirmation";
import SignUp from "./pages/sign-up/sign-up";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";

export const ThemeContext = React.createContext<any>(true);

function App() {
  const [theme, setTheme] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Routes>
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/" element={<Home/>}/>
          </Routes>
          <Footer />
        </ThemeContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
