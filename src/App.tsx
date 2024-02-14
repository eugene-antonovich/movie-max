import "./App.css";
import Header from "./pages/header/header";
import SignIn from "./pages/sign-in/sign-in";
import Confirmation from "./pages/sign-up/confirmation";
import SignUp from "./pages/sign-up/sign-up";
import Home from "./pages/home/home";
import ForgotPassword from "./pages/sign-in/forgot-password";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducers/reducer";
import Categories from "./pages/categories/categories";
import Favorites from "./pages/favorites/favorites";

export const themes = JSON.parse(localStorage.getItem('theme')!) 
export const store = configureStore({ reducer });

export const ThemeContext = React.createContext<any>(themes);

function App() {

  const [theme, setTheme] = useState(!themes);

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ThemeContext.Provider value={{ theme, setTheme }}>
              <Header />
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/favorites" element={<Favorites/>} />
              </Routes>
          </ThemeContext.Provider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
