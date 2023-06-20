import React, { useEffect, useState } from "react";
import User from "./pages/User";
import Landing from "./pages/Landing";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./routes/PrivateRoute";
import Upload from "./pages/Upload";
import { Axios } from "./axios/axios";
import { AppContext, AppContextProvider } from "./context/AppContext";


const App = () => {
  Axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("token")}`;
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/create" element={<Upload />} />
        </Route>
        <Route path="/user" element={<User />} />
      </Routes>
    </AppContextProvider>
  );
};

export default App;
