import React from "react";
// import ReactDOM from 'react-dom/client';

function Bulbon(){
    const mystyle={
        textAlign:"center",
        width:"400px",
        height: "400px",    
    };
    return (<>        
    <div>
    <h1> Bulb is On</h1>
    <img style={mystyle} src={"https://thumbs.dreamstime.com/z/vector-light-bulb-white-file-eps-format-34983265.jpg?w=768"} alt="logo" /> 
    </div>
    </>
    );
}
export default Bulbon;