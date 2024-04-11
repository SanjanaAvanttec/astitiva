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
import { useState } from "react";
import axios from 'axios';
import Moment from 'react-moment';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import {FaCheckSquare} from 'react-icons/fa'
import './Chemistenquiry.css'






function ChemistEnquiry() {
    
    const [APIData, setAPIData] = useState([]);
    // const navigate = useNavigate();

    const [name, setname]= useState('')


    axios.get(`http://localhost:4000/chemistenquiry/${name}`)
    .then((getData) => {
        setAPIData(getData.data);
    })

    // const getData = () => {
        
    //     axios.get(`http://localhost:4000/chemistenquiry/${name}`)
    //         .then((getData) => {
    //             setAPIData(getData.data);
    //         })
    // }

    const [enqId, setId] = useState("");
  

    const [MessageBox, setMessageBox] = useState(false)

    const [StatusAvailabel, setStatusAvailabel] = useState("");
     
    const [NotAvailabelreason, setrejctreason] = useState("");
    const [NotAvailabelreasonrejstatus, setNotAvailabelreasonstatus] = useState("");



    const updateAvailabelStatus = () => {

      
       
        axios.put(`http://localhost:4000/availabel/${enqId}`, 
              {
                StatusAvailabel
               }).then(() => {
              alert("Done")
              window.location.reload();
          }).catch(error => {      
               
            alert("Please Select a Record");
          });
  
          
     }

   


     const NotAvailabelReason = () => {
      

        axios.put(`http://localhost:4000/notavailabel/${enqId}`, 
            {
             
                NotAvailabelreason,
                NotAvailabelreasonrejstatus
            
        }).then(() => {
            alert("Done")
            window.location.reload();
        }).catch(error => {      
               
            alert("Please Select a Record");
          });
    }

    const onChangeHandler = (fieldName, value) => {
        if (fieldName === "reason") {
            setrejctreason(value);
        } else {
            alert("Enter Reason")
        }

    }

 

    return (
        <>
           

            <div>

            <div className='ms-5' >
                <input type='text' className='display-8' onChange={e => setname(e.target.value)} placeholder='Search By Product Name'/> 

                {/* <button
                onClick={getData}
                className='btn mt-5 ms-5'
                style={{backgroundColor:'#8DCAC6'}}
            >
              Get Enquiries
                            
            </button> */}
                </div>

           
            {/* <button
                onClick={getData}
                className='btn mt-5 ms-5'
                style={{backgroundColor:'#8DCAC6'}}
            >
              Get Enquiries
                            
            </button> */}
                            
            </div> <TableContainer component={Paper} className='container mt-5'>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
                                                      key={APIData.enqId}
                                                  
                                                  >
                                                   
                                                         <input type='checkbox' value={APIData.enq_product_id} onClick={e => setId(e.target.value)} />
                                                    
                                                   
                                                      
                                                  </TableCell>
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
                                                

                                    </TableRow>

                                    
                                    
                                 ))} 
                                </TableBody>
                            </Table>
            </TableContainer>
            
            <div className='container mt-5 d-flex justify-content-center mb-5' > 


            
            <div id='div'>
                <button onClick={updateAvailabelStatus} className=' display-3  btn' id='p'>
                                    
                                  <h1>
                                    AVAILABLE
                                    </h1>  
                                    
                                </button>

            </div>
                                

                                
                    <div id='div' className='ms-5'>
                        <button id='p' className=' btn' onClick={() => setMessageBox(!MessageBox)}>
                            <h1>
                                NOT AVAILABLE
                            </h1>
                     
                    </button>

                    </div>

                    
                
           </div>

                            <div className='container' >
                            {MessageBox && (<div className='ms-5'>

                    <Card sx={{ maxWidth: { xs: 253, md: 360, lg:450 } }} className='container' id='setcardshadow'>
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
                        
                    </CardActions>
                    </Card>





                    </div>)}
           </div>

        </>
    )
}

export default ChemistEnquiry