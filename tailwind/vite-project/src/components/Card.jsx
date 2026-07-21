import React from 'react'
import "./Card.css"
 const Card = (props) => {
  return (
    <div className="Card bg-white  m-5 rounded-2xl  h-76 min-w-48 lg:h-76 lg:w-1/2    ">
<div className="top flex justify-center  ">
<img className="overflow-hidden h-30 w-40 rounded-2xl mt-3 " src={props.image} alt="" />

</div>
<div className="centre flex flex-col ">
    <span className='ml-2 p-2 font-sans'>{props.title}</span>
    <span className='ml-4 font-bold text-xl  font-sans'>{props.price}</span>

</div>
  <div className="bottom flex flex-row justify-between items-center mt-3">
    <button className="purchase border-2 rounded-md w-1/2 bg-gray-400 m-3">purchase</button>
    <button className="cart border-2 w-9 rounded-md bg-gray-200 m-3">
        <img src="https://cdn-icons-png.flaticon.com/128/3144/3144456.png " alt="" className="icon h-7" />
    </button>
  </div>
    </div>
  )
}
export default Card;