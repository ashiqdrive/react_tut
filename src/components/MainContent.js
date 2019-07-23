import React from 'react';

function MainContent(){
    const Styles = {
        fontSize: "30",
        color:"#F4511E"
    }
    let n = 3;

    if(n===1){
        Styles.color ="#43A047"
    }else if(n===2){
        Styles.color ="#6A1B9A"
    }

    return(
    <div>
        <h1 style={Styles}> This Changes color based on value of n</h1>
    </div>);
}

export default MainContent;