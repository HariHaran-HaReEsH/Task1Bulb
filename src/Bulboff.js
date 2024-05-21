import React from "react";
// import ReactDOM from 'react-dom/client';

function Bulboff(){
    const mystyle={
        textAlign:"center",
        width:"400px",
        height: "400px",
 };
    
    return (<>
        <h1> Bulb is Off</h1>
        
        <img style={mystyle} src={"https://media.istockphoto.com/id/185206958/photo/light-bulb.jpg?s=1024x1024&w=is&k=20&c=0tQNK9VEtEjLGUDuhX4-nXPVNyvQ9a3s8CSFNq1lBw8="}  alt="logo" />

    </>);
    
}
export default Bulboff;