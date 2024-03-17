// import { useDispatch, useSelector } from "react-redux";
// import { increment } from "../../redux/redux";

const ProductSideBar = ({ selectedItems }) => {
  let price = 0
  // const totalPrice=useSelector((state)=>state.cou.value)
  // const dispatch=useDispatch()
  return (<>
    <table className="productSideBar">
      {selectedItems.map((element, i) => {
        price += element.price;
        //dispatch(increment(element.price))
        return (
          <>
            <tr><td>{element.name}</td><td>Kgs:<input id="itemsSelected" value={element.kgs} disabled /></td>{" "}
              <td>Price:<input id="itemsSelected" value={element.price} disabled /></td></tr>
          </>
        );
      })}
      <div>
        <tr> <td><b>Total Price:</b> <input id="totalPrice" value={price} disabled /></td></tr>
      </div>
    </table>
  </>)
}
export default ProductSideBar