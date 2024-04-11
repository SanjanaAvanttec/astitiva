



import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';


function UserLogin() {


    const [userLoginData, setuserLoginData] = useState([]);


        
        axios.get(`http://localhost:4000/userlogin`)
            .then((getData) => {
                setuserLoginData(getData.data);
            })
 
    return (
        <>
            
            <div id='viewoperatordetails' className='mt-5 ms-5'>
                            <div className='text-center' style={{ color: '#8DCAC6' }}>
                                
                            
                                <b className=' mt-2 display-2'> User Login List</b>
                        
                            </div>

                                            <TableContainer component={Paper} className='container mt-5'>
                                            <Table
                                                sx={{ minWidth: 650 }}
                                                aria-label="simple table">
                                                            <TableHead>
                                                    <TableRow> 
                                                                <TableCell align="center">ID</TableCell>
                                                                <TableCell align="center">Name</TableCell>
                                                                <TableCell align="center">Email</TableCell>
                                                                <TableCell align="center">Password</TableCell>
                                                                <TableCell align="center">User Type</TableCell>
                                                                
                                                    
                                                                </TableRow>
                                                            </TableHead>  
                                                    <TableBody>
                                                    {userLoginData.map((userLoginData) => {
                                                                    
                                                        return (
                                                            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell
                                                                    align="center"
                                                                    key={userLoginData.id}
                                                                                
                                                                >
                                                                    {userLoginData.id}

                                                                    
                                                                
                                                                                
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {userLoginData.name}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                
                                                                                    
                                                                    {userLoginData.email}
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {userLoginData.loginpassword}

                                                                                    
                                                                </TableCell>
                                                               
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {userLoginData.usertype}

                                                                                    
                                                                </TableCell>
                                                                
                                                              
                                                            </TableRow>
                                
                                                        )
                                                                
                                                                
                                                    })} 
                                                </TableBody>
                                            
                                                        </Table>
                                        </TableContainer>
                                    
                            
            
       
               </div>
            
        </>
    )
}

export default UserLogin