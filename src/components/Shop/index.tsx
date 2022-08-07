import { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  navShop: Function;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { navShop } = props;

  return (
      <div className="shop">
        <h2>Shop</h2>
        <button className="upgrade-button" onClick={() => navShop()}>
          Upgrade Stats
        </button>
      </div>
  );
};

export default Shop;
