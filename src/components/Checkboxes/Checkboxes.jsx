import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Typography } from "@mui/material";
import './checkboxes.css';
import { useState } from "react";


const ACheckbox = (props) => {
  return (
    <div>
      <FormControlLabel 
        className="aCheckbox"
        disabled
        control={<Checkbox  checked={props.hadMeal} />}
        label={<Typography variant="h6" style={{ color: '#48a6b5', fontSize: 50 }}>{props.label}</Typography>}
        sx={{ '& .MuiSvgIcon-root': { fontSize: 100, color: "#5648b5" }} }  />
    </div>
  );
} 


function Checkboxes(props) {
  return (
    <div className='checkboxes-container'>
      <div className='checkboxes-container-child'>
        <ACheckbox label='Breakfast' hadMeal={props.breakfast}/>
        <ACheckbox label='Dinner' hadMeal={props.dinner}/>
      </div>
    </div>
  );
}

export default Checkboxes;