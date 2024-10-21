import { useState } from "react";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";

const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(true);

  const products = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description for product 1",
      price: "$10.00",
      available: true,
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the description for product 2",
      price: "$20.00",
      available: false,
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the description for product 3",
      price: "$30.00",
      available: true,
    },
  ];

  const handleCloseForm = () => {
    console.log("Form closed");
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="main">
      {isFormVisible && <AddProductForm handleClose={handleCloseForm} />}

      <div className="hero container d-flex flex-column justify-content-center align-items-center">
        <div className="w-100 mt-4 d-flex flex-column justify-content-center align-items-center">
          <h1 className="text-center">
            Streamline Your Workflow – Manage Products with Ease.
          </h1>
          <p className="text-center">
            A powerful platform for businesses to efficiently track, update, and
            optimize product management all in one place.
          </p>
          <button className="btn btn-primary" onClick={() => setIsFormVisible(true)}>
            Add Product
          </button>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
