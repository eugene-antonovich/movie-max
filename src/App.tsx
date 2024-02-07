import "./App.css";
import Footer from "./pages/footer/footer";
import Header from "./pages/header/header";
import SignIn from "./pages/sign-in/sign-in";
import Confirmation from "./pages/sign-up/confirmation";
import SignUp from "./pages/sign-up/sign-up";
import Home from "./pages/home/home";
import ForgotPassword from "./pages/sign-in/forgot-password";
import ViewCard from "./pages/view-card/view-card";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { fetchUserById, homePage } from "./actions/action";

const initialState = {
  allPost: undefined,
  post: undefined,
  isModalOpen: false,
  dataIsFetched: false,
};
export const cardDataSlice = createSlice({
  name: "cardData",
  initialState,
  reducers: {
    openModalCard: (state) => {
      state.isModalOpen = true;
    },
    closeModalCard: (state) => {
      state.isModalOpen = false;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(homePage.fulfilled, (state, action) => {
        state.allPost = action.payload;
        state.dataIsFetched = true;
      })
      .addCase(homePage.pending, (state) => {
        state.dataIsFetched = false;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        state.post = action.payload;
        state.dataIsFetched = true;
      })
      .addCase(fetchUserById.pending, (state) => {
        state.dataIsFetched = false;
      });
  },
});

export const store = configureStore({
  reducer: {
    cardData: cardDataSlice.reducer,
  },
});

export const ThemeContext = React.createContext<any>(true);
export const AuthorizationContext = React.createContext<any>(
  JSON.parse(localStorage.getItem("verify")!)
);

function App() {
  const [theme, setTheme] = useState(true);

  const [authorization, setAuthorization] = useState(
    JSON.parse(localStorage.getItem("verify")!)
  );

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <ThemeContext.Provider value={{ theme, setTheme }}>
            <AuthorizationContext.Provider
              value={{ authorization, setAuthorization }}
            >
              <Header />
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/confirmation" element={<Confirmation />} />
                <Route path="/" element={<Home />} />
                <Route path="view-card" element={<ViewCard />} />
              </Routes>
              <Footer />
            </AuthorizationContext.Provider>
          </ThemeContext.Provider>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
