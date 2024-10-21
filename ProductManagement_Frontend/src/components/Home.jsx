import { useState } from "react";
import { useEffect } from "react";
import AddProductForm from "./AddProductForm";
import ProductCard from "./ProductCard";
import Cart from "./Cart";
import axios from "axios";
const Home = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [products, setProducts] = useState([
    {
      id: 120,
      name: "Product 1",
      description: "This is the description for product 1",
      price: "10",
      availability: true,
    },
    {
      id: 210,
      name: "Product 2",
      description: "This is the description for product 2",
      price: "20",
      availability: false,
    },
    {
      id: 310,
      name: "Dhoni's Jersey",
      description: "Book of Dhoni",
      price: "30",
      availability: true,
    },
  ]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Form visible:", isFormVisible);
        const response = await axios.get("http://localhost:8082/products");
        console.log(response);
        setProducts((prevProducts) => [...prevProducts, ...response.data]);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  }, [isFormVisible]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const handleCloseForm = () => {
    console.log("Form closed");
    setIsFormVisible(!isFormVisible);
  };

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    console.log("Product added to cart:", product);
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
          <button
            className="btn btn-primary"
            onClick={() => setIsFormVisible(true)}
          >
            Add Product
          </button>
        </div>
      </div>

      <div>
        <div className="container">
          <div className="row">
            <div className={`col-md-${cart.length > 0 ? 8 : 12}`}>
              <div className="row">
                {products.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    addToCart={addToCart}
                  />
                ))}
              </div>
            </div>

            {cart.length > 0 && (
              <div className="col-md-4">
                <Cart cartItems={cart} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;