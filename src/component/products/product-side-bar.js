
import React from "react";
import { useSelector } from "react-redux";
const ProductSideBar = ({ selectedItems }) => {
  let price = 0;
  const value=useSelector(state=>state.cartValue.value)
 
  return (
    <>
      <table className="productSideBar">
        {selectedItems.map((element) => {
          price += element.price;
          return (
            <>
              <tr>
                <td>{element.name}</td>
                <td>
                  Kgs:
                  <input id="itemsSelected" value={element.kgs} disabled />
                </td>{" "}
                <td>
                  Price:
                  <input id="itemsSelected" value={element.price} disabled />
                </td>
              </tr>
            </>
          );
        })}
        <div>
          <tr>
            {" "}
            <td>
              <b>Total Price:</b>{" "}
              <input id="totalPrice" value={price} disabled />
            </td>
          </tr>
        </div>
      </table>
    </>
  );
};
export default ProductSideBar;
