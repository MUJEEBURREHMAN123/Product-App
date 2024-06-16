import React, { useState } from "react";
import axios from "axios";

function ProductForm() {
  const [product, setProduct] = useState({ name: "", description: "", price: "", category: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/addproduct", product);
      console.log("Product created:", response.data);
      setProduct({ name: "", description: "", price: "", category: "" });
    } catch (error) {
      console.error("Error creating product:", error);
      setError("Failed to create product. Please try again later.");
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <h1 style={{ color: 'white', backgroundColor: 'Black', textAlign: 'center', fontSize: 50, display: 'inline-block' }} className="form-control">
          Zam Zam Electronics
        </h1>
      </div>
      <br></br><br></br>
      <form onSubmit={handleSubmit}>
        <h1 style={{ color: 'white', backgroundColor: 'Black', textAlign: 'center', fontSize: 30, display: 'inline-block' }} className="form-control">
          Add Product
        </h1>
        <div className="mb-3 mt-4">
          <input
            type="text"
            className="form-control"
            name="name"
            value={product.name}
            onChange={handleChange}
            placeholder="Enter Product Name"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            name="description"
            value={product.description}
            onChange={handleChange}
            placeholder="Enter Product Description"
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            name="price"
            value={product.price}
            onChange={handleChange}
            placeholder="Enter Product Price"
          />
        </div>
        <div className="mb-3">
          <input
          
            type="text"
            className="form-control"
            name="category"
            value={product.category}
            onChange={handleChange}
            placeholder="Enter Product Category"
          />
        </div>
        <div className="text-center">
          <button style={{ backgroundColor: 'black', color: 'white' }} className="btn btn-outline-info" type="submit">
            Add Product
          </button>
        </div>
      </form>

      <div>
        <br></br> <br></br><br></br>
        <h1 style={{ color: 'black', backgroundColor: 'White', Align: 'center', fontSize: 30, display: 'inline-block' }} className="form-control">
          Introduction
        </h1>
        <div style={{ color: 'green', backgroundColor: 'pink', display: 'inline-block' }}>
          <p >
            Welcome to ZAM ZAM Electronics! We offer a wide range of electronic products to cater to all your needs.
            Browse through our collection and add your favorite products to the cart. Our mission is to provide high-quality
            electronics at affordable prices with excellent customer service. Thank you for choosing us!
          </p>
        </div>
        <br></br><br></br><br></br>

        <iframe width="560" height="315" src="https://www.youtube.com/embed/HafPYW3Lb8I?si=JjnA5UwJ1AldkhHB"
          title="YouTube video player" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"  allowfullscreen></iframe>

        <br></br><br></br><br></br><br></br><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  
        <h1 style={{ color: 'white', backgroundColor: 'Black', textAlign: 'center', fontSize: 30, display: 'inline-block' }} className="form-control">
          Contact Us
        </h1>
      </div>
    </div>
  );
}

export default ProductForm;
