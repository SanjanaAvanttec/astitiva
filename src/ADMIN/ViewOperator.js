import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import Card from '@mui/material/Card'
import { useState } from 'react';
import axios from 'axios';
import Moment from 'react-moment';


function ViewOperator() {


    const [operatorData, setOperatorData] = useState([]);
    const [name, setname] = useState("");

        
        axios.get(`http://localhost:4000/operatordetails/${name}`)
            .then((getData) => {
                setOperatorData(getData.data);
            })

    return (
        <>
            
            <div id='viewoperatordetails' className='mt-5 ms-5'>
                            <div className='text-center' style={{ color: '#8DCAC6' }}>
                                
                            
                                <b className=' mt-2 display-2'> VIEW OPERATOR DETAILS</b>
                        
                            </div>

                            <div className='mt-5 ms-5'>

                            <input type='text' onChange={e => setname(e.target.value)}  placeholder='Search By First Name'/>
                           
                           </div>
                           {operatorData.map((operatorData) => {
                                                                    
                                                                    return (
                           <Card  key={operatorData.id}>
                           {operatorData.first_name}
                           </Card>
                           )
                                                                
                                                                
                        })} 

                                            {/* <TableContainer component={Paper} className='container mt-5'>
                                            <Table
                                                sx={{ minWidth: 650 }}
                                                aria-label="simple table">
                                                            <TableHead>
                                                    <TableRow> 
                                                                <TableCell align="center">ID</TableCell>
                                                                <TableCell align="center">First Name</TableCell>
                                                                <TableCell align="center">Last Name</TableCell>
                                                                <TableCell align="center">Date Of Birth</TableCell>
                                                                <TableCell align="center">Mobil Number</TableCell>
                                                                <TableCell align="center">E-Mail</TableCell>
                                                                <TableCell align="center">Date Of Joining</TableCell>
                                                    
                                                                </TableRow>
                                                            </TableHead>  
                                                    <TableBody>
                                                    {operatorData.map((operatorData) => {
                                                                    
                                                        return (
                                                            <TableRow   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                                <TableCell
                                                                    align="center"
                                                                    key={operatorData.id}
                                                                                
                                                                >
                                                                    {operatorData.id}

                                                                    
                                                                
                                                                                
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                
                                                                                    
                                                                    {operatorData.first_name}
                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.last_name}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >

                                                                <Moment format="DD/MM/YYYY">
                                                                    {operatorData.date_of_birth}
                                                                </Moment>

                                                                    

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.mob_num}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >
                                                                                    
                                                                    {operatorData.email}

                                                                                    
                                                                </TableCell>
                                                                <TableCell
                                                                    align="center"
                                                                   
                                                                >

                                                             <Moment format="DD/MM/YYYY">
                                                             {operatorData.date_of_joining}
                                                             </Moment>
                                                                                    
                                                                    

                                                                                    
                                                                </TableCell>
                                                            
                                                            </TableRow>
                                
                                                        )
                                                                
                                                                
                                                    })} 
                                                </TableBody>
                                            
                                                        </Table>
                                        </TableContainer> */}
                                    
                            
            
       
               </div>
            
        </>
    )
}

export default ViewOperator