import React from 'react';

// function CheckBoxSimple(props){
//     return(
//     <div>
//         <h2>{props.name}</h2>
//         <h3>{props.regno}</h3>
//         <h3>{props.deptname}</h3>
//         <hr></hr>
//     </div>);
// }

class CheckBoxSimple extends React.Component{
    constructor(){
        super();
        this.state = {
            name: "state name ashiq",
            isLoggedIn: false
        }
    }
    render(){
        const logInInfo = (this.state.somevalue)? "in":"out";
        return(
            //notice this.state.name and this.prop.name
            //notice that local variable dont need this. calling
            <div>
                <h2>{this.state.name}</h2> 
                <h2>{this.props.name}</h2>
                <h3>{this.props.regno}</h3>
                <h3>{this.props.deptname}</h3>
                <h4>You are logged {logInInfo}</h4>
                <hr></hr>
            </div>);
    };
}

export default CheckBoxSimple;