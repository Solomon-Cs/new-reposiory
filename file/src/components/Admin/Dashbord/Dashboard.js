import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { Button, rgba } from "@mantine/core";
import { mainListItems, secondaryListItems } from "../ListItems/ListItems";
import { Padding } from "@mui/icons-material";
import { ListItemButton, ListItemIcon, ListItemText } from "@mui/material";

import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import TaskIcon from "@mui/icons-material/Task";
import BarChartIcon from "@mui/icons-material/BarChart";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import WorkIcon from "@mui/icons-material/Work";
import LogoutIcon from "@mui/icons-material/Logout";

import Projects from "../Projects/Projects";
import Users from "../Users/Users";
import Tasks from "../Tasks/Tasks";
import Priority from "../Priority/Priority";
import DashboardSide from "./DashboardSide";
import { useNavigate } from "react-router-dom";

import { BarChart } from "@mantine/charts";
import { BarchartData } from "./BarchartData";
import { useProjectListsQuery } from "../../Redux/features/api/userApi";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Dashboard = () => {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const navigate = useNavigate();

  const [selectedComponent, setSelectedComponent] = React.useState("Dashboard");
  const { data: projectList } = useProjectListsQuery();

  const handleLinkClick = (component) => {
    setSelectedComponent(component);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px",
              // background: "rgb(255,255,255)",
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Task Management System
            </Typography>
            <IconButton color="inherit">
              {/* <Badge badgeContent={4} color="secondary"> */}
              <LogoutIcon onClick={() => navigate("/")} />
              {/* </Badge> */}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
              // background: "rgb(39,46,72)",
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          <List
            className="flex flex-col ..."
            component="nav"
            sx={{ paddingTop: "50px" }}
          >
            <Link
              component="button"
              onClick={() => handleLinkClick("Dashboard")}
              sx={{
                color: selectedComponent === "Dashboard" ? "blue" : "black",
                textDecoration: "none",
              }}
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
              sx={{
                color: selectedComponent === "Projects" ? "blue" : "black",
                textDecoration: "none",
              }}
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
              sx={{
                color: selectedComponent === "Tasks" ? "blue" : "black",
                textDecoration: "none",
              }}
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
              sx={{
                color: selectedComponent === "Users" ? "blue" : "black",
                textDecoration: "none",
              }}
              className="font-bold"
            >
              <ListItemButton>
                <ListItemIcon>
                  <PermIdentityIcon />
                </ListItemIcon>
                <ListItemText primary="Users Management" />
              </ListItemButton>
            </Link>{" "}
          </List>

          {/* <DashboardSide /> */}
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />

          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {selectedComponent === "Dashboard" && (
              <Grid container spacing={3}>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 150,
                      background: "rgb(240,160,0)",
                    }}
                  >
                    <div className="flex justify-center gap-10 p-8">
                      <div>
                        <WorkIcon fontSize="large" />
                      </div>
                      <div>
                        <p className="text-white text-lg">Total Projects</p>
                        <p className="text-center text-white">10</p>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 150,
                      background: "rgb(0,172,106)",
                    }}
                  >
                    <div className="flex justify-center gap-10 p-8">
                      <div>
                        <AddTaskIcon fontSize="large" />
                      </div>
                      <div>
                        <p className="text-white text-lg">Total Tasks</p>
                        <p className="text-center text-white">15</p>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                  <Paper
                    sx={{
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                      height: 150,
                      background: "rgb(51,103,255)",
                    }}
                  >
                    <div className="flex justify-center gap-10 p-8">
                      <div>
                        <PeopleOutlineIcon fontSize="large" />
                      </div>
                      <div>
                        <p className="text-white text-lg">Total Users</p>
                        <p className="text-center text-white">10</p>
                      </div>
                    </div>
                  </Paper>
                </Grid>

                <Grid item xs={12}>
                  <Paper
                    sx={{
                      height: "350px",
                      p: 2,
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                      <BarChart
                        h={300}
                        data={BarchartData}
                        dataKey="project"
                        gridColor="gray.5"
                        textColor="gray.9"
                        series={[
                          { name: "TotalTask", color: "violet.6" },
                          { name: "ComplatedTask", color: "blue.6" },
                        ]}
                        tooltip={() => (
                          <div
                            style={{
                              backgroundColor: "white", // Set the desired hover color here
                              color: "white", // Set the text color for better visibility
                              padding: "10px",
                              
                            }}
                          >
                          </div>
                        )}
                      />
                  </Paper>
                </Grid>
              </Grid>
            )}
            {selectedComponent == "" && <Dashboard />}
            {selectedComponent === "Projects" && <Projects />}
            {selectedComponent === "Tasks" && <Tasks />}
            {selectedComponent === "Users" && <Users />}
            {/* {selectedComponent === "Priority" && <Priority />} */}
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
