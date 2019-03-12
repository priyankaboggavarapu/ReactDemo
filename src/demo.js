import React,{Component} from 'react'

class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            Name:"",
            Qualification:""
        }
        this.handleinput=this.handleinput.bind(this)

    }
    handleinput(e){
        this.setState({
            [e.target.name]:e.target.value

        })

    }
    render(){
        const {Name}=this.state
        return(
            
            
            <div>
           <h3> MyDemo</h3>
           <input name='Name' value={Name} id='name' onChange={this.handleinput} />
           {Name}
                </div>
        )
    }

} 
export default Demo