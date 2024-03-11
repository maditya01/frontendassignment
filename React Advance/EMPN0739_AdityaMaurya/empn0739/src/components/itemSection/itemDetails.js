import React , {useState} from "react";
import { Label, Stack, StackItem, Text, mergeStyles } from "@fluentui/react";
import cart from "../../images/common/add-to-cart.png";

const priceTextStyles = mergeStyles({
  marginTop: "8px",
  color: "red",
  textAlign: "initial",
});

const marginTop = mergeStyles({
  marginTop: "8px",
});

const textAlign = mergeStyles({
  textAlign: "initial",
});

const stackStyles = {
  root: {
    padding: "8px 16px",
  },
};

//EMPN0739 Aditya Maurya Update ItemDetails Class to functional component and created Hooks 
function useProductQuantity(initialQuantity) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (e) => {
    setQuantity(parseInt(e.target.value, 10));
  };

  return [quantity, handleChange];
}

function ItemDetails(props) {
  const [quantity, handleChange] = useProductQuantity(0);

  const getDetails = () => (
    <>
      <Label className={textAlign}>{props.productDetails.name}</Label>
      <Text className={textAlign}>{props.productDetails.description}</Text>
      <Text className={priceTextStyles} variant="xLarge" block>
        ${props.productDetails.price * quantity}
      </Text>
    </>
  );

  const getActions = () => (
    <>
      <Text block> Qty</Text>
      <select
        name="quantity"
        id="product-quantity"
        onChange={handleChange}
        value={quantity}
      >
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <div className={marginTop}>
        <img
          onClick={() => {
            props.onAdd(
              props.productDetails.id,
              props.productDetails.name,
              props.productDetails.description,
              props.productDetails.price,
              quantity
            );
          }}
          height="30px"
          src={cart}
          alt="Add to Cart"
        />
      </div>
    </>
  );

  return (
    <Stack styles={stackStyles} horizontal horizontalAlign="space-between">
      <StackItem>{getDetails()}</StackItem>
      <StackItem>{getActions()}</StackItem>
    </Stack>
  );
}

export default ItemDetails;
