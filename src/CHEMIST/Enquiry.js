
import { InputLabel, TextField } from "@mui/material"
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Enquiry.css'
import Box from "@mui/material/Box";
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs/AdapterDayjs';
// import { DateField } from '@mui/x-date-pickers/DateField';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function EnquiryProcess() {
    

    const [ProductName, setEmail] = useState("");

    const [ProductQuantity, setPassword] = useState("");
    
    const [ProductPhoto, setUsertype] = useState("");
    
    const [ProductExpectedDate, setProductExpectedDate] = useState("");
   
    
    const navigate = useNavigate();


    const postData = () => {
        axios.post(`http://localhost:4000/chemist_enquiry`,
            {
                ProductName, ProductQuantity, ProductPhoto,ProductExpectedDate,
            }).then(() => {
                alert("Enquiry Sended Successfully")
            }).then(() => {
                window.location.reload();
            })
    }

    const onChangeHandler = (fieldName, value) => {
           
                
        if (fieldName === "pname") {
            setEmail(value);
            
         }else if (fieldName === "pquantity") {
            setPassword(value);
            
         }else if (fieldName === "pphoto") {
             setUsertype(value);
         }else if(fieldName === "pDate"){
            setProductExpectedDate(value);
         }

    }

    const [isValid, setValid] = useState(false);
   
    // const password = object?.password;


    const validate = () => {
        return ProductName.length > 1 && ProductQuantity.length > 0 && ProductPhoto.length >0 && ProductExpectedDate.length>0
    };

    useEffect(() => {
        const isValid = validate();
        setValid(isValid);
    }, [ProductName, ProductQuantity, ProductPhoto,ProductExpectedDate]);
    




    return (
        < >
        <Box
           sx={{
            maxHeight: { xs: 567, md: 9367, lg:"53%" },
            maxWidth: { xs: 400, md: "70rem", lg:"70rem" },
            }}
        >
        <div 
            id="ProductsEnquiry"
            className="container "
            >
                <h1 className="text-center" style={{color:'#8DCAC6'}}> INQUIRY PROCESS</h1>
            <div
                
                className="mt-3 d-flex justify-content-center container"
                
            >
                
                
                <div className="row mt-5 ms-2">
                    <div className="col-sm-6">
                    <TextField
                    id="outlined-basic"
                    label="Product Name"
                                variant="outlined"
                                onChange={(e) => { onChangeHandler("pname", e.target.value) }}        />
                    </div>

                    <div className="col-sm-6">
                    <TextField
                    id="outlined-basic"
                    label="Product Quantity"
                    type="number"
                                variant="outlined"
                                onChange={(e) => { onChangeHandler("pquantity", e.target.value) }}
                    
                   />                    
                    </div>
                  

                </div>

            </div>

            <div className="row ms-5">

                <div className="col-sm-6 mt-5  ">
                <InputLabel  
                >Product Expected Date </InputLabel> 
                    <TextField 
                    onChange={(e) => { onChangeHandler("pDate", e.target.value) }}    
                    required 
                    type="date" 
                    variant="standard"/>


               </div>

                <div className="col-sm-5 mt-5 ms-2">
                <InputLabel  
                >Product photo </InputLabel> 
             <TextField 
            onChange={(e) => { onChangeHandler("pphoto", e.target.value) }}
             required type="file" 
             id="imgChemPhoto"  
             variant="standard"/>

               

                </div>

            </div>

            
            <div className="d-flex justify-content-center">
                    <button className=" btn p-3 m-3" disabled={!isValid}
                    onClick={postData}>
                Send                
            </button>

            </div>

            </div>


        </Box> 



            
            
            

            
            
            

          
                
            
        </>
    )
}

export default EnquiryProcess