// import React from "react"
// class UserClass extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             userInfo:{
//                 name:"Dummy",
//                 location:"Default",
//             }
//         }
//     }
//     async componentDidMount(){
//         const data = await fetch("https://api.github.com/users/Ujjwal1563");
//         const json = await data.json();
//         this.setState({
//             userInfo:json,
//         })
//         console.log(json);
//     }
//     componentDidUpdate(){
//         console.log("Updated")
//     }
//     render(){
//         const { name, public_repos } = this.state.userInfo;
//         return (
//           <div className="user-card">
//             <h3>Name: {name}</h3>
//             <h3>public_repos: {public_repos}</h3>
//           </div>
//         );
//     }
// }

import { useEffect, useState } from "react";

// this.props.name
//this.props.email


const UserClass=()=>{
    const [name , setName]= useState("Dummy");
    const [location, setLocation]=useState("Default");
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData=async ()=>{
        const data = await fetch ("https://api.github.com/users/Ujjwal1563");
        const json =await data.json();
        setName(json.name);
        setLocation(json.location);

    }

    return (
        <div>
            <h1>{name}</h1>
            <h2>{location}</h2>
        </div>
    )
}
export default UserClass;
