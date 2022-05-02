/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import abc from "../images/abc.svg";
import logo from "../images/logo.svg";
import { Grid } from "@mui/material";


const Headlogo = () => {
  
  // const image1 ="https://mpng.subpng.com/20180627/eab/kisspng-american-broadcasting-company-logo-newspaper-abc-n-logo-b-5b337170b46c69.142778431530098032739.jpg";

  // const image2 =
  //   "https://www.buurst.com/wp-content/uploads/2021/02/highradius-White-Transparent-1.png";

  return (
    <Grid container sx={{ backgroundColor: "#375366"}}>
    <Grid item sm={5} >
        <img alt="hrclogo"
            style={{ display: "flex", height: "50px", float: "left"}}
            src={abc}
        />
    </Grid>
    <Grid item sm={6} sx={{ paddingLeft: "20px" }} >
        <img alt="logo2"
            style={{ display: "inline-block", height: "50px"}}
            src={logo} />
    </Grid>
    <Grid item md={12} >
      <div style={{ display: "flex", float: "left",paddingLeft: '10px'}}>
      <h4>INVOICE LIST</h4>
      </div>
    </Grid>
</Grid>
  );
};

export default Headlogo;


{/* <Grid container>
                    <Grid item sm={5} >
                        <img alt="hrclogo"
                            style={{ display: "flex", height: "50px", float: "left" }}
                            src="D:/6thSemLab/HRCIntern/NodeProject/hrc_react_mui/src/assets/abcProducts.jpeg"
                        />
                    </Grid>
                    <Grid item sm={6} sx={{ paddingLeft: "20px" }} >
                        <img alt="logo2"
                            style={{ display: "inline-block", height: "50px" }}
                            src={image2} />
                    </Grid>
                </Grid>
</Grid> */}



<div style={{ padding: "10px 3px" }} className="logo-hrc">
      <img
        style={{ display: "flex", height: "50px", float: "left" }}
        src={abc}
      />
      <img style={{ display: "inline-block", height: "50px", alignCentert: "50%" }} src={logo} />
    </div>