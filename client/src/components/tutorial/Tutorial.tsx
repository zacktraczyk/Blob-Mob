import { motion } from 'framer-motion';
import React, { useState } from 'react';

import './Tutorial.css'

interface propsTutorial {
  onClick: Function
}

export default function Tutorial(props: propsTutorial) {

  const handleSubmit = (event: React.BaseSyntheticEvent) => {
    const tutorial = event.target.id === 'play' ? true : false;
    props.onClick(tutorial);
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <div className='tutorial'>
        <h1>Tutorial?</h1>
        <div className='choice-container'>
          <button
            type='button'
            id='skip'
            onClick={handleSubmit}
          >
            Skip Tutorial
          </button>
          <button
            className='button-prefer'
            type='button'
            id='play'
            onClick={handleSubmit}
          >
            Play Tutorial
          </button>
        </div>

      </div>
    </motion.div>
  )
}
