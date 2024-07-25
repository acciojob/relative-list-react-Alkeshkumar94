import React from "react";

const App = () => {
  const relatives = [
    "Uncle Bob",
    "Aunt Alice",
    "Cousin John",
    "Grandma Marie",
    "Grandpa Joe",
  ];
  return (
    <div id="main">
      <ol id="relativeList" key="relativeList">
        {relatives.map((relative, index) => (
          <li id="relativeListItem1" key={`relativeListItem${index + 1}`}>{relative}</li>
        ))}
      </ol>
    </div>
  );
};

export default App;
