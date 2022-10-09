import React from 'react'

const DynamicObject = () => {

    var products=[
        {Name:'Samsung Tv', Price:45000.50,Stock:true},
        {Name:'Nike Casuals', Price:67900.70,Stock:false}
    ];
  return (
   <>
   <div class="container-fluid">
    <table className='table table-hover'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
           {
            products.map(product=>
                <tr>
                    <td>{product.Name}</td>
                    <td>{product.Price}</td>
                    <td>{(product.Stock)===true?'Available':'Out Of Stock'}</td>
                    <td>
                        <button className='btn btn-primary'>
                            <span className="bi bi-eye-fill"></span>
                        </button>
                    </td>
                    <td>
                        <button className='btn btn-warning'>
                            <span className="bi bi-eye-trash"></span>
                        </button>
                    </td>
                </tr>
                )
           }
        </tbody>
    </table>
   </div>
   </>
  )
}

export default DynamicObject