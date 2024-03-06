import { List, ListItemButton,ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TaskIcon from "@mui/icons-material/Task";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BarChartIcon from "@mui/icons-material/BarChart";

const DashboardSide = () => {
    const [selectedComponent, setSelectedComponent] = React.useState("Dashboard");

  return (
    <>
      <List
        className="flex flex-col ..."
        component="nav"
        sx={{ paddingTop: "50px" }}
      >
        <Link
          component="button"
          onClick={() => setSelectedComponent("Dashboard")}
          sx={{ color: "black", textDecoration: "none" }}
          className="font-bold"
        >
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </Link>{" "}
        <Link
          to="./Projects"
          component="button"
          onClick={() => setSelectedComponent("Projects")}
          sx={{ color: "black", textDecoration: "none" }}
          className="font-bold"
        >
          <ListItemButton>
            <ListItemIcon>
              <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </Link>{" "}
        <Link
          component="button"
          onClick={() => setSelectedComponent("Tasks")}
          sx={{ color: "black", textDecoration: "none" }}
          className="font-bold"
        >
          <ListItemButton>
            <ListItemIcon>
              <TaskIcon />
            </ListItemIcon>
            <ListItemText primary="Tasks In Project" />
          </ListItemButton>
        </Link>{" "}
        <Link
          component="button"
          onClick={() => setSelectedComponent("Users")}
          sx={{ color: "black", textDecoration: "none" }}
          className="font-bold"
        >
          <ListItemButton>
            <ListItemIcon>
              <PermIdentityIcon />
            </ListItemIcon>
            <ListItemText primary="Users Management" />
          </ListItemButton>
        </Link>{" "}
        {/* <Link
              component="button"
              onClick={() => setSelectedComponent("Priority")}
              sx={{ color: "black" , textDecoration:"none"  }}
              className="font-bold"
            >
              <ListItemButton>
                <ListItemIcon>
                  <AssignmentIcon />
                </ListItemIcon>
                <ListItemText primary="Priority Tasks" />
              </ListItemButton>
            </Link>{" "} */}
        {/* {mainListItems} */}
        {/* <Divider sx={{ my: 1 }} /> */}
        {/* {secondaryListItems} */}
      </List>
    </>
  );
};

export default DashboardSide;
