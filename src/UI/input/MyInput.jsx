import React from "react";
import classes from './MyInput.module.css';

const MyInput = (props) => {
    return (
        <input autoFocus={true} className={classes.myInput} {...props}/>
    )
};

export default MyInput;