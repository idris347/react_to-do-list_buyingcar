import React from "react";
import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import ProductEdit from "./ProductEdit";

const ProductCard = ({ product, onDeleteProduct ,onEditProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;
  const [jumlahProduct, setjumlahProduct] = useState(0);
  const [showEdit, setShowEdit] = useState(false);
  const kurangProduct = () => {
    setjumlahProduct(jumlahProduct - 1);
  };
  const tambahProduct = () => {
    setjumlahProduct(jumlahProduct + 1);
  };
 
  const handleShow = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id,data) => {
    setShowEdit(false)
    onEditProduct(id,data)
  }
  const cancelEdit = () => {
    setShowEdit(false)
  }
    return (
    <div className="card">
      {showEdit ? (
        <ProductEdit product={product} onEditProduct={handleSubmit} cancelEdit={cancelEdit} />
      ) : (
        <>
          <div className="edit-delete">
            <MdEdit onClick={handleShow} className="icon-edit" />
            <MdDeleteForever onClick={()=>onDeleteProduct(id)} className="icon-delete" />
          </div>
          <img
            style={{
              width: "100%",
              height: "200px",
              borderRadius: "10px 10px 0px 0px",
            }}
            src={imageURL}
            alt="gambar"
          />

          <div className="container">
            <h4>
              <b>{nama}</b>
            </h4>
            <p>{deskripsi}</p>
          </div>
          <div
            className={`card-keranjang ${
              jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"
            }`}
          >
            {jumlahProduct > 0 ? (
              <>
                <button onClick={kurangProduct} className="button">
                  -
                </button>
                <div>{jumlahProduct}</div>
                <button onClick={tambahProduct} className="button">
                  +
                </button>
              </>
            ) : (
              <div className="keranjang" onClick={tambahProduct}>
                keranjang
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCard;
