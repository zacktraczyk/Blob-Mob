const Stat = {
  maxPower: {
    name: 'Draw',
    initial: 10,
    increase: 10,
    priceScale: [5, 10, 15, 20, 40, 50, 60, 80, 100, 150, 200],
  },
  maxSpeed: {
    name: 'Speed',
    initial: 3,
    increase: 1,
    priceScale: [50, 100, 150, 200, 400, 500],
  },
  maxHealth: {
    name: 'Health',
    initial: 20,
    increase: 20,
    priceScale: [20, 40, 50, 70, 90, 100],
  },
  maxCool: {
    name: 'Wait',
    initial: 150,
    increase: -10,
    priceScale: [10, 20, 30, 40, 60, 100, 200, 250, 300, 400, 500],
  },
}

export default Stat
