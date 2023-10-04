// Code Keypad Component Here

import React from "react";

function Keypad (){
    function renderInput(){
        console.log('Entering password...')
    }
    return <input type="password" onChange={renderInput}></input>
}

export default Keypad;