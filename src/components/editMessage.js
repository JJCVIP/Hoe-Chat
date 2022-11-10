import React from "react";

class EditMessage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:this.props.content,
            formShown:false
        };
        this.a=1;
        //binds
        this.toggleTextField=this.toggleTextField.bind(this);
    }

    componentDidMount(){
        document.getElementById("a"+(this.props.id.toString())).value=this.props.content
    }
    onSubmit(e){
        e.preventDefault();
        this.setState({content:document.getElementById("a"+(this.props.id.toString())).value},()=>{
             this.props.editMessage(this.props.id, this.state.content);
        });
       
    }

    
    toggleTextField(){
        this.setState(prevState => ({formShown: !prevState.formShown}));
    }
    
    render(){ 
        console.log(this.state.formShown);
        
        this.a++;
        return(
            <div>
                <button onClick={this.toggleTextField}>Edit message</button>
                <form onSubmit={(e)=>{this.onSubmit(e)}} className={this.state.formShown ? 'input-box' : 'input-box hidden'}>
                <input id={"a"+this.props.id.toString()} autoComplete='off'></input>
                </form>
            </div>
              
        )
    }
}
export default EditMessage;