

import * as React from "react";
import Box from "@mui/material/Box";
import Image from "../Images/MainLogo.png";
// import { Menu } from "@styled-icons/boxicons-regular/Menu";
// import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";
import styled from "styled-components";
import { useState } from "react";
import { CloseOutlined } from "@mui/icons-material";
import { Menu } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import "./Adminnavbar.css"
import LogoutIcon from '@mui/icons-material/Logout';


// const pages = ["VERIFICATION", "ADD CHEMIST", "ENQUIRY"];

const CloseIcon = styled(CloseOutlined)`
  width: 40px;
  height: 40px;
  color: #8DCAC6;
`;

const MenuIcon = styled(Menu)`
  width: 40px;
  height: 40px;
  color: #8DCAC6;
`;

const AdminNavigationBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  const navigate = useNavigate();
  
  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        background: "honeydew",
        
      }}
    >
      <Box
        sx={{
           width: "100%",
          display: { xs: "none", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          // zIndex: "2",
        }}
      >
        <Box >
          <Box sx={{ margin: "0 0.75em" }} className='btn d-flex justify-content-center'>
            <img src={Image} width={100} height={100} alt={""} onClick={() => navigate("/")} className="Loginavatar" />
            <h1 className="mt-3 ms-1" style={{color:"#8DCAC6"}}>
            WELCOME &nbsp; ADMIN
            </h1>
          </Box>
         
        </Box>

        <ul className="menu">
        <li>
           <a href="#DASHBOADRD" style={{color:'#1B4262'}}>
          
          DASHBOARD
        </a>

        </li>

        <li>
           <a href="#ADDOPERATORDETAILS" style={{color:'#1B4262'}}>
        CREATE OPERATOR DETAILS        
        </a>

        </li>

        <li>
           <a href="#ADDOPERATOR" style={{color:'#1B4262'}}>
              CREATE OPERATOR CREDENTIALS
        </a>
        </li>
         

        
       </ul>
      

       
       
      
              
             
        
        <Box>
        <button onClick={() => navigate("/login")} className='btn'>
                                            <span>
                                                LOGOUT <LogoutIcon/>
                                           </span>
                                           </button>
        </Box>
      </Box>
      <Box
        sx={{
          background: "honeydew",
          display: { xs: "flex", md: " none" },
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0.5em",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: " none" },
            alignItems: "center",
          }}
        >
          <Box
            // sx={{ margin: "0.25em" }}
            >
                      <img src={Image} width={100} height={100} alt={""} onClick={() => navigate("/")} className="Loginavatar" />
                      <h1 style={{color:'#8DCAC6'}}>WELCOME OPERATOR</h1>
          </Box>
         
        </Box>
        <Box>
          <Box>
            {open ? (
              <Box>
                <CloseIcon onClick={handleMenu} />
              </Box>
            ) : (
              <MenuIcon onClick={handleMenu} />
            )}
          </Box>
        </Box>
      </Box>
      {open ? (
        <Box>
          <Box
            sx={{
              background: "honeydew",
              color: "#8DCAC6",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "1em",
            }}
          >
            
            
            <a href="#DASHBOADRD" style={{color:'#1B4262'}}>
          
          DASHBOADRD
        </a>

        <a href="#ADDOPERATORDETAILS">
        CREATE  OPERATOR DETAILS        </a>

       
              <a href="#ADDOPERATOR" style={{color:'#1B4262'}}>
              CREATE OPERATOR CREDENTIALS
        </a>
            
        <Box>
        <button onClick={() => navigate("/login")} className='btn'>
                                            <span>
                                                LOGOUT <LogoutIcon/>
                                           </span>
                                           </button>
        </Box>
          </Box>
          
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
};
export default AdminNavigationBar;