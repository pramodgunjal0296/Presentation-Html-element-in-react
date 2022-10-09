import React from 'react'

function ObjectPresentation() {

  var product={"id":8,"title":"Pierced Owl Rose Gold Plated Stainless Steel Double","price":10.99,"description":"Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel","category":"jewelery","image":"https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg","rating":{"rate":1.9,"count":100}}
  
  return (
    <>
    <div className="container-fluid">
      <h2>Product Details</h2>
      <dl>
        <dt>Title</dt>
        <dd>{product.title}</dd>
         <dt>Price</dt>
         <dd>{product.price}</dd>
         <dt>Preview</dt>
         <dd><img alt='Product Preview' src={product.image} height="200px" width="200px"/></dd>
         <dt>Rating</dt>
         <dd>{product.rating.rate}</dd>
      </dl>
    </div>
    </>
  )
}

export default ObjectPresentation