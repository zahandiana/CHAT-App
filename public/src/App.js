import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import UserPage from "./components/UserPage";
import AccountDeleted from "./components/AccountDeleted";

export default function App() {
  const [username, setUsername] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/user/profile" element={<UserPage />} />
        <Route path="/account-deleted" element={<AccountDeleted />} />
      </Routes>
    </BrowserRouter>
  );
}
