import React from 'react'
import ReactDOM from "react-dom"

function List() {
   return (
      <ul>
         <li>Item 1</li>
         <li>Item 2</li>
         <li>Item 3</li>
      </ul>
   );
}

ReactDOM.render(List(), document.getElementById('root'));