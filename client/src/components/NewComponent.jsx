import React, { useState } from 'react';

// create component
const NewComponent = () => {
  const [ variable, setVariable ] = useState("Hey there.");

  return (
    <div>
      <h2> This is from the new component. </h2>
      <div> {variable} </div>
      <label>
        Put new thing here:
        <input 
          type="text"
          value={variable}
          placeholder="change me.."
          onChange={e => setVariable(e.target.value)}
        />
      </label>

    </div>
  )
}

export default NewComponent;