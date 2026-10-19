function Product() {
  let products = [
    { id: 1, name: "Clavier", price: 150, stock: true },
    { id: 2, name: "Souris", price: 80, stock: true },
    { id: 3, name: "Écran", price: 1200, stock: false },
    { id: 4, name: "Casque", price: 250, stock: true },
  ];
  return(
    <div>
        {products.map((product,index)=>(
            <div key={product.id}>
                <h1>produit {index+1}</h1>
                <p>nom produit:{product.name}</p>
                <p>prix:{product.price}</p>
                <p>{product.stock?'disponible':'Rupture de stock'}</p>
            </div>
            
        )
        )}
    </div>
  )
}
export default Product