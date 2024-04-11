import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import MainLogo from '../Images/MainLogo.png'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





function Fetchtable() {
    
    const [APIData, setAPIData] = useState([]);
    const navigate = useNavigate();


    const getData = () => {
        
        axios.get(`http://localhost:4000/userlogin`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }
 



    return (
        <> 
           
        
                <Box>
                        <AppBar position="static" sx={{ backgroundColor: '#8DCAC6 ' }} className='mt-2'>
                            <Typography variant="h2" className='text-center mt-2 SetTextColor' >
                                <button className='btn'>
                                    <img src={MainLogo} alt="Avatar" class="Loginavatar" onClick={() => navigate("/")} />
                                </button>
                                <b className='display-1 '>
                                    Data Table
                                </b>
                                                    
                            </Typography>
                        </AppBar>
                    </Box>
                         
           
         
           
            <TableContainer component={Paper} className='container mt-5'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                        <TableRow> 
                  
                                        <TableCell align="center">ID</TableCell>
                                        <TableCell align="center">E-Mail</TableCell>
                                        <TableCell align="center">Password</TableCell>
                                    </TableRow>
                                </TableHead>  
                        <TableBody>
                                        {APIData.map((APIData) => (
                                          
                                    <TableRow
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                              >
                                                  <TableCell
                                                      align="center"
                                                      key={APIData.id}
                                                  
                                                  >
                                                      {APIData.id}
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        key={APIData.id}
                                                  >
                                                              
                                                        {APIData.email}
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        key={APIData.id}
                                                >
                                                           {APIData.loginpassword}
                                                           
                                                </TableCell>

                                    </TableRow>

                                    
                                    
                                 ))} 
                                </TableBody>
                            </Table>
                            </TableContainer>
            <button
                onClick={getData}
                className='btn'
            >
                      
                get data
                            
            </button>
       
        </>
    )
}

export default Fetchtable;