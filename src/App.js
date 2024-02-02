import "./App.css";
import ProductList from "./Component/ProductList";
import { useState } from "react";
import { Products } from "./data/Product";
import ProductCreate from "./Component/ProductCreate";
function App() {
  const [products, setProducts] = useState(Products);

  const onCreateProduct = (product) =>{
      setProducts([...products,{id:Math.round(Math.random()*77777),...product}])
  }
  const onDeleteProduct = (id)=>{
    const updatedProduct = products.filter((prod)=>{
      return prod.id != id
    })
    setProducts(updatedProduct)
  }
  const onEditProduct = (id,data) =>{
    const updatedProducts = products.map((prod) =>{
      if (prod.id == id) {
        return{...prod,...data}
      }else{
        return prod
      }
    })
    setProducts(updatedProducts)
  } 
  return (
    <div>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList products={products} onDeleteProduct={onDeleteProduct} onEditProduct={onEditProduct} />
    </div>
  );
}

export default App;

//latihan kode pertama
{
  /* <div  className="cards">
      <ProductCard 
      nama = 'Ford' 
      deskripsi = 'Mobil Ford adalah mobil yang sangat bagus'
      imageURL =  'https://images.unsplash.com/photo-1551830820-330a71b99659?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTQ2MDgwOQ&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      />
      <ProductCard 
      nama = 'Mustang' 
      deskripsi = 'Mobil Mustang adalah mobil yang sangat ilegant'
      imageURL = 'https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTMyMzE1OA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      />
      <ProductCard 
      nama = 'Toyota' 
      deskripsi = 'Mobil toyota adalah mobil yang sangat menawan'
      imageURL =         'https://images.unsplash.com/photo-1559416523-140ddc3d238c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY5MDE0MjIxNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080'
      />
    </div> */
}
