import React from 'react'
import Item from "./Item"
const Packinglist = ({items}) => {
  return (
    <div>
        <ul>
            {items.map((item,i) => <Item item = {item} key={i} />)}
        </ul>
    </div>
  )
}

export default Packinglist

// import React from 'react'
// import Item from './Item'
// const Packinglist = ({items}) => {
//   return (
//     <div>
//         <ul>
//             {items.map((item,i) => <Item item={item} key={i} />)}
//         </ul>
//     </div>
//   )
// }

// export default Packinglist