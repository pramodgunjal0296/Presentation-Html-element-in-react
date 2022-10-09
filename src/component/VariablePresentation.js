import React from 'react'

function Practice() {

  var Name='SamSung Tv';
  var Price=45000.40;
  var Stock=true;
    return (
    <>
  <div className="container-fluid">
      
 
      <h2>
        Data Binding
      </h2>
      <dl>
        <dt>Name</dt>
        <dd>{Name}</dd>
        <dt>Price</dt>
        <dd>{Price}</dd>
        <dt>Stock</dt>
        <dd>{(Stock===true?'Available':'Out Of Stock')}</dd>
      </dl>
      </div>
 </>
    
  )
}

export default Practice