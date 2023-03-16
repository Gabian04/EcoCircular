import React from "react";

class StockDetail extends React.Component{
    state = {
        show:false
    }

    render(){
        const {name, total, stockEvents} = this.props
        const {show} = this.state
        return(
            <div className="StockDetail" onClick={() => this.setState({show: !show})}>
                <h2>Product: {name}| Total: {total}</h2>
                {show&&
                <div>
                {stockEvents.map(event => (
                <div className="StockEventTable__Cards">
                <p>Id: {event.id}</p> 
                <p>Type: {event.attributes.type}</p>
                <p>Quantity: {event.attributes.qty}</p>
                <p>Part: {event.attributes.Part}</p>
                <p>Product Name: {event.attributes.product.data.attributes.name}</p>
                <p>Working: {event.attributes.product.data.attributes.working}</p>
                </div>
            ))}</div>
                }
            </div>
        )

    }
}


export default StockDetail