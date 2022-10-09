import React from 'react'

function ArrayPresentation() {

var categories=['Electronics','Footwear','Fashion'];

  return (
    <>
    <h2>Data Binding</h2>
    <ol>
        {
            categories.map(category=>
                <li key={category}>{category}</li>
            )
        }
    </ol>
    <h2>Select a Category</h2>
    <select>
        {
            categories.map(category=>
                <option key={category}>{category}</option>
                )
        }
    </select>
     <h2>Select Categories</h2>
      <ul className='list-unstyled'>
        {
            categories.map(category=>
                <li key={category}><input type="checkbox"/><span>{category}</span></li>
                )
        }
      </ul>
      <h2>Table Categories</h2>
      <table className='table table-dark'>
        <thead>
            <tr>
                <th>Categories</th>
            </tr>
        </thead>
        <tbody>
            {
                categories.map(category=>
                    <tr key={category}>
                        <td>{category}</td>
                    </tr>
                    )
            }
        </tbody>

      </table>


      </>
  )
}

export default ArrayPresentation