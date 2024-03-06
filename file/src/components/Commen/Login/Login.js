import React from "react";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

import Button from "@mui/material/Button";
import Navbar from "../Header/Navbar";
import profile from "../../Images/profile.png";

const Login = () => {
  const [values, setValues] = useState({
    name: "",
    password: "",
  });

  const navigate = useNavigate();

  const pageNavigation = () => {
    if (values.name === "developer" && values.password === "developer") {
      navigate("/DevTasks");
    }
    if (values.name === "admin" && values.password === "admin") {
      navigate("/AdminDashboard");
    } else {
      window.alert("Pleace enter Correct user name and password");
    }
  };

  return (
    <section>
      <>
        <Navbar />

        {/* .sub-main{
.profile {
    margin-top: -10px;
    height: 115x;
    width: 115px;
    border-radius: 120px;
}
}
    
} */}

        <div className="flex justify-center text-center p-10 bg-slate-300">
          <div className="flex justify-center pt-14 h-[500px] w-[400px] bg-white rounded-[40px] shadow-2xl ">
            <div>
              <div className="flex justify-center pt-1">
                <div className="flex justify-center h-[115px] w-[115px]  bg-slate-300 rounded-[120px] ">
                  <img src={profile} alt="profile" />
                </div>
              </div>
              <div>
                <h2 className="text-lg pb-3 text-zinc-950 ">Login page</h2>
                <div className="first-input">
                  <TextField
                    sx={{ m: 1, width: "30ch" }}
                    id="outlined-textarea"
                    label="User Name"
                    size="medium"
                    placeholder="User Name"
                    className="name11"
                    name="name"
                    multiline
                    variant="outlined"
                    onChange={(e) =>
                      setValues({ ...values, name: e.target.value })
                    }
                  />
                </div>

                <div className="second-input">
                  <TextField
                    sx={{ m: 1, width: "30ch" }}
                    name="password"
                    variant="outlined"
                    margin="normal"
                    size="medium"
                    required
                    fullWidth
                    label="Password"
                    placeholder="Password"
                    type="password"
                    id="password"
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                  />
                </div>

                <div>
                  <Button
                    sx={{ m: 1, width: "30ch" }}
                    variant="contained"
                    size="large"
                    color="primary"
                    onClick={pageNavigation}
                  >
                    login
                  </Button>
                </div>
                <div>
                  <p></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </section>
  );
};

export default Login;
