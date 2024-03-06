import { Router, Routes, Route } from "react-router-dom";
import { Button } from "@mantine/core";

import "./App.css";
import Dashboard from "./components/Admin/Dashbord/Dashboard";
// import Home from "./components/Developer/Home/Home";
import Home from "./components/Commen/Home/Home";
import Tasks from "./components/Admin/Tasks/Tasks";
import DevloperTask from "./components/Developer/DevloperTask/DevloperTask";
import Login from "./components/Commen/Login/Login";


function App() {
  return (
    <div className="App">
      {/* <Dashboard /> */}
      {/* <Home /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/DevTasks" element={<DevloperTask />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
        <Route path="/Tasks" element={<Tasks />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/task-management-system" exact element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
