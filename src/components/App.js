import React from 'react'

const App = () => {
  const relatives=["Uncle Bob", "Aunt Alice", "Cousin John", "Grandma Marie", "Grandpa Joe"];
  return (
    <div key="main">
          <ol key="relativeList">
            {
               relatives.map((relative,index)=>(
                  <li key={`relativeListItem${index+1}`}>{relative}</li>
               ))
            }
          </ol>
    </div>
  )
}

export default App
