import React from "react";
import API from "../utils/API";

function Employees() {
    const printStatement = API.getUsers(  );
    console.log(printStatement);
    return (
    <p>Hi</p>
    
    )
    
}






export default Employees;