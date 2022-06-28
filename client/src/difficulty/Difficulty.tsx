import { motion } from 'framer-motion'
import { Game } from '../game/game'
import './Difficulty.css'

export default function Difficulty(props: any) {

  const selectDifficulty = (d: number) => {
    // props.gameAttributes.updateDifficulty(d);
    console.log('Difficulty.tsx: selectDifficulty():', d);
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
    >
      <div className='difficulty'>
        <h2>Difficulty</h2>
        <div className='select'>
          <button onClick={selectDifficulty}>1</button>
          {/* <button>3</button> */}
        </div>

      </div>
    </motion.div>
  )
}
