import React from 'react'


function Component(props) {
  return ( 
    <div>
      <div className="achievement" id="experience"> 
         <div className="E-Component">
        <span className=" circle" >{props.text}</span>
        <span className='year' >{props.year} </span>
        <span className='Text' >{props.Text} </span>
      </div>

      </div>

    </div>
  )
}

export default Component;
