import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3002/auth/verify", {
      withCredentials: true,
    })
    .then((res) => {
      setUser(res.data.user);
    })
    .catch(() => {
      navigate("/signup");
    });
  }, [navigate]);

  const handleLogout = async () => {
    await axios.post("http://localhost:3002/auth/logout", {}, { withCredentials: true });
    navigate("/signup");
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>Welcome, {user.username}</h2>
      <p>Email: {user.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
