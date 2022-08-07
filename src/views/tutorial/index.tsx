import { motion } from 'framer-motion';
import React, { useState } from 'react';

import './index.scss'

interface Props {
  navPlay: Function;
}

const Tutorial: React.FC<Props> = (props: Props) => {

  const { navPlay } = props;

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <div className='tutorial'>

      </div>
    </motion.div>
  )
}

export default Tutorial;
