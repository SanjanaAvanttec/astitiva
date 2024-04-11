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
import './Inquiry.css'
import {FaCheckSquare} from 'react-icons/fa'
// import './chemist.css'



function InquiryResponse() {

    //  window.addEventListener("DOMContentLoaded", () => {
    //     var searchButton = document.getElementById('search_button');
    //     searchButton.addEventListener('click', searchFunction)
    // });
    
         
    //      function searchFunction() {
    //        var searchText = document.getElementById('database_search_bar').value;
    //        var targetTable = document.getElementById('database_table');
    //        var notFoundText = document.getElementById('not_found');
    //        var targetTableColCount;
    //        var hasResult = false;
           
    //        notFoundText.innerHTML = '';
    //        for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
    //          var rowData = '';
         
    //          if (rowIndex === 0) {
    //            targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
    //            continue;
    //          }
         
    //          for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
    //            rowData += targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
    //          }
         
    //          if (notFound(rowData, searchText)) {
    //            targetTable.rows.item(rowIndex).style.display = 'none';
    //          } else {
    //            targetTable.rows.item(rowIndex).style.display = 'table-row';
    //            hasResult = true;
    //          }
    //        }
    //        if (!hasResult){
    //          notFoundText.innerHTML = 'There are no results.';
    //        }
    //      }
         
    //      function notFound(rowData, searchText){
    //        return rowData.toLowerCase().indexOf(searchText.toLowerCase()) === -1;
    //      }
     
// 
         const [APIData, setAPIData] = useState([]);
 
         const [name, setname]= useState('')

         axios.get(`http://localhost:4000/getEnquiryResponse/${name}`)
         .then((getData) => {
             setAPIData(getData.data);
            
         })

       
        //  const getEnquiryResponse = () => {

        //      axios.get(`http://localhost:4000/getEnquiryResponse/${name}`)
        //          .then((getData) => {
        //              setAPIData(getData.data);
                    
        //          })
      
        //      }
           


         const [enqId, setId] = useState("");
       
         const [StatusAvailabel, setStatusAvailabel] = useState("");
     
     
         const updateAvailabelStatus = () => {
            
             axios.put(`http://localhost:4000/order_conformation/${enqId}`, 
                   {
                     StatusAvailabel
                    }).then(() => {
                   alert("Done")
                   window.location.reload();
               }).catch(error => {      
               
                alert("Please Select a Check Box to Confirm The Order");
              });
       
               
          }
 

    return (
        <>
           <div className='mt-5' id='setInquiryMT'>
            <div className='mt-5' id=''>
                <div className='mt-5'>

                </div>
            <h1 className='text-center display-2 mt-5'>
                        INQUIRY RESPONSE
                    </h1>

                <div className='ms-5' >
                <input  type='text' 
                style={{textTransform:"inherit"}} 
                className='display-8' 
                onChange={e => setname(e.target.value)} 
                placeholder='Search By Product Name'
                name="fname"
                width={30}

                /> 
                </div>

           
           <TableContainer component={Paper}  className=' mt-5' >
                            <Table  aria-label="simple table" >
                                <TableHead>
                        <TableRow> 
                            
                  
                            <TableCell align="center">Select <FaCheckSquare/></TableCell>
                            
                            <TableCell align="center">ID</TableCell>
                            
                            <TableCell align="center">Product Name</TableCell>
                            
                            <TableCell align="center">Product Quantity</TableCell>
                            
                            {/* <TableCell align="center">Product Photo</TableCell> */}

                            <TableCell align="center">Product Expected Date</TableCell>

                            <TableCell align="center">Product Enquiry Date</TableCell>

                            <TableCell align="center">Status</TableCell>

                            <TableCell align="center">Reason</TableCell>

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
                                                
                                                <TableCell
                                                      align="center"
                                                      >
                                                   
                                                         <input type='checkbox' id='setCheck' value={APIData.enq_product_id} onClick={e => setId(e.target.value)} />
                                                    
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                  
                                                  >
                                                      {APIData.enq_product_id}
                                                   
                                                      
                                                  </TableCell>
                                                  <TableCell
                                                      align="center"
                                                      onChange={event => setname(event.target.value)}
                                                      style={{textTransform:"inherit"}}
                                                      value={name}
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
                                                           {APIData.enq_reason}
                                                           
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
                            
            </div> 
            <div id="not_found" ></div>
            
            <div className='container mt-5 d-flex justify-content-center mb-5'>
                                <button onClick={updateAvailabelStatus} className='mb-5' >
                                    
                                    Confrim the Order
                                    
                                </button>

                
           </div>
           </div>

            

        </>
    )
}

export default InquiryResponse