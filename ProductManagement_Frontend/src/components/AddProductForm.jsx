import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddProductForm = ({ handleClose }) => {
  const [productForm, setProductForm] = useState({
    name: "",
    description: "",
    price: "",
    availability: false,
  });

  const handleChange = (e) => {
    setProductForm({
      ...productForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", productForm);
    handleClose(); // Close the form after submission
  };

  return (
    <div className="addproduct-form-container">
      <div className="card addproduct-form p-4 w-50 position-relative">
        {/* FontAwesome Close (X) Button */}
        <button className="close-btn" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>

        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" className="form-label">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              value={productForm.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              id="description"
              name="description"
              className="form-control"
              value={productForm.description}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="price" className="form-label">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-control"
              value={productForm.price}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="availability" className="form-label">Availability</label>
            <select
              id="availability"
              name="availability"
              className="form-control"
              value={productForm.availability}
              onChange={handleChange}
              required
            >
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mt-3">Add Product</button>
        </form>
      </div>
    </div>
  );
};

export default AddProductForm;
