import Hero from "./oop/hero";
import Warrior from "./oop/warrior";

const miya: Hero = new Warrior("Miya", 2000, 1000, 200)
const thamuz: Hero = new Warrior("Thamuz", 2000, 1000, 200)

console.log(miya)
console.log(thamuz)

thamuz.skill1(miya)
console.log(miya)