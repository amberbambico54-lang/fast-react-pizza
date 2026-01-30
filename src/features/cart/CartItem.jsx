import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/currency";
import { deleteItem } from "./cartSlice";

function CartItem({ item }) {
  const dispatch = useDispatch();
  const { pizzaId, name, quantity, totalPrice } = item;
  function handleDeleteItem(id) {
    dispatch(deleteItem(id));
  }
  return (
    <li className="gap-4 py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <Button type="small" onClick={() => handleDeleteItem(pizzaId)}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
