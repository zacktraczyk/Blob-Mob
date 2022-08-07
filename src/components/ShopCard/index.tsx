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
        <button className="upgrade-button" onClick={() => navShop()}>
          Upgrade Stats
        </button>
      </div>
  );
};

export default ShopCard;
