import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./index.scss";

interface Props {
  navShop: Function;
}

const Shop: React.FC<Props> = (props: Props) => {
  const { navShop } = props;

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div className="shop">
        <h2>Shop</h2>
        <button className="upgrade-button" onClick={() => navShop()}>
          Upgrade Stats
        </button>
      </div>
    </motion.div>
  );
};

export default Shop;
