import React from "react";
import { useState } from "react";

const ProductEdit = ({ product,onEditProduct,cancelEdit }) => {
  const initialState = {
    nama: product.nama,
    deskripsi: product.deskripsi,
    imageURL: product.imageURL,
  };
  const [formdata, setFormData] = useState(initialState);
  const {nama,deskripsi,imageURL} = formdata
  const handleChange = (e) => {
    setFormData({...formdata,[e.target.name]:e.target.value})
  }
  const handleSubmit= (e) => {
    e.preventDefault();
    onEditProduct(product.id,formdata)
  } 
  const onCancel = (e) => {
    e.preventDefault()
    cancelEdit()
  }
   return (
    <div className="product-edit">
      <div className="edit-title">Edit Product</div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="edit-input-text"
            placeholder="Masukan text"
            onChange={handleChange}
            name="nama"
            value={nama}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="edit-input-text"
            placeholder="Masukan text"
            onChange={handleChange}
            name="deskripsi"
            value={deskripsi}

          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="edit-input-text"
            placeholder="Masukan text"
            onChange={handleChange}
            name="imageURL"
            value={imageURL}

          />
        </div>
        <input type="submit" className="edit-input-submit save" value="save" />
        <button onClick={onCancel} className="edit-input-submit cancel">cancel</button>
      </form>
    </div>
  );
};

export default ProductEdit;
