const Pool = require('pg').Pool;
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'connection',
  password: 'avantnet',
  port: 5433,
});

const getUserslogin = (request, response) => {
  pool.query('SELECT * FROM userlogin  ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getOrdrestatus = (request, response) => {
  pool.query('SELECT * FROM chemist_enquiry  ORDER BY enq_product_id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getChemistdetails = (request, response) => {
  pool.query('SELECT * FROM  astitvasignup ', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getApproveChemistdetails = (request, response) => {

  const name = "Approved"
  pool.query('SELECT * FROM  astitvasignup WHERE status = $1 ', [name],(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getOperatorCount = (request, response) => {

  const name = "Operator"
  pool.query('SELECT * FROM  userlogin WHERE usertype = $1 ', [name],(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getChemistCount = (request, response) => {

  const name = "Chemist"
  pool.query('SELECT * FROM  userlogin WHERE usertype = $1 ', [name],(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// const getApproveChemistdetailsById = (request, response) => {
//   const id = parseInt(request.params.id);

//   const name = "Approved"
//   pool.query('SELECT * FROM  astitvasignup WHERE status = $1  AND chemistid =$2', [name] [id],(error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };


const getNewChemistdetailsByName = (request, response) => {

  const name = (request.params.name);

  const status = "SELECT * FROM  astitvasignup  WHERE status = 'New' AND pharmacyname LIKE '%'||$1||'%' "
   
  pool.query(status,[name], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getNewChemistdetails = (request, response) => {

 
  const status = "SELECT * FROM  astitvasignup  WHERE status = 'New' "
   
  pool.query(status, (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



const getChemistdetailsById = (request, response) => {
  const id = parseInt(request.params.id);
 
   pool.query('SELECT * FROM  astitvasignup WHERE chemistid = $1', [id], (error, results) => {
     if (error) {
       throw error;
     }
     response.status(200).json(results.rows);
   });
 };

const getOperatorData = (request, response) => {
  pool.query('SELECT * FROM operatordetails  ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getEnquiryResponseByName = (request, response) => {

  const name = (request.params.name);


 const enqstatus = "SELECT * FROM chemist_enquiry  WHERE enq_status != 'New'  AND enq_product_name LIKE '%'||$1||'%'  "

  pool.query(enqstatus ,[name],(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};

const getEnquiryResponseById = (request, response) => {

  const id = parseInt(request.params.id);


 const enqstatus = "SELECT * FROM chemist_enquiry  WHERE enq_product_id= $1"

  pool.query(enqstatus ,[id],(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


// const getEnquiryResponseByNameLike = (request, response) => {

//    var tag = request.query.q;
//   response.json(tag)


//  const enqstatus = "SELECT * FROM chemist_enquiry  WHERE enq_status != 'New'  AND enq_product_name ILIKE "

//   pool.query(enqstatus, [`%$ {request.query.q}%`],(error, results) => {
//     if (error) {
//       throw error;
//     }
//     response.status(200).json(results.rows);
//   });
// };

const getEnquiryResponse = (request, response) => {



 const enqstatus = "SELECT * FROM chemist_enquiry  WHERE enq_status != 'New' "

  pool.query(enqstatus ,(error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};





const getUserById = (request, response) => {
 const id = parseInt(request.params.id);

  pool.query('SELECT * FROM  userlogin WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getOperatorDateById = (request, response) => {
  const name = (request.params.name);

  const setname = " SELECT * FROM  operatordetails WHERE first_name LIKE '%'||$1||'%'"
 
   pool.query(setname, [name], (error, results) => {
     if (error) {
       throw error;
     }
     response.status(200).json(results.rows);
   });
};
 
const getChemsitenquiry = (request, response) => {

  const name = "New"

  const query = "SELECT * FROM chemist_enquiry WHERE  enq_status = $1   ";

  // const query = "SELECT enq_product_id, enq_product_name , enq_product_quantity, enq_product_photo, enq_status,  to_char(enq_product_date, 'DD/MM/YYYY') AS Productdate FROM chemist_enquiry";

  pool.query(query,[name], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};


const getChemsitenquiryByName = (request, response) => {

  const name = (request.params.name);

  const query = "SELECT * FROM chemist_enquiry WHERE  enq_status = 'New' And enq_product_name LIKE '%'||$1||'%'  ";

  // const query = "SELECT enq_product_id, enq_product_name , enq_product_quantity, enq_product_photo, enq_status,  to_char(enq_product_date, 'DD/MM/YYYY') AS Productdate FROM chemist_enquiry";

  pool.query(query,[name], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
};



const createUser = (request, response) => {
  const {email, loginpassword,  name } = request.body;
const  usertype = "Operator"
  pool.query(
    'INSERT INTO userlogin ( email, loginpassword, usertype, name) VALUES ($1, $2, $3 , $4) RETURNING *',
    [email, loginpassword,usertype, name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};



const createChemist = (request, response) => {
  const {email, loginpassword,  name } = request.body;
const  usertype = "Chemist"
  pool.query(
    'INSERT INTO userlogin ( email, loginpassword, usertype, name) VALUES ($1, $2, $3 , $4) RETURNING *',
    [email, loginpassword,usertype, name],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};




const Enquiry_status = (request, response) => {
  const enqId = parseInt(request.params.id);
    const { Enquirystatus } = request.body;

  pool.query(
    'UPDATE chemist_enquiry SET enq_status = $1 where  enq_product_id = $2 ',
    [Enquirystatus, enqId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${enqId}`);
      console.log(Enquirystatus , enqId)
    }
  );
};

const New_Enquiry_status = (request, response) => {
  const NewenqId = parseInt(request.params.id);
    const { New_Enquirystatus } = request.body;

  pool.query(
    'UPDATE newchemist SET status = $1 where  newchemistid = $2 ',
    [New_Enquirystatus, NewenqId],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User modified with ID: ${NewenqId}`);
      console.log(New_Enquirystatus , NewenqId)
    }
  );
};

const chemist_status = (request, response) => {
  const { statusset, idset } = request.body;
  

  pool.query(
    'select chemist_status ($1, $2)',
    [statusset, idset],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Chemist Registration successfully completed,shortly we contact you...`);
    }
  );
};


const EnquiryProcess = (request, response) => {
  const {ProductName, ProductQuantity, ProductPhoto , ProductExpectedDate } = request.body;

  pool.query(
    'INSERT INTO chemist_enquiry ( enq_product_name, enq_product_quantity, enq_product_photo,enq_product_exepected_date,  enq_product_date ) VALUES ($1, $2, $3,$4, current_date) RETURNING *',
    [ProductName, ProductQuantity, ProductPhoto , ProductExpectedDate],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};



const createOperatordetails = (request, response) => {
  const {firstname, lastname, dob, mobnum, operatoremail, doj } = request.body;

  pool.query(
    'INSERT INTO operatordetails ( first_name, last_name, date_of_birth, mob_num, email, date_of_joining) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    [firstname, lastname, dob, mobnum, operatoremail, doj],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    }
  );
};


const Chemistsignup = (request, response) => {
  const {pharmacyname, firstname,lastname,doornum,street,area,city,pincode,states_chemist,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto} = request.body;

  pool.query(
    'select Chemistsignup($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13, $14)',
    [pharmacyname, firstname,lastname,doornum,street,area,city,pincode,states_chemist,mobilenumber, email, druglicencenum,chemistphoto,chemistlicencephoto],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Chemist Registration successfully completed,shortly we contact you...`);
    }
  );
};


const updateChemist = (request, response) => {
  const enqid = parseInt(request.params.id);
 
const acceptquery = `
     UPDATE astitvasignup
     SET status = 'Approved'
     WHERE chemistid = $1`;

     pool.query(acceptquery, [enqid], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${enqid}`);
     })
};

const AvailabelProduct = (request, response) => {
  const enqid = parseInt(request.params.id);
 
const acceptquery = `
     UPDATE chemist_enquiry
     SET enq_status = 'Available'
     WHERE enq_product_id = $1`;

     pool.query(acceptquery, [enqid], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${enqid}`);
     })
};


const order_conformation = (request, response) => {
  const enqid = parseInt(request.params.id);
 
const acceptquery = `
     UPDATE chemist_enquiry
     SET order_conformation = 'Confirmed'
     WHERE enq_product_id = $1`;

     pool.query(acceptquery, [enqid], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${enqid}`);
     })
};
   
const ReasonReject =(request, response) => {
  const rejid = parseInt(request.params.id);
  const { rejctreason } = request.body;
 
const rejectquery = `
     UPDATE astitvasignup
     SET status ='Rejected', reason=$1 WHERE chemistid = $2`;

     pool.query(rejectquery, [rejctreason, rejid], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${rejid}`);
     })
};


const NotAvailabel =(request, response) => {
  const NotAvailabelrejid = parseInt(request.params.id);
  const { NotAvailabelreason } = request.body;
 
const NotAvailabelquery = `
     UPDATE chemist_enquiry
     SET enq_status ='Not Available', enq_reason=$1 WHERE enq_product_id = $2`;

     pool.query(NotAvailabelquery, [NotAvailabelreason, NotAvailabelrejid], (error, results) => {
       if (error) {
         throw error;
       }
       response.status(200).send(`User modified with ID: ${NotAvailabelrejid}`);
     })
};


const deleteUser = (request, response) => {
  const id = parseInt(request.params.id);

  pool.query('DELETE FROM userlogin WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  getUserslogin,
  getUserById,
  createUser,
  Chemistsignup,
  EnquiryProcess,
  chemist_status,
  updateChemist,
  deleteUser,
  createOperatordetails,
  getOperatorData,
  getOperatorDateById,
  getChemistdetails,
  getChemistdetailsById,
  getChemsitenquiry,
  getChemsitenquiryByName,
  getNewChemistdetails,
  getNewChemistdetailsByName,
  getApproveChemistdetails,
  New_Enquiry_status,
  Enquiry_status,
  ReasonReject,
  AvailabelProduct,
  NotAvailabel,
  createChemist,
  getOperatorCount,
  getChemistCount,
  getEnquiryResponse,
  order_conformation,
  getOrdrestatus,
  getEnquiryResponseByName,
  getEnquiryResponseById,
  // getEnquiryResponseByNameLike,
  // approveChemist,
  
};
