import React from "react";

class DeleteButton extends React.Component{
    constructor(props){
        super(props)
    }
    onSubmit(){
        this.props.deleteMessage(this.props.id)
    } 
    render(){
        return(
            <button onClick={()=>{this.onSubmit()}}>Delete Message</button>
        )
    }
}

export default DeleteButton;