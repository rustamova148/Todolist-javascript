import React from 'react'
import { Fragment,useState } from 'react'
import "./App.css"
import Form from "./components/Form"
import Packinglist from "./components/Packinglist"
const App = () => {
const[items,setItems] = useState([]);
const handleAddItem = (newItem) => setItems(items => [...items,newItem]);
  return (
    <Fragment>
    <div className='container'>
      <div className='box'>
        <Form handleAddItem = {handleAddItem}/>
        <Packinglist  items={items}/>
      </div>
    </div>
    </Fragment>
  )
}

export default App



// import './App.css';
// import React,{useState} from 'react'
// import Form from "./components/Form.jsx"
// import Packinglist from "./components/Packinglist.jsx"

// const App = () => {
// const [items, setItems] = useState([]);
// const handleAddItem = newItem => setItems(items => [...items,newItem]);
//   return (
//     <div>
//     <Form handleAddItem = {handleAddItem}/>
//     <Packinglist items = {items}/>
//     </div>
//   )
// }

// export default App;

