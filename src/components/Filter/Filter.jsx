import React from "react";
import productList from "../../assets/productList.json";
import "./Filter.css";

const Filter = ({ setProducts, products, categories }) => {
  return (
    <div className="filter">
      <span>Sort by Category:</span>
      <select
        id="select"
        onChange={(e) => {
          setProducts(products.filter((product) => product.category === e.target.value));
        }}
      >
        <option value={"none"} selected disabled hidden>
          Select a category
        </option>
        {[...new Set(categories)].map((category) => (
          <option value={category}>{category}</option>
        ))}
      </select>
      <button
        onClick={() => {
          document.querySelector("#select").value = "none";
          setProducts(productList);
        }}
      >
        Clear
      </button>
    </div>
  );
};

export default Filter;
