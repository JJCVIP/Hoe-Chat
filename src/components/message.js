import React from "react";
import EditMessage from "./editMessage";
import DeleteButton from "./deleteButton";

class Message extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:''
        };
    }

    static getDerivedStateFromProps(props,state){
        return{content:props.content};
    }

    render(){
        return(
            <div className="message-item">
                
                <p><span className="username">{this.props.user}</span> <span className="date_time">{this.props.date}</span></p>
                <p>{this.state.content}</p>
                <DeleteButton
                id={this.props.id}
                deleteMessage={this.props.deleteMessage}
                />
                <EditMessage 
                 id={this.props.id}
                 content={this.props.content} 
                 user={this.props.user} 
                 date={this.props.date} 
                 editMessage={this.props.editMessage}
                />
  
            </div>
        )
    }
}
export default Message;