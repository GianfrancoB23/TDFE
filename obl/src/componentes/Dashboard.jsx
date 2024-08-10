import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("apiKey") == null) {
      navigate("/Login");
    }
  }, [navigate]);
  return <div>Dashboard</div>;
};

export default Dashboard;
