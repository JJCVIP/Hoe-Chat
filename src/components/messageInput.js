import React from "react";

class MessageInput extends React.Component{
    constructor(props){
        super(props);

      this.sendMessage=this.sendMessage.bind(this);
    }
    
    sendMessage(e){
        e.preventDefault();
        const content = document.getElementById("composed-message-input").value;
        this.props.newMessage(content);

        document.getElementById("composed-message-input").value="";
      }
    render(){ 
        return(
          <div className="message-input">
            <p>Send Message</p>
            <form onSubmit={this.sendMessage} className="input-box">
            <input id="composed-message-input" autoComplete='off'></input>
            </form>  
          </div>
            
        )
    }
}
export default MessageInput;