import React, {Component} from "react";
import axios from "axios";

class AddStockEvent extends Component{
    state={
        qty:0,
        type:'add',
        Part:'proccessor',
        product: 'no',
        show: false
    }

    handleChange = (event) =>{

        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = async (event) =>{
        event.preventDefault()
        const{qty, type,Part, product}=this.state
        if(product != 'no'){
            const data ={
                data:{
                qty,
                type,
                Part,
                product
                }
                    

            }
            console.log(data)
            
            const add_stock_res = await axios({
                method: 'POST',
                url: 'http://localhost:1338/api/stockevents?populate=product,members',
                data
            })
            
           console.log(add_stock_res)
           if(add_stock_res.status===200){
            alert("Success")
            window.location = window.location
           }

        } else{
            alert("No product chosen")
            return
        }


    }
    render(){

        const{qty,type,Part,product,show}=this.state
        const{products}=this.props


        return(

        
        <div className="AddStockEvent">
            <h1>Add Stock Event<button className="AddButton" onClick={() => this.setState({show:!show})}>+Add</button></h1>
            {show &&
             <form onSubmit={this.handleSubmit}>

             <select onChange={this.handleChange} name="product" value={product}>
                 <option value='no'>Please select a product</option>
                 {products.map((product,i)=>(
                     <option key={i} value={product.id}>
                         {product.attributes.name}
                     </option>
                 ))}
             </select>
             <input onChange={this.handleChange} type="number" name= "qty" value={qty}/>
             <select onChange={this.handleChange} name="type" value={type}>
                 <option value='add'>Add</option>
                 <option value='remove'>Remove</option>
             </select>
             <input onChange={this.handleChange} type="text" name= "Part" value={Part}/>
             <button>Submit</button>
         </form>
            }
        </div>
    )}
}

export default AddStockEvent