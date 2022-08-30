import Button from "@Components/Button";
import { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  navShop: Function;
}

const ShopCard: React.FC<Props> = (props: Props) => {
  const { navShop } = props;

  return (
    <div className="shopCard">
      <h2>Shop</h2>
      <Button
        height="auto"
        width="100%"
        color="upgrade"
        onClick={() => navShop()}
      >
        Upgrade
      </Button>
    </div>
  );
};

export default ShopCard;
