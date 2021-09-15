import React, { useState } from "react";
import productList from "../assets/productList.json";
import ProductCard from "../components/ProductCard/ProductCard";

const Home = () => {
  const [products, setProducts] = useState(productList);

  return (
    <>
      <div className="product-container">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
