import React from "react";
import { useState } from "react";
const ProductCreate = ({onCreateProduct}) => {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFromData] = useState(initialState);

  const { nama, deskripsi, imageURL } = formData;
  const handleShow = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = (e) =>{
    e.preventDefault()
    onCreateProduct(formData)
    setFromData(initialState)
  }
  const handleChange = (e)=> {
    setFromData({...formData,[e.target.name]:e.target.value})
  }
  return (
    <div className="product-create">
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toggle">
          {showForm ? "close Form" : "add Products"}
        </button>
      </div>
      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-add-title">add Product</div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="nama"
              placeholder="masukan nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="deskripsi"
              placeholder="masukan deskripsi"
              value={deskripsi}
              onChange={handleChange}

            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="add-input-text"
              name="imageURL"
              placeholder="masukan imageURL"
              value={imageURL}
              onChange={handleChange}

            />
          </div>
          <input type="submit" className="edit-input-submit add" />
        </form>
      )}
    </div>
  );
};

export default ProductCreate;
