import React from 'react'
import axios from 'axios'

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css';
import StockEventsTable from './components/StockEventsTable'
import AddStockEvent from './components/AddStockEvent'
import AddProduct from './components/AddProduct';
import Nav from './components/Nav'


class App extends React.Component{
   state = {
    fetchproducts:[],
    fetchstockEvent:[]
   }
   async componentDidMount(){

    const productRes = await axios({
      method: 'GET',
      url:'http://localhost:1338/api/products'
    })

    const stockEventsRes = await axios({
      method: 'GET',
      url: 'http://localhost:1338/api/stockevents?populate=product,members'
    })
    const fetchproducts = productRes.data.data
    const fetchstockEvent = stockEventsRes.data.data
    console.log(fetchstockEvent)

    this.setState({fetchproducts, fetchstockEvent})

   }
   
  render(){
    const {fetchproducts,fetchstockEvent}= this.state
    return (
      <div className="App">
        
        <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/products" element={<AddProduct/>}/>
          <Route path="/add" element={<AddStockEvent products={fetchproducts}/>} />
          <Route path='/stock' element={<StockEventsTable products={fetchproducts} stockEvents={fetchstockEvent}/> }/>
         
        </Routes>
        
        
        
        </BrowserRouter>
        
      </div>
    );

  }
}



export default App;
