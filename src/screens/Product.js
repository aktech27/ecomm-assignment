import React, { useState } from "react";
import { useParams } from "react-router";
import productList from "../assets/productList.json";
import Dialog from "../components/Dialog/Dialog";
import Banana from "../assets/img/Banana.jpg";
import Drumstick from "../assets/img/Drumstick.jpg";
import Orange from "../assets/img/Orange.jpg";
import Potato from "../assets/img/Potato.jpg";
import Header from "../components/Header/Header";

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(
    productList.filter((product) => product.id === parseInt(id))[0]
  );
  const [qty, setQty] = useState(0);
  const [visibility, setVisibility] = useState("hidden");
  const showModal = () => {
    product.quantity = qty;
    setProduct(product);
    setVisibility("visible");
  };

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
    <div>
      <Header heading="Product View" />

      <Dialog visibility={visibility} setVisibility={setVisibility} product={product} />
      <div className="product-ind">
        <img src={img} alt="Product" height="400" width="400" />
        <h1>
          {product.name} - ₹. {product.price}
        </h1>
        <h3>{product.vendor}</h3>
        <div class="qty-selector">
          <button className="add" onClick={() => setQty(qty + 1)}>
            +
          </button>
          <span>{qty}</span>
          <button
            className="remove"
            disabled={qty <= 0 ? true : false}
            onClick={() => setQty(qty - 1)}
          >
            -
          </button>
        </div>
        <button
          id="purchase"
          disabled={qty ? false : true}
          onClick={() => {
            showModal();
          }}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Product;
