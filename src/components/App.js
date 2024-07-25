import React from 'react'

const App = () => {
  const relatives=["Uncle Bob", "Aunt Alice", "Cousin John", "Grandma Marie", "Grandpa Joe"];
  return (
    <div id="main">
          <ol key="relativeList">
            {
               relatives.map((relative,index)=>(
                  <li key={`relativeListItem${index}`}>{relative}</li>
               ))
            }
          </ol>
    </div>
  )
}

export default App
