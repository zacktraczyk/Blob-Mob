import { motion } from 'framer-motion'
import './Scoreboard.css'

export default function Scoreboard() {

  return (
    <motion.div
      initial={{ y: 300, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 300, opacity: 0 }}
    >
      <div className='scoreboard'>
        <h1>Top Scores</h1>
        <ul>
          <li>
            <p className='name'>Bob</p>
            <p className='score'>134</p>
          </li>
          <li>
            <p className='name'>Sal</p>
            <p className='score'>127</p>
          </li>
          <li>
            <p className='name'>John</p>
            <p className='score'>12</p>
          </li>
          <li>
            <p className='name'>Bob</p>
            <p className='score'>134</p>
          </li>
          <li>
            <p className='name'>Sal</p>
            <p className='score'>127</p>
          </li>
          <li>
            <p className='name'>John</p>
            <p className='score'>12</p>
          </li>
          <li>
            <p className='name'>Bob</p>
            <p className='score'>134</p>
          </li>
          <li>
            <p className='name'>Sal</p>
            <p className='score'>127</p>
          </li>
          <li>
            <p className='name'>John</p>
            <p className='score'>12</p>
          </li>
          <li>
            <p className='name'>Bob</p>
            <p className='score'>134</p>
          </li>
          <li>
            <p className='name'>Sal</p>
            <p className='score'>127</p>
          </li>
          <li>
            <p className='name'>John</p>
            <p className='score'>12</p>
          </li>
          <li>
            <p className='name'>Bob</p>
            <p className='score'>134</p>
          </li>
          <li>
            <p className='name'>Sal</p>
            <p className='score'>127</p>
          </li>
          <li>
            <p className='name'>John</p>
            <p className='score'>12</p>
          </li>
        </ul>
      </div>
    </motion.div>
  )
}