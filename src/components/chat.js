import React from "react";
import { v4 as uuidv4 } from 'uuid';
import Message from "./message";
import MessageInput from "./messageInput";

//constants
const date_options=['en-US', {hour:"numeric", minute:"numeric"}];

 // Shorthand
/** Returns current date/time */
function getTime(){return new Date().toLocaleTimeString(...date_options);}

class Chat extends React.Component{
    constructor(props){
        super(props)

        //state
        this.state={
            messages:[
                {content:"Hello World", user:"JJCVIP",date:getTime(),id:uuidv4()},
                {content:"Nice weather today :)", user:"JJCVIP",date:getTime(),id:uuidv4()},
                {content:"Happy Weekend", user:"JJCVIP",date:getTime(),id:uuidv4()}
            ]
        }

        //binds
        this.editMessage = this.editMessage.bind(this);
        this.deleteMessage = this.deleteMessage.bind(this);
        this.newMessage = this.newMessage.bind(this);

    }
   
    //Edits messages
    editMessage(id, newContent){
        
        const updatedMessages= this.state.messages.map((message)=>{
          if(id==message.id){
            return{...message, content: newContent, date:getTime()};
           
          }
          return message;
        });
        this.setState({messages:updatedMessages})
      }
    
    //Deletes Message
    deleteMessage(id){
        function filterMessage(message){return message.id!=id }
        const updatedMessages= this.state.messages.filter(filterMessage);
        this.setState({messages:updatedMessages})
    }


    // //adds messages UNDONE
    newMessage(content){

        const messageHistory = this.state.messages;
        messageHistory.push({content:content, user:"JJCVIP", date:getTime(), id:uuidv4()});
        this.setState({messages:messageHistory});
    }
    
    render(){
        return(
        <div className="chat">
        <div className="messages">
            {this.state.messages.map((message) => {
            return( 
                <Message 
                    key={uuidv4()}
                    id={message.id}
                    content={message.content} 
                    user={message.user}
                    date={message.date} 
                    editMessage={this.editMessage}
                    deleteMessage={this.deleteMessage}
                />)
            })}
        </div> 
        <MessageInput
            newMessage={this.newMessage}
        />
        </div>
        )
    }
}


export default Chat;