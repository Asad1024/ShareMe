import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Home from "./container/Home";
import { fetchUsers } from "./utils/fetchUser";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    const user = fetchUsers;
    if (!user) navigate("/login");
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
}

export default App;
