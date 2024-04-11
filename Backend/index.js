const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 4000;
const db = require('./queries');

app.use(bodyParser.json());
app.use(cors({
  origin: '*'
}));


app.get('/', (request, response) => {
  response.json({ info: 'Node.js, Express, and Postgres API' });
});







// chemist

app.get('/astitvasignup', db.getChemistdetails);
app.get('/chemistenquiry', db.getChemsitenquiry);
app.get('/chemistenquiry/:name', db.getChemsitenquiryByName);
app.get('/approvechemist', db.getApproveChemistdetails);
// app.get('/astitvasignup1/:id', db.getApproveChemistdetailsById);
app.post('/astitvasignup', db.Chemistsignup);
app.post('/chemist_enquiry', db.EnquiryProcess);
app.get('/astitvasignup/:id', db.getChemistdetailsById);
app.put('/rejectreason/:id', db.ReasonReject);
app.put('/availabel/:id', db.AvailabelProduct);
app.put('/notavailabel/:id', db.NotAvailabel);
app.post('/addChemist', db.createChemist);



app.get('/getOperatorCount', db.getOperatorCount);

app.get('/getChemistCount', db.getChemistCount);





// operator
app.get('/operatordetails', db.getOperatorData);
app.get('/operatordetails/:name', db.getOperatorDateById);
app.post('/Addoperatordetails', db.createOperatordetails);
app.put('/chemist_enquiry/:id', db.Enquiry_status);
app.put('/chemist_status/:id', db.chemist_status);
app.get('/newchemist', db.getNewChemistdetails);
app.get('/newchemist/:name', db.getNewChemistdetailsByName);

// app.post('/addOperator', db.createOperator);

// app.put('/astitvasignup/:id', db.approveChemist);

app.get('/getEnquiryResponse/:name', db.getEnquiryResponseByName);

app.get('/getEnquiryResponse', db.getEnquiryResponse);

app.get('/getEnquiryResponse/:id', db.getEnquiryResponseById);


// app.get('/getEnquiryResponse/tag', db.getEnquiryResponseByNameLike);


app.get('/getOrdrestatus',db.getOrdrestatus);
// login
app.get('/userlogin', db.getUserslogin);
app.get('/userlogin/:id', db.getUserById);
app.post('/operatorlogin', db.createUser);


app.put('/order_conformation/:id', db.order_conformation);

app.put('/astitvasignup/:id', db.updateChemist);




app.delete('/astitvasignup/:id', db.deleteUser);

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
