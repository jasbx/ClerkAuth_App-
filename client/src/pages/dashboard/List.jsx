import React, { useEffect, useState } from "react";
import "../../App.css";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
const List = () => {
  const [product, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/get/product/")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      <table id="customers">
        <tr>
          <th>amount</th>
          <th>category</th>
          <th>paymentMethod</th>
          <th>description</th>
          <th>Delete</th>
          <th>View</th>
        </tr>
        {product.map((item) => (
          <tr key={item._id}>
            <td>{item.amount}</td>
            <td>{item.category}</td>
            <td>{item.paymentMethod}</td>
            <td>{item.description}</td>
            <td><MdDelete/></td>
            <td><FaEye/></td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default List;
