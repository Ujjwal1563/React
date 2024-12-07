import React from "react"
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/Ujjwal1563");
        const json = await data.json();
        this.setState({
            userInfo:json,
        })
        console.log(json);
    }
    componentDidUpdate(){
        console.log("Updated")
    }
    render(){
        const { name, public_repos } = this.state.userInfo;
        return (
          <div className="user-card">
            <h3>Name: {name}</h3>
            <h3>public_repos: {public_repos}</h3>
          </div>
        );
    }
}

// this.props.name
//this.props.email
export default UserClass;