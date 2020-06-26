import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import axiosWithAuth from "../utils/axiosWithAuth";
import Button from "./Forms/Button";

const initialState = {
  category: "",
  location: "",
  name: "",
  price: "",
  users_id: null,
};

export default function HomePage() {
  const token = localStorage.getItem("userId");
  console.log(token);
  const [productsA, setproductsA] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(initialState);
  const [editing, setEditing] = useState(false);
  const { push } = useHistory();
  const { id } = useParams();

  
  useEffect(() => {
    axiosWithAuth()
      .get("/api/market/items")
      .then((res) => {
        setproductsA(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHandler = (id) => {
    axiosWithAuth()
      .delete(
        `https://bw-african-marketplace-lucas.herokuapp.com/api/market/items/${id}`
      )
      .then((res) => {})
      .catch((err) => {
        console.log(err);
      });
  };

  const editOnClick = (item) => {
    setEditing(true);
    setItemToEdit(item);
  };

  const saveEdit = (e) => {
    e.preventDefault();
    const itemId = itemToEdit.id;
    const editedItem = {
      category: itemToEdit.category,
      location: itemToEdit.location,
      name: itemToEdit.name,
      price: itemToEdit.price,
      users_id: itemToEdit.users_id,
    };
    console.log("editedItem", editedItem);
    axiosWithAuth()
      .put(
        `https://bw-african-marketplace-lucas.herokuapp.com/api/market/items/${itemId}`,
        editedItem
      )
      .then((res) => {
        console.log("res", res);
        setproductsA(res.data);
        window.location.reload();
      })
      .catch((error) => console.log("Error", error));
  };

  
  return (
    <div>
      <h1>Products: </h1>
      {productsA.length > 0 && (
        <div>
          {productsA.map((item) => {
            return (
              <div key={item.id}>
                <p>Name: {item.name}</p>
                <p>Category: {item.category}</p>
                <p>Location: {item.location}</p>

                <p>{item.price}</p>
                <Button
                  onClick={() => {
                    editOnClick(item);
                  }}
                >
                  Edit Product
                </Button>
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteHandler(item.id);
                  }}
                >
                  Delete Product
                </Button>
              </div>
            );
          })}
        </div>
      )}

      {editing && (
        <form onSubmit={saveEdit}>
          <Button>Edit Product</Button>
          <label>
            Name:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, name: e.target.value })
              }
              value={itemToEdit.name}
            />
          </label>
          <label>
            Category:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, category: e.target.value })
              }
              value={itemToEdit.category}
            />
          </label>
          <label>
            Location:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, location: e.target.value })
              }
              value={itemToEdit.location}
            />
          </label>

          <label>
            Price:
            <input
              onChange={(e) =>
                setItemToEdit({ ...itemToEdit, price: e.target.value })
              }
              value={itemToEdit.price || ""}
            />
          </label>
          <div>
            <Button type="submit">Save</Button>
            <Button onClick={() => setEditing(false)}>Cancel</Button>
          </div>
        </form>
      )}
    </div>
  );
}
