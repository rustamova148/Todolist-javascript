import React from 'react'
import { Fragment,useState } from 'react'
import cem from "../../src/assets/cem.png"
const Form = ({handleAddItem}) => {
const[description,setDescription] = useState("");

const handleSubmit = (e) => {
e.preventDefault();
if(!description) return;
const newItem = {
    id:Date.now(),
    description:description
}

handleAddItem(newItem);
setDescription("");
}

  return (
    <Fragment>
        <div>
            <form onSubmit = {handleSubmit}>
            <h2 className='title'>Todo App</h2>
            <input className = "input-txt" type="text" value={description} onChange={(e)=>setDescription(e.target.value)} placeholder='Add your new todo'/>
            <button className='cem'>
                <img src={cem} alt="cem" />
            </button>
            </form>
        </div>
    </Fragment>
  )
}

export default Form

// import React, { Fragment, useState } from 'react'
// const Form = ({handleAddItem}) => {
//   const [description, setDescription] = useState("");
//   const [quantity, setQuantity] = useState(1);


//     const handleSubmit = (e) => {
//     e.preventDefault();
//     if(!description) return;
//     const newItem = {
//     id:Date.now(),
//     description:description,
//     quantity:quantity,
//     packed:false
//     };

//     handleAddItem(newItem);
//     setDescription("");
//     setQuantity(1);
//   };

//     return (
//     <Fragment>
//         <form className='add-form' onSubmit = {handleSubmit}>
//          <h3>Let's pack!</h3>
//          <select value = {quantity} onChange = {e => setQuantity(e.target.value)}>
//             {Array.from({length: 20 }, (_, i) => i + 1).map((num) => (
//                 <option value={num} key={num}>
//                     {num}
//                 </option>
//             ))}
//          </select>
//          <input type="text" placeholder='sun lotion'
//          value = {description}
//          onChange = {e => setDescription(e.target.value)}
//          />
//          <button>Add</button>
//         </form>
//     </Fragment>
//   )
// }

// export default Form