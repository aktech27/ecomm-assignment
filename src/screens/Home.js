import React, { useState } from "react";
import productList from "../assets/productList.json";
import ProductCard from "../components/ProductCard/ProductCard";
import Filter from "../components/Filter/Filter";

const Home = () => {
  const [products, setProducts] = useState(productList);
  let categories = [];
  products.forEach((product) => {
    categories.push(product.category);
  });
  return (
    <>
      <Filter setProducts={setProducts} products={products} categories={categories} />
      <div className="product-container">
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </>
  );
};

export default Home;
