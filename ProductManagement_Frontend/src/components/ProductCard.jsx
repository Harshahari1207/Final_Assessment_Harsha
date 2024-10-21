const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="col-md-4 mb-4 product-card">
        <div className="card h-100">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <strong>₹{product.price}</strong>
            </p>
            <p className="card-text">
              <strong>Availability: </strong>
              {product.availability ? (
                <span className="text-success">In Stock</span>
              ) : (
                <span className="text-danger">Out of Stock</span>
              )}
            </p>
            {product.availability ? (
              <a href="#" className="btn btn-primary" onClick={() => addToCart(product)}>
                Add to Cart
              </a>
            ) : (
              <button className="btn btn-secondary" disabled>
                Unavailable
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };
  export default ProductCard;