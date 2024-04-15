import React from 'react'

const Item = ({item}) => {
    console.log(item);
  return (
    <li className='itemspan'>
    <span>{item.description}</span>
    </li>
  )
}

export default Item



// import React from 'react'

// const Item = ({item}) => {
// console.log(item);
//   return (
//     <div>
//         <li>
//             <span>{item.quantity} {item.description}</span>
//         </li>
//     </div>
//   )
// }

// export default Item