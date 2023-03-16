import React, {Component} from "react";
import axios from "axios";
import '../App.css';
class AddProduct extends Component{
    state={
        name:'',
        working:''
    }

    handleChange = (event) =>{

        this.setState({[event.target.name]:event.target.value})
    }
    handleSubmit = async (event) =>{
        event.preventDefault()
    const {name,working}=this.state
    

    const create_product_res = await axios({
        method: 'POST',
        url:'http://localhost:1338/api/products?populate=product,members',
        data:{
            data:{
            name,
            working
            }
        }

    })
    if(create_product_res.status=== 200){
        alert("Successfully created product")
        window.location = window.location
    }
}
    render(){
        const {name,working}=this.state
        
        return(
            <div className="AddProduct">
                
                <form onSubmit={this.handleSubmit} className="AddProduct">
                    <label>
                        Name:
                    <input onChange={(event)=> this.setState({name:event.target.value})}type="text" name="name" value={name}/>
                    </label>
                    <label>
                        Working?:
                    <input onChange={this.handleChange} type="text" name= "working" value={working}/>
                    </label>
                <button type="submit">Create new product</button>
         </form>
            </div>

        )
    }
}

export default AddProduct