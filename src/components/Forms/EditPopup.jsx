import React from "react";
import Button from "@mui/material/Button";
// import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
// import axios from "axios";
import {useEffect} from "react";

const EditPopup = ({ togglePopup, selectedRowIds, selectedRows }) => {
  // const editPreload=(selectedRows)=> {
  //   console.log(JSON.stringify(selectedRows, null, 4));
  //  }

  // function editPreload(selectedRows) {
  //   console.log(selectedRows);
  //   for (const rows of selectedRows) {
  //     let cust_payment_terms = rows["cust_payment_terms"];
  //     let invoice_currency = rows["invoice_currency"];

  //     document.getElementById("invoice_currency").value = invoice_currency;
  //     document.getElementById("cust_payment_terms").value = cust_payment_terms;
  //   }
  // }
  // useEffect(() => editPreload(selectedRows), [selectedRows]);


  function editPreload(selectedRows) {
    console.log(selectedRows);
    
      let cust_payment_terms = selectedRows[0]["cust_payment_terms"];
      let invoice_currency = selectedRows[0]["invoice_currency"];

      document.getElementById("invoice_currency").value = invoice_currency;
      document.getElementById("cust_payment_terms").value = cust_payment_terms;
    
  }
  useEffect(() => editPreload(selectedRows), [selectedRows]);

    
  return (
    <div className="popup-box">
      <div style={{ height: "30vh", width: "58%", border: "1px solid" }} className="box">
        <h1>EDIT</h1>
        <Grid
          container
          rowSpacing={1}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          style={{ width: "1000px" }}
        >
       
          <Grid item xs={6}>
         
            <div>
              <TextField
                id="invoice_currency"
                label="Invoice Currency"
                variant="filled"
                className="customer"
                value={selectedRows.invoice_currency}
                fullWidth
              />
            </div>
          </Grid>
         
          <Grid item xs={6}>
          
            <div>
              <TextField
                id="cust_payment_terms"
                label="Customer Payment Terms"
                variant="filled"
                className="customer"
                fullWidth
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ border: "1px solid" }}>
              <Button
                variant="outlined"
                onClick={() => handleOnClick(togglePopup, selectedRowIds,selectedRows)}
                fullWidth
                
              >
                EDIT
              </Button>
            </div>
          </Grid>

          <Grid item xs={6}>
            <div  style={{ border: "1px solid" }}>
              <Button variant="outlined" onClick={togglePopup} fullWidth >
                CANCEL
              </Button>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default EditPopup;

const handleOnClick = async (togglePopup,selectedRowIds,selectedRows) => {

  
  
  const invoice_currency = document.getElementById("invoice_currency").value;
  let selected = [...selectedRowIds];
  const cust_payment_terms =
    document.getElementById("cust_payment_terms").value;

  const data = {
    invoice_currency: invoice_currency,
    cust_payment_terms: cust_payment_terms,
    sl_no: selected[0],
  };

    await fetch("http://localhost:8080/HRC/edit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  // await axios
  //   .post("http://localhost:8080/backend/edit", { data } )
  //   .then((res) => {
  //     console.log(res);
  //     console.log(res.data);
  //   }).catch(err=>{console.log(err)});

  togglePopup();
  window.location.reload(false);
};
