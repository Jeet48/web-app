import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { TextField, IconButton } from "@mui/material";
import { popup } from "./Popup";
import RefreshIcon from "@mui/icons-material/Refresh";
import Predict from "./Forms/predict";
import BatchPredictionTwoToneIcon from '@mui/icons-material/BatchPredictionTwoTone';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import AnalyticsTwoToneIcon from '@mui/icons-material/AnalyticsTwoTone';
import { deepPurple,blue,yellow,lightBlue,deepOrange } from '@mui/material/colors';
import  YoutubeSearchedForSharpIcon from '@mui/icons-material/YoutubeSearchedForSharp';
import ModeEditTwoToneIcon from '@mui/icons-material/ModeEditTwoTone';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import PersonSearchOutlinedIcon from '@mui/icons-material/PersonSearchOutlined';

const Buttons = ({
  searchText,
  setSearchText,
  selectedRowIds,
  selectedRows,
  data,
  setData,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [popuptype, setpopuptype] = useState("");
  const [editbtn, setEditbtn] = useState(true);

  const togglePopup = (name) => {
    if (isOpen) {
      setIsOpen(!isOpen);
      setpopuptype("");
    } else {
      setIsOpen(!isOpen);
      setpopuptype(name);
    }
  };

  useEffect(() => enableEditBtn(selectedRowIds), [selectedRowIds]);

  const enableEditBtn = (selected) => {
    const x = selected.size === 1 ? false : true;
    setEditbtn(x);
  };

  const handleSearch = () => {
    setData(data.filter((row) => row.cust_number.includes(searchText)));
  };

  return (
    <div className="button">
      <ButtonGroup variant="outlined" aria-label="outlined button group" >
        <Button
          id="predictbtn"
          variant="contained"
          disabled={!selectedRowIds.size}
          style={{ border: "1px solid " }}
          onClick={()=>Predict({selectedRows,data,setData})}
        >
        <BatchPredictionTwoToneIcon sx={{ color: yellow[900] }}   />
        &nbsp;
          PREDICT
        </Button>
        <Button 
        onCLick={()=>togglePopup("ANALYTICS VIEW")}
        style={{ border: "1px solid" }}
        > <AnalyticsTwoToneIcon sx={{ color: deepPurple[400] }}   />
        &nbsp;&nbsp;
        ANALYTICS VIEW
        </Button>


        <Button
          onClick={() => togglePopup("ADVANCESEARCH")}
          style={{ border: "1px solid" }}
        >
 
        <YoutubeSearchedForSharpIcon  sx={{ color: blue[500] }}   />&nbsp;&nbsp;
          ADVANCE SEARCH
        </Button>
        <Button
          onClick={() => window.location.reload(false)}
          style={{ border: "1px solid" }}
        >
          {" "}
          <RefreshIcon className="refresh"></RefreshIcon>{" "}
        </Button>
      </ButtonGroup>
      <div style={{ display: "flex", backgroundColor: "white" }}>
        <TextField
          id="outlined-basic"
          label="Search Customer ID"
          variant="filled"
          onChange={(e) => setSearchText(e.target.value)}
          InputProps={{
            endAdornment: (
            <PersonSearchOutlinedIcon />
            ),
          }}
          value={searchText}
         
        />
        {/* <Button size="medium" variant="text"></Button> */}
      </div>

      {popup(
        isOpen,
        togglePopup,
        popuptype,
        selectedRowIds,
        selectedRows,
        data,
        setData
      )}

      <ButtonGroup
        className="button-right"
        variant="outlined"
        aria-label="outlined primary button group"
      >
        <Button
          id="addbtn"
          onClick={() => togglePopup("ADD")}
          style={{ padding: "5px 40px", border: "1px solid" }}
        >
        <AddSharpIcon  sx={{ color: lightBlue[700] }}   />&nbsp;&nbsp;
          ADD
        </Button>
        <Button
          id="editbtn"
          onClick={() => togglePopup("EDIT")}
          style={{ padding: "5px 40px", border: "1px solid" }}
          disabled={editbtn}
        >
        <ModeEditTwoToneIcon  sx={{ color: yellow[600] }}   />&nbsp;&nbsp;
          EDIT
        </Button>
        <Button
          id="deletebtn"
          onClick={() => togglePopup("DELETE")}
          style={{ padding: "5px 40px", border: "1px solid" }}
          disabled={!selectedRowIds.size}
        >
        <DeleteOutlinedIcon  sx={{ color: deepOrange[800] }}   />&nbsp;&nbsp;
        
          DELETE
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default Buttons;
