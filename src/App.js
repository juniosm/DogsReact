import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./Componetes/Footer";
import Header from "./Componetes/Header";
import ProtectedRouter from "./Componetes/Helper/ProtectedRouter";
import Home from "./Componetes/Home";
import Login from "./Componetes/Login/Login";
import NotFound from "./Componetes/NotFound";
import Photo from "./Componetes/Photo/Photo";
import User from "./Componetes/User/User";
import UserProfile from "./Componetes/User/UserProfile";
import { UserStorage } from "./UserContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className="AppBody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login/*" element={<Login />} />
              <Route
                path="/conta/*"
                element={
                  <ProtectedRouter>
                    <User />
                  </ProtectedRouter>
                }
              />
              <Route path="/foto/:id" element={<Photo />} />
              <Route path="/perfil/:user" element={<UserProfile />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
