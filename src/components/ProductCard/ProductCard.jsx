import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";
import Banana from "../../assets/img/Banana.jpg";
import Drumstick from "../../assets/img/Drumstick.jpg";
import Orange from "../../assets/img/Orange.jpg";
import Potato from "../../assets/img/Potato.jpg";

const ProductCard = ({ product }) => {
  let img;
  switch (product.name) {
    case "Banana":
      img = Banana;
      break;
    case "Drumsticks":
      img = Drumstick;
      break;
    case "Orange":
      img = Orange;
      break;
    case "Potato":
      img = Potato;
      break;
    default:
      break;
  }
  return (
    <Link to={"/product/" + product.id}>
      <div className="product-card">
        <span id="stock-status" className={"stock-" + product.available}>
          {product.available ? "In-Stock" : "Out-of-stock"}
        </span>
        <div className="img-container">
          <img src={img} alt="Denim Jeans" />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <span className="price">₹. {product.price}</span>
        </div>
        <p className="vendor">{product.vendor}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
