import React, { useState } from "react";
import { connect } from "react-redux";
import { postProduct } from "../../actions/productActions";
import axiosWithAuth from "../../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";
import Button from "./Button";

const AddItem = () => {
  const { push } = useHistory();
  const [addItem, setAddItem] = useState({
    name: "",
    price: "",
    category: "",
    location: "",
    users_id: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setAddItem({
      ...addItem,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://bw-african-marketplace-lucas.herokuapp.com/api/market/items",
        addItem
      )
      .then((res) => {
        setAddItem({
          name: "",
          price: "",
          category: "",
          location: "",
          users_id: "",
        });
        if (res) {
          push("/HomePage");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>Add a new product:</div>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={addItem.name}
            onChange={handleChange}
            placeholder="Name"
          />

          <div>
            <label>Price</label>
            <input
              type="text"
              name="price"
              value={addItem.price}
              onChange={handleChange}
              placeholder="Price"
            />
          </div>
          <div>
            <label>Category</label>
            <input
              type="text"
              name="category"
              value={addItem.category}
              onChange={handleChange}
              placeholder="Category"
            />
          </div>
          <div>
            <label>User Id</label>
            <input
              type="text"
              name="users_id"
              value={addItem.users_id}
              onChange={handleChange}
              placeholder="UserId"
            />
          </div>
          <div>
            <label>Location</label>
            <input
              type="text"
              name="location"
              value={addItem.location}
              onChange={handleChange}
              placeholder="Location"
            />
          </div>
          <div>
            <Button type="submit">submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddItem;
connect(
  (state) => {
    return {
      productData: state.productData,
      error: state.error,
      isFetching: state.isFetching,
    };
  },
  { postProduct }
);
