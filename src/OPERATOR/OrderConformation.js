import 'bootstrap/dist/css/bootstrap.min.css';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'; 
import { useState } from "react";
import axios from 'axios';
import Moment from 'react-moment';
// import ChatBox from './Chatbox';
// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';






function OrderConformationstatus() {
    
    const [APIData, setAPIData] = useState([]);



        
        axios.get(`http://localhost:4000/getOrdrestatus`)
            .then((getData) => {
                setAPIData(getData.data);
            })


    return (
        <>
           

            <div>

           <h1 className='text-center'> Order Confirmation Status</h1>
            </div> <TableContainer component={Paper} className='container mt-5'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                        <TableRow> 
                            
                            
                            <TableCell align="center">ID</TableCell>
                            
                            <TableCell align="center">Product Name</TableCell>
                            
                            <TableCell align="center">Product Quantity</TableCell>
                            
                            {/* <TableCell align="center">Product Photo</TableCell> */}

                            <TableCell align="center">Product Expected Date</TableCell>

                            <TableCell align="center">Product Enquiry Date</TableCell>

                            <TableCell align="center">Status</TableCell>

                            <TableCell align="center">Product Confirmation Status</TableCell>



                            {/* <TableCell align="center">Status</TableCell> */}
                            {/* <TableCell align="center">
                               ID <input type='number' onChange={e => setId(e.target.value)} />
                            </TableCell> */}
                                    </TableRow>
                                </TableHead>  
                        <TableBody>
                                        {APIData.map((APIData) => (
                                          
                                    <TableRow
                                    
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                
                                                {/* <TableCell
                                                      align="center"
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                   
                                                         <input type='checkbox' value={APIData.enq_product_id} onClick={e => setId(e.target.value)} />
                                                    
                                                   
                                                      
                                                  </TableCell> */}
                                                  <TableCell
                                                      align="center"
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                      {APIData.enq_product_id}
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        
                                                  >
                                                              
                                                        {APIData.enq_product_name}
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_product_quantity}
                                                           
                                                </TableCell>
                                                {/* <TableCell
                                                      align="center"
                                                        
                                                >
                                                       <img src={APIData.enq_product_photo} alt='Product img' />
                                                           
                                                </TableCell> */}
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                    <Moment format="DD/MM/YYYY">
                                                        {APIData.enq_product_exepected_date}
                                                    </Moment>
                                                           
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                    <Moment format="DD/MM/YYYY">
                                                        {APIData.enq_product_date}
                                                    </Moment>
                                                           
                                                           
                                                </TableCell>
                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.enq_status}
                                                           
                                                </TableCell>

                                                <TableCell
                                                      align="center"
                                                        
                                                >
                                                           {APIData.order_conformation}
                                                           
                                                </TableCell>
                                                

                                    </TableRow>

                                    
                                    
                                 ))} 
                                </TableBody>
                            </Table>
            </TableContainer>
            
            <div className='container mt-5 d-flex justify-content-center mb-5'>

                                {/* <button onClick={updateAvailabelStatus} className='mb-5'>
                                    
                                    AVAILABEL
                                    
                                </button> */}

                                {/* {MessageBox && (<div className='ms-5'>

                    <Card sx={{ minWidth: 275 }}>
                        <CardContent className='d-flex justify-content-center'>
                            
                            <textarea
                                onChange={(e) => { onChangeHandler("reason", e.target.value) }}
                            />
                            

                    </CardContent>
                    <CardActions className='d-flex justify-content-center'>
                            <button
                                onClick={NotAvailabelReason}
                                value={setNotAvailabelreasonstatus}
                            >Send</button>
                            <button type='reset' >reset</button>
                    </CardActions>
                    </Card>





                    </div>)} */}

                    {/* <button id='setstatus' className='ms-5 mb-5' onClick={() => setMessageBox(!MessageBox)}>
                     NOT AVAILABEL
                    </button>
                 */}
           </div>

        </>
    )
}

export default OrderConformationstatus