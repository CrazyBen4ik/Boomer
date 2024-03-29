// Наш герой.
const registrationUser = require('../../registration');

class Hero {
  constructor({ position, score }) {
    this.skin = '🤠'; // можете использовать любые emoji '💃'
    this.position = position;
    this.score = score || 0;
  }

  moveLeft() {
    // Идём влево.
    this.position -= 1;
  }

  moveRight() {
    // Идём вправо.
    this.position += 1;
  }

  attack() {
    // Атакуем.
    this.boomerang.fly();
  }

  die() {
    this.skin = '💀';
    console.log(`You are dead, your final score is ${this.score}`);
    process.exit();
  }
}

module.exports = Hero;
