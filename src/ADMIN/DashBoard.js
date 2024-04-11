import 'bootstrap/dist/css/bootstrap.min.css';
import { Box, colors } from '@mui/material';
import { AppBar } from '@mui/material';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import axios from 'axios';
import PersonIcon from '@mui/icons-material/Person';



function DashBoard() {

    axios.get(`http://localhost:4000/astitvasignup`)
    .then((getData) => {
        setChemistCount(getData.data);
    })

    axios.get(`http://localhost:4000/getOperatorCount`)
    .then((getData) => {
        setOperatorCount(getData.data);
    })

    const [ChemistCount, setChemistCount] = useState([]);

const [OperatorCount, setOperatorCount] = useState([]);



    return (
        <>
        
        <div id='dashboard' className='ms-5'>
                        <div className='text-center' style={{color:'#8DCAC6'}}>
                            <b className=' mt-2 display-1'> DASHBOARD</b>
                        </div>
                                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className=''>
                                        <Grid item xs={4} className='d-flex justify-content-center'>
                                        <Card sx={{ maxWidth: 345 }} className=''>
                                            <div  className=' d-flex justify-content-center'>
                                            <PersonIcon                               
                                                sx={{
                                                    fontSize: 200,
                                                    color: '#8DCAC6',
                                                    justifyItems:"center"
                                                }} />
                                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     OPERATOR
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                   {/* {OperatorCount} */}gvhbnjmk
                                </Typography>
                            </CardContent>
                                   
                            </Card>

                    </Grid>

                    <Grid item xs={4} className='d-flex justify-content-center '>
                        <Card sx={{ maxWidth: 345 }}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     CHEMIST
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                {ChemistCount.length}
                                </Typography>
                            </CardContent>
                                   
                            </Card>

                    </Grid>

                    <Grid item xs={4} className='d-flex justify-content-center '>
                        <Card sx={{ maxWidth: 345 }}>
                            <div  className=' d-flex justify-content-center'>
                            <PersonIcon                               
                                sx={{
                                    fontSize: 200,
                                    color: '#8DCAC6',
                                    justifyItems:"center"
                                }} />
                            </div>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" className='text-center'>
                                     PAYMENT
                                </Typography>
                                <Typography variant="h5" color="text.secondary" className='text-center'>
                                    10
                                </Typography>
                            </CardContent>
                                  
                            </Card>

                    </Grid>
                    

                      
                        
                </Grid>

                
                

            </div>
            

        </>
    )
}

export default DashBoard